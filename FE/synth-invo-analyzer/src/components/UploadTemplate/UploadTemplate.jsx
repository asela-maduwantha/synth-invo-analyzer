import React, { useState, useRef } from "react";
import axios from "axios";
import "./UploadTemplate.css";
import UploadIcon from "../../assets/uploadicon.svg";


function UploadTemplate() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("file", file);
    });
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/uploadTemplate/match/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data.misMatchedFactors[0])
      if (response.status === 200) {
        setUploadStatus({
          type: "success",
          message: "Files uploaded successfully!",
        });
        setSelectedFiles([]);
      } else if (response.status === 201) {
        
        setUploadStatus({
          type: "error",
          message: "Mismatches Found.",
        });
        
      } else {
        console.log("Error status:", response.status);
        setUploadStatus({
          type: "error",
          message: "Error uploading files. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error uploading files: ");
      setUploadStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    }
  };
  
  const handleAreaClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className="container">
        <div className="upload-text">
          <h1>Add Your Supplier Templates Here...</h1>
        </div>
        <div
          className="drop-area"
          onClick={handleAreaClick}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
        >
          <img src={UploadIcon} alt="file icon" className="file-icon" />
          <p className="file-text">Drop template here or click to select</p>

          <input
            type="file"
            id="fileInput"
            className="d-none"
            onChange={handleFileSelect}
            ref={fileInputRef}
            multiple
          />
        </div>

        <div className="selected-files">
          {selectedFiles.map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </div>

        <div className="upload-btns">
          <div className="select-btn">
            <button
              className="btn btn-success"
              onClick={() => fileInputRef.current.click()}
            >
              Select Template
            </button>
          </div>
          <div className="upload-btn">
            <button className="btn btn-success" onClick={handleUpload}>
              Upload Template
            </button>
          </div>
        </div>

       <div class="alert-box">
       {uploadStatus && (
          <div className={`alert ${uploadStatus.type === "success" ? "alert-success" : "alert-danger"}`} role="alert">
            {uploadStatus.message}
          </div>
        )}
       </div>
      </div>
    </div>
  );
}

export default UploadTemplate;