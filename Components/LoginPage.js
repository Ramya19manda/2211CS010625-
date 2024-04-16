import React, { useState } from 'react';
import './RegistrationPage';

import './Home';
import {useNavigate, Link } from 'react-router-dom';
const LoginPage = ({onLoginSuccess}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedUserData = localStorage.getItem('userData');
    const userData = JSON.parse(storedUserData);
    
    // Check if provided credentials match the stored user data
    if (username === userData.username && password === userData.password && username!=null) {
      console.log('Login successfully!');
      sessionStorage.setItem('user', JSON.stringify(userData));
      onLoginSuccess();
      alert('Login successful!');
      navigate('/Home'); // Navigate to the home page
    } else {
      alert('Invalid username or password');
    }
  };

  

  return (
    <div className='registration-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            required
            style={{alignItems:'center'}}
          />
        </div>
        <div style={{alignItems:'center'}}>
          <label htmlFor="password" >Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter the password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <h4>if you are new user?<Link to="/RegistrationPage">register</Link></h4>

    </div>
  );
};


export default LoginPage ;