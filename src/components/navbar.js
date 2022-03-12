import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import Grid from '@material-ui/core/Grid';
import IITJLogo from '../assets/IITJ.png';

export default function Navbar() {

  const [loggedIn, setLoggedIn] = useState('false');

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedIn(false)
    localStorage.setItem('loggedIn', 'false');
    window.location = '/DCN-Assignment-1/#/';
  };

  useEffect(() => {
    setLoggedIn(localStorage.getItem('loggedIn'));
  }, []);

  return (
    <Grid container style={{ marginBottom: 68 }}>
      <div className="wrapper">
        <nav>
          <div className="content" style={{ justifyContent: 'space-between' }}>
            <div className="logo">
              <Link to="/home">
                <img src={IITJLogo} alt="logo" width="55px" heigth="58px" />
              </Link>
            </div>
            {loggedIn === 'true' ? (
              <div className="buttons">
                <Link to="/home">
                  <button>Profile</button>
                </Link>
                <Link to="/">
                  <button onClick={(event) => handleSubmit(event)}>Logout</button>
                </Link>
              </div>
              ):(
                <div className="buttons">
                  <Link to="/">
                    <button>Login</button>
                  </Link>
                </div>
              )
            }
          </div>
        </nav>
      </div>
    </Grid>
  );
}
