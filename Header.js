import React from 'react';
import './Header.css';
const Header = ({ onLoginClick, onSignupClick, onLogoutClick, isAuthenticated }) => {
    return (
        <header className="header">
            <h1>To-Do List</h1>
            <div className="header-buttons">
                <button onClick={onLoginClick}>Login</button>
                <button onClick={onSignupClick}>Signup</button>
            </div>
        </header>
    );
};
export default Header;
