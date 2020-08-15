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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        my: 4,
      }}
    >
      {/* <div
        sx={{
          mb: 5,
          height: 30,
          maxWidth: 400,
          width: '100%'
        }}
      >
        {loadBtn}
      </div> */}
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'start',
        }}
      >
        <GitHubLogin />
        <TwitterLogin />
      </div>
    </div>
  );
};

export default AuthService;
