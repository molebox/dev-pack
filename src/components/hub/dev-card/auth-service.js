/** @jsx jsx */
import React from 'react';
import GitHubLogin from './../../auth/github-login';
import TwitterLogin from '../../auth/twitter-login';
import { jsx } from 'theme-ui';

const AuthService = ({ loadBtn }) => {
  return (
    <div
      sx={{
        gridArea: 'authService',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <GitHubLogin />
        <TwitterLogin />
      </div>
      <div
        sx={{
          mt: 5,
          height: 30,
        }}
      >
        {loadBtn}
      </div>
    </div>
  );
};

export default AuthService;
