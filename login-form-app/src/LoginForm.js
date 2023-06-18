import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check username and password
    if (username === 'admin' && password === '123') {
      setIsLoggedIn(true);
      navigate('/welcome');
    } else {
      setErrorMessage('Incorrect username or password');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            style={styles.inputField}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.inputField}
          />
        </div>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <button type="submit" style={styles.loginButton}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    padding: '30px',
    borderRadius: '10px',
    margin: '0 auto', // Center the form horizontally
    marginTop: '100px', // Adjust the vertical position as needed
  },
  heading: {
    marginBottom: '20px',
    color: '#444444',
    fontSize: '24px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#444444',
    fontSize: '14px',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    border: '1px solid #cccccc',
    borderRadius: '5px',
    fontSize: '14px',
  },
  errorMessage: {
    marginTop: '10px',
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    border: 'none',
    color: '#ffffff',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  
};

export default LoginForm;
