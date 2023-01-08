import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';

import './Auth.css';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="auth-body">
      <div className="auth-main">
        <div className="input-container">
          <div className="auth-nav">
            <NavLink to="/auth/sign-in" className="auth-link">
              <Button variant="outlined" className="auth-button">
                Sign in
              </Button>
            </NavLink>
            <NavLink to="/auth/sign-up" className="auth-link">
              <Button variant="outlined" className="auth-button">
                Sign up
              </Button>
            </NavLink>
          </div>

          <div className="input-form">
            <div className="email-container">
              <TextField
                // id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password-container">
              <TextField
                // id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="submit-button">
            {type === 'sign-up' && (
              <Button variant="contained" className="auth-button" type="button">
                Sign up
              </Button>
            )}
            {type === 'sign-in' && (
              <Button variant="contained" className="auth-button" type="button">
                Sign in
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
