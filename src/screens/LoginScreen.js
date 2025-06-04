import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Do login logic here
    navigate('/profile'); // Navigate after successful login
  };

  return (
    <div className="screen login-screen">
      <h2 className="form-title">Welcome back!</h2>
      <p className="form-subtitle">Login to continue</p>
      {/* Add form inputs here */}
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginScreen;
