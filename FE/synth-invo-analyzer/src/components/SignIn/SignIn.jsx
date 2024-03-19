import React, { useState } from 'react';
import './SignIn.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';

const SignIn = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/userauth/signin/', {
        email,
        password
      });
      
      // Handle response as needed
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <div className="box">
          <p>Username</p>
        </div>

        <div className="input-box">
          <input 
            type="email" 
            placeholder='Username' 
            value={email}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <FaUser className='icon' />
        </div>

        <div className="box">
          <p>Password</p>
        </div>

        <div className="input-box">
          <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <FaLock className='icon' /> 
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
        </div>
        
        <button type='submit'>Sign In</button>

        <div className="remember">
          <p>Forgot Password? <a href="#">Click here</a></p>
        </div>

        <div className="register-link">
          <p>Don't have an account? <a href="#">Register here</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

