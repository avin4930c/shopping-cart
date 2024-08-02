import React, { useEffect, useState } from 'react';
import './profilePage.css';
import { getAuth, signOut, User } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate from react-router-dom
import { NavBar } from '../components/comp/navBar';

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth, navigate]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

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
        <div className="profile-page">
            <div className="profile-content">
                <div className="profile-card">
                    <img src={user.photoURL || '/default-profile.png'} alt="Profile" className="profile-image" />
                    <h3 className="profile-name">{user.displayName}</h3>
                    <p className="profile-email">{user.email}</p>
                    <p className="profile-uid">UID: {user.uid}</p>
                    <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;