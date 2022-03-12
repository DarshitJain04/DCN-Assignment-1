import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  function validateForm() {
    return (
      email.length > 0 &&
      email.match('(^[a-z]+).([0-9]+)') &&
      password.length > 0
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('loggedIn', 'true');
    window.location = '#/DCN-Assignment-1/home';
  };

  return (
    <div className="Login">
        <h3 className="heading">Student Login</h3>
        <div className="form">
            <input
              className="Loginform"
              autoFocus
              placeholder="Enter LDAP ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Enter LDAP Password"
              className="Loginform"
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className='login-buttons'>
            <button
              size="lg"
              onClick={clearForm}
              className="clearButton"
            >
              Clear
            </button>
            <Link to="/DCN-Assignment-1/home">
                <button
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                    onClick={(event) => handleSubmit(event)}
                    className="loginButton"
                >
                    Login
                </button>
            </Link>
        </div>
    </div>
  );
};

export default Login;
