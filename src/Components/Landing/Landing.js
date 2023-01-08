import React from 'react';
import Button from '@mui/material/Button';
import './Landing.css';
import Header from '../Header/Header';

export default function Landing() {
  return (
    <div className="hero-body">
      <Header />
      <div className="hero-main">
        <div className="hero-text-container">
          <h1 className="hero-text">create/learn/explore</h1>
          <Button variant="contained">Enter</Button>
        </div>
      </div>
    </div>
  );
}
