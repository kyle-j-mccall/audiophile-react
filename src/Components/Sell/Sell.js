import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import './Sell.css';

export default function Sell() {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user) {
    return <Redirect to="/log-in" />;
  }

  return <div>Sell</div>;
}
