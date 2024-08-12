import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    gender: 'male',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData); 
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert('Signup successful');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || 'Something went wrong');
    }
};


  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          placeholder='Enter Username'
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Enter Email'
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder='i.e +923124561108'
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder='Atleast 8 Character'
        />

        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="custom">Custom</option>
        </select>

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};
export default Signup;
