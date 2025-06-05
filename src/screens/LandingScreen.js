import { useNavigate } from 'react-router-dom';

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="screen landing-screen">
      <h1 className="welcome-title">Welcome to PopX</h1>
      <p className="welcome-subtitle">
        Start where you are.<br />
        Use what you have.<br />
        Do what you can.
      </p>
      <div className="button-container">
        <button className="btn-primary" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="btn-secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
