import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { emailOrUsername, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
    } catch (error) {
      console.error('Error during login:', error.response || error.message);
      alert(error.response?.data?.error || 'Error logging in');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email or Username</label>
        <input
          type="text"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          required
          placeholder="Enter Username or Email"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter Password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
