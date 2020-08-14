/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Twitter from '../svg/twitter';

import OneGraphAuth from 'onegraph-auth';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../../context/user-context';
import { APP_ID } from '../../butler';
import LogoButton from '../common/logo-button';
import gsap from 'gsap';
import { DevCardDispatchContext, DevCardStateContext } from '../../context/devcard-context';

const TwitterLogin = () => {
  const dispatch = React.useContext(DevCardDispatchContext);
  const state = React.useContext(DevCardStateContext);

  // OneGraphAuth uses the window object to display the popup, we need to check it exists due to SSR.
  const auth =
    typeof window !== 'undefined'
      ? new OneGraphAuth({
          appId: APP_ID,
        })
      : null;

  const login = () =>
    auth
      .login('twitter')
      .then(() => {
        auth.isLoggedIn('twitter').then((isLoggedIn) => {
          if (isLoggedIn) {
            let jwt = jwt_decode(auth._accessToken.accessToken);
            // Add the users github handle, name and email to the sites context
            dispatch({ type: 'hasTwitterAuth', payload: true });
          } else {
            console.log('Did not grant auth for Twitter');
          }
        });
      })
      .catch((e) => console.error('Problem logging in', e));

  return (
    <LogoButton
      className="twitter"
      text={state.hasTwitterAuth ? 'Authorized!' : 'Authorize Twitter'}
      icon={<Twitter width="25px" height="25px" />}
      onClick={login}
      disabled={state.hasTwitterAuth ? true : false}
    />
  );
};

export default TwitterLogin;
