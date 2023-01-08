import React from 'react';
// import { NavLink, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SignUp.css';
import { signUpUser } from '../../services/auth';
import { UserContext } from '../../context/userContext';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const handleSignUp = async () => {
    const userResp = await signUpUser(email, password);
    setUser(userResp);
    console.log(userResp);
    history.push('/landing');
  };

  return (
    <div className="auth-body">
      <div className="auth-main">
        <div className="input-container">
          <div className="input-form">
            <div className="email-container">
              <TextField
                // id="outlined-basic"
                label="Email"
                variant="outlined"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password-container">
              <TextField
                name="Password"
                label="Password"
                variant="outlined"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button variant="outlined" className="auth-button" size="small" onClick={handleSignUp}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
