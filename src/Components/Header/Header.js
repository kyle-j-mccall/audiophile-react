import React from 'react';
import { Button } from '@mui/material';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Logo from './assets/binary-code.png';

export default function Header() {
  return (
    <header className="nav-bar">
      <div className="nav-left">
        <div className="the-den">
          <img src={Logo} className="logo"></img>
          <h3>The Den</h3>
        </div>
        <div className="browse-sell">
          {/* <NavLink> */}
          <NavLink to="/browse">
            <p className="browse">Browse</p>
          </NavLink>

          {/* </NavLink> */}
          {/* <NavLink> */}
          <p className="sell">Sell</p>
          {/* </NavLink> */}
        </div>
      </div>

      <div className="sign-in-up">
        <NavLink to="/log-in">
          <Button size="small">Login</Button>
        </NavLink>
        <NavLink to="sign-up">
          <Button variant="contained" size="small">
            Sign up
          </Button>
        </NavLink>
      </div>
    </header>
  );
}
