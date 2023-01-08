import React, { useContext } from 'react';
import './Browse.css';
import { UserContext } from '../../context/userContext';
import { Redirect } from 'react-router-dom';

export default function Browse() {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <div>Browse</div>;
}
