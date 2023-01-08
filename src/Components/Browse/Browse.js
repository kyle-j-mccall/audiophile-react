import React, { useContext } from 'react';
import './Browse.css';
import { UserContext } from '../../context/userContext';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import './Browse.css';

export default function Browse() {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div className="browse-body">
      <Header />
      <div className="browse-main">
        <div className="browse-hero-text">
          <h1>Browse sounds and presets from an extensive and curated library</h1>
          <button className="browse-explore-btn">Explore</button>
        </div>
      </div>
    </div>
  );
}
