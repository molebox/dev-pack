/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import OneGraphAuth from 'onegraph-auth';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../../context/user-context';
import { APP_ID } from '../../butler';
import LogoButton from '../common/logo-button';
import DevTo from './../svg/dev-to';
import { DevCardAuthContext, DevCardDispatchContext, DevCardStateContext } from '../../context/devcard-context';
const service = 'dev-to';

const DevToLogin = () => {
  const { updateUser } = React.useContext(UserContext);
  const dispatch = React.useContext(DevCardDispatchContext);
  const state = React.useContext(DevCardStateContext);
  const auth = React.useContext(DevCardAuthContext);

  const login = async () => {
    try {
      await auth.login(service);
      const isLoggedIn = await auth.isLoggedIn(service);
      if (isLoggedIn) {
        updateUser({
          isTwitterLoggedIn: true,
          handle: jwt.user.handle,
          displayName: jwt.user.name,
          // token: auth._accessToken.accessToken,
        });
        setIsLoggedIn(true);
      } else {
        console.log('Did not grant auth for Twitter');
      }
    } catch (e) {
      console.error('Problem logging in', e);
    }
  };

  return (
    <LogoButton
      comingSoon
      text="Authorize dev.to"
      icon={<DevTo width="25px" height="25px" />}
      onClick={login}
      disabled={isLoggedIn ? true : false}
    />
  );
};

export default DevToLogin;
