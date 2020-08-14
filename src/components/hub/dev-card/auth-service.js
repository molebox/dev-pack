/** @jsx jsx */
import React from 'react';
import GitHubLogin from './../../auth/github-login';
import TwitterLogin from '../../auth/twitter-login';
import { jsx } from 'theme-ui';

const AuthService = () => {
  return (
    <div
      sx={{
        gridArea: 'authService',
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
      }}
    >
      <GitHubLogin />
      <TwitterLogin />
    </div>
  );
};

export default AuthService;
