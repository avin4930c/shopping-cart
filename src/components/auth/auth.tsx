import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { Auth, googleProvider } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import './auth.css';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  const signInGoogle = async () => {
    try {
      await signInWithPopup(Auth, googleProvider);
      navigate('/profile');
    } catch (error) {
      console.error('Sign In Error:', error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Welcome</h1>
        <p className="auth-description">Sign in or sign up with Google to access your profile.</p>
        <button onClick={signInGoogle} className="auth-button">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default AuthPage;