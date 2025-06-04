import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state;

  if (!userData) {
    return (
      <div className="screen form-container">
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p>No user data available</p>
          <button 
            className="btn-primary" 
            onClick={() => navigate('/')}
            style={{ marginTop: '20px' }}
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen profile-screen">
      <button className="back-button" onClick={() => navigate('/')}>
        ←
      </button>
      
      <div className="profile-header">
        <h2 className="profile-title">Account Settings</h2>
        
        <ProfileCard userData={userData} />

        <div className="profile-description">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing 
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut 
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
