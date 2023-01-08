import React from 'react';
import { Button } from '@mui/material';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="nav-bar">
      <div className="nav-left">
        <div className="the-den">
          <h3>The Den</h3>
        </div>
        <div className="browse-sell">
          <p>Browse</p>
          <p>Sell</p>
        </div>
      </div>

      <div className="sign-in-up">
        <Button size="small">Login</Button>
        <Button variant="contained" size="small">
          Sign up
        </Button>
      </div>
    </header>
  );
}
