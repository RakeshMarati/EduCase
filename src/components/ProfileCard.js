import React from 'react';

const ProfileCard = ({ userData }) => {
  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="profile-card">
      <div className="profile-avatar">
        {getInitials(userData?.fullName)}
      </div>
      <div className="profile-info">
        <h3>{userData?.fullName || 'Marry Doe'}</h3>
        <p>{userData?.email || 'Marry@Gmail.Com'}</p>
      </div>
    </div>
  );
};

export default ProfileCard;