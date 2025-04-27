import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSwitchForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="page-container">
      <div className="left-side">
        <h1 className="title">FILATELIJA</h1>
        <h1 className="title">NUMIZMATIKA</h1>
        <h1 className="title">ANTIKVARAS</h1>
      </div>
      <div className="right-side">
        <div className="form-container">
          {isRegistering ? (
            <RegisterForm handleSwitchForm={handleSwitchForm} />
          ) : (
            <LoginForm handleSwitchForm={handleSwitchForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
