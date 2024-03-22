import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignUpPage/SignUpPage'; // Adjust the import path
import PricingPage from './components/Analytics/Analytics'; // Adjust the import path
import LayoutPage from './pages/LayoutPage/LayOutPage';
const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<HomePage />} />
    //     <Route exact path="/signup" element={<SignupPage />} />
    //     <Route exact path="/pricing" element={<PricingPage />} />
    //   </Routes>
    // </Router>
    <LayoutPage/>
  );
};

export default App;
