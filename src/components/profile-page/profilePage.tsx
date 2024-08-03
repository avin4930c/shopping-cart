import React, { useContext } from 'react';
import './profilePage.css';
import { Link } from 'react-router-dom';
import { NavBar } from '../comp/navBar';
import { CartContext } from '../../App';

const ProfilePage: React.FC = () => {

    const { user, handleSignOut } = useContext(CartContext);

    if (!user) {
        return (
            <>
                <NavBar pageName='' />
                <div className="auth-prompt">
                    <h2 className="auth-title">Access Restricted</h2>
                    <p className="auth-message">You need to sign in or sign up to view your profile.</p>
                    <div className="auth-buttons">
                        <Link to="/auth" className="auth-button signin-button">Sign In</Link>
                        <Link to="/auth" className="auth-button signup-button">Sign Up</Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <NavBar pageName='' />
            <div className="profile-page">
                <div className="profile-content">
                    <div className="profile-card">
                        <img src={user.photoURL || '/default-profile.png'} alt="Profile" className="profile-image" />
                        <h3 className="profile-name">{user.displayName}</h3>
                        <p className="profile-email">{user.email}</p>
                        <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;