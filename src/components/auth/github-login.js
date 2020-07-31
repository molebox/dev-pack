/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Twitter from '../svg/twitter';

import OneGraphAuth from 'onegraph-auth';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../../context/user-context';
import { APP_ID } from '../../butler';
import LogoButton from '../common/logo-button';
import GitHub from './../svg/github';

const GitHubLogin = () => {
  const { currentUser, updateUser } = React.useContext(UserContext);

  // OneGraphAuth uses the window object to display the popup, we need to check it exists due to SSR.
  const auth =
    typeof window !== 'undefined'
      ? new OneGraphAuth({
          appId: APP_ID,
        })
      : null;

  const login = () =>
    auth
      .login('github')
      .then(() => {
        auth.isLoggedIn('github').then((isLoggedIn) => {
          if (isLoggedIn) {
            let jwt = jwt_decode(auth._accessToken.accessToken);
            // Add the users github handle, name and email to the sites context
            updateUser({
              isGithubLoggedIn: true,
              handle: jwt.user.handle,
              displayName: jwt.user.twitterName,
            });
          } else {
            console.log('Did not grant auth for Twitter');
          }
        });
      })
      .catch((e) => console.error('Problem logging in', e));

  return (
    <LogoButton
      text={!!currentUser.isTwitterLoggedIn ? 'Authorized!' : 'Authorize GitHub'}
      icon={<GitHub width="25px" height="25px" />}
      onClick={login}
      disabled={!!currentUser.isTwitterLoggedIn ? true : false}
    />
  );
};

export default GitHubLogin;
