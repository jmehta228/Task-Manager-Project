import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password
      });
      if (response.data === true) {
        onLogin();
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to backend');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: 'center', color: '#1677f5' }}>Login</h2>
      <div style={inputGroup}>
        <label style={labelStyle}>Username</label>
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={inputGroup}>
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button type="submit" style={buttonStyle}>Login</button>
    </form>
  );
};



const formStyle = {
  maxWidth: '400px',
  margin: '50px auto',
  padding: '50px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
};

const inputGroup = {
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: 'bold',
  color: '#333',
};

const inputStyle = {
  width: '80%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
  display: 'block',
  margin: '0 auto',
};

const buttonStyle = {
  width: '92%',
  padding: '10px',
  backgroundColor: '#1677f5',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'block',
  margin: '20px auto 0 auto',
};



export default LoginForm;
