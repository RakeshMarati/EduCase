// src/screens/SignupScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { saveUser, getUser } from '../utils/userManager';

const SignupScreen = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (!fullName || !phoneNumber || !email || !password || !isAgency) {
      setError('Please fill all required fields.');
      return;
    }

    const existingUser = getUser(email);
    if (existingUser) {
      setError('User already exists.');
      return;
    }

    const newUser = {
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency,
    };

    const success = saveUser(newUser);
    if (success) {
      navigate('/profile', { state: newUser });
    } else {
      setError('Error saving user. Please try again.');
    }
  };

  return (
    <div className="screen form-container">
      <div className="form-header">
        <h2 className="form-title">Create your</h2>
        <h2 className="form-subtitle">PopX account</h2>
      </div>

      <FormInput
        label="Full Name*"
        type="text"
        placeholder="Marry Doe"
        value={fullName}
        onChange={setFullName}
        required
      />
      <FormInput
        label="Phone number*"
        type="tel"
        placeholder="9876543210"
        value={phoneNumber}
        onChange={setPhoneNumber}
        required
      />
      <FormInput
        label="Email address*"
        type="email"
        placeholder="marry@example.com"
        value={email}
        onChange={setEmail}
        required
      />
      <FormInput
        label="Password*"
        type="password"
        placeholder="********"
        value={password}
        onChange={setPassword}
        required
      />
      <FormInput
        label="Company name"
        type="text"
        placeholder="ABC Pvt Ltd"
        value={companyName}
        onChange={setCompanyName}
      />

      <div className="form-group">
        <label>Are you an Agency?*</label>
        <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={isAgency === 'Yes'}
              onChange={(e) => setIsAgency(e.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={isAgency === 'No'}
              onChange={(e) => setIsAgency(e.target.value)}
            />
            No
          </label>
        </div>
      </div>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      <div className="form-footer" style={{ marginTop: '20px' }}>
        <Button onClick={handleSignup}>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default SignupScreen;
