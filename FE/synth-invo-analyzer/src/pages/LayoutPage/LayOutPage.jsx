import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderInside from '../../components/HeaderInside/HeaderInside';
import Navbar from '../../components/Navbar/Navbar';
import Upload from '../../components/Upload/Upload';
import Dashboard from '../../components/Dashboard/Dashboard';
import ViewInvoices from '../../components/Upload/Upload'; 
import DeleteInvoices from '../../components/Upload/Upload'; 
import Suppliers from '../../components/Suppliers/Suppliers';
import Analytics from '../../components/Analytics/Analytics';
import AccountSettings from '../../components/AccountSettings/AccountSettings';
import './LayoutPage.css';

const LayoutPage = () => {
  return (
    <Router>
      <div>
        <div className='page-container'>
          <div className='top-header'>
            <HeaderInside />
          </div>
          <div className='content-box'>
            <div className='side-nav'>
              <Navbar />
            </div>
            <div className='content'>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/upload-invoices" element={<Upload />} />
                <Route path="/view-invoices" element={<ViewInvoices />} />
                <Route path="/delete-invoices" element={<DeleteInvoices />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/account" element={<AccountSettings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default LayoutPage;
