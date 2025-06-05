import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'; // Your reusable button
import './Login.css'; // Styles for the login screen

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isDisabled = !email || !password;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    
    // Add real login logic here
    // For now, we'll simulate a successful login
    // In a real app, you would validate credentials with your backend
    
    // Simulate user data that would come from your authentication service
    const userData = {
      email: email,
      fullName: email.split('@')[0]
        .replace(/[^a-zA-Z]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ') || 'User',
      // Add other user properties as needed
    };
    
    // Navigate to profile screen with user data
    navigate('/profile', { state: userData });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Signin to your <strong>PopX</strong> account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <Button type="submit" disabled={isDisabled}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;