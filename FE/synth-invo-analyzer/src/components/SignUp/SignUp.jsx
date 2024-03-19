import React, { useState } from 'react';
import './SignUp.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailError && passwordStrength === 'Strong' && confirmPassword === password) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/userauth/signup/', {
          username,
          email,
          password
        });

        alert("User signup success..");
        console.log(response.data);
      } catch (error) {
        alert("Failed to signup user");
        console.error('Error:', error);
      }
    }
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    const isValidEmail = /\S+@\S+\.\S+/.test(enteredEmail) && enteredEmail.includes('gmail.com');
    setEmailError(isValidEmail ? '' : 'Please enter a valid Gmail address');
  };

  const calculatePasswordStrength = (password) => {
    if (password.length >= 8) {
      return 'Strong';
    } else if (password.length >= 4) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    const strength = calculatePasswordStrength(enteredPassword);
    setPasswordStrength(strength);
  };

  const handleConfirmPasswordChange = (e) => {
    const enteredConfirmPassword = e.target.value;
    setConfirmPassword(enteredConfirmPassword);

    setConfirmPasswordError(enteredConfirmPassword === password ? '' : 'Passwords do not match');
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 'Weak':
        return 'red';
      case 'Medium':
        return '#FFDF00';
      case 'Strong':
        return 'darkblue';
      default:
        return 'black';
    }
  };

  const renderPasswordStrengthBar = () => {
    const barWidth = (password.length / 8) * 100;
    let strengthText = '';

    switch (passwordStrength) {
      case 'Weak':
        strengthText = 'Weak';
        break;
      case 'Medium':
        strengthText = 'Medium';
        break;
      case 'Strong':
        strengthText = 'Strong';
        break;
      default:
        strengthText = '';
    }

    return (
      <div className="password-strength-bar-container">
        <div className="password-strength-bar"
          style={{ width: `${barWidth}%`, backgroundColor: getPasswordStrengthColor() }}
        />
        {strengthText && (
          <div className="password-strength-text">{`Password Strength:${strengthText}`}</div>
        )}
      </div>
    );
  };

  return (
    <div className='sign'>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <div className="Signbox">
          <p>Username</p>
        </div>

        <div className="input-Sign">
          <input 
            type="text" 
            placeholder='Username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
          <FaUser className='icon' />
        </div>

        <div className="Signbox">
          <p>Email</p>
        </div>

        <div className="input-Sign">
          <input 
            type="email" 
            placeholder='E-mail address' 
            value={email}
            onChange={handleEmailChange}
            required 
          />
          <MdEmail className='icon' /> 
        </div>

        {emailError && (
          <p className="error-message" style={{ color: 'red', fontSize: 'small', textAlign: 'center' }}>
            *{emailError}
          </p>
        )}

        <div className="Signbox">
          <p>Password</p>
        </div>

        <div className="input-Sign">
          <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={handlePasswordChange}
            required 
          />
          <FaLock className='icon' /> 
        </div>

        <div className="Signbox">
          <p>Confirm Password</p>
        </div>

        <div className="input-Sign">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <FaLock className="icon" />
        </div>

        {confirmPasswordError && (
          <p className="error-message" style={{ color: 'red', fontSize: 'small', textAlign: 'center' }}>
            *{confirmPasswordError}
          </p>
        )}

        {renderPasswordStrengthBar()}

        <div className="Signup">
          <p>I agree to SynthInvo's <a href="#"> Terms Of Service</a> and <a href="#">Privacy Policy</a></p>
        </div>

        <button type='submit'>Create Account</button>

        <div className="connect">
          <p>- or connect with -</p>
        </div>

        <div className='oauth'>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>

      </form>
    </div>
  );
};

export default SignUp;
