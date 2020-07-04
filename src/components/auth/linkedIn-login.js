/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import OneGraphAuth from 'onegraph-auth';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../../context/user-context';
import { APP_ID } from '../../butler';
import LogoButton from '../common/logo-button';
import DevTo from './../svg/dev-to';
import LinkedIn from './../svg/linkedIn';

const LinkedInLogin = () => {
  const { updateUser } = React.useContext(UserContext);
  // Change this to false when implemented
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  // OneGraphAuth uses the window object to display the popup, we need to check it exists due to SSR.
  const auth =
    typeof window !== 'undefined'
      ? new OneGraphAuth({
          appId: APP_ID,
        })
      : null;

  const login = () =>
    auth
      .login('linkedIn')
      .then(() => {
        auth.isLoggedIn('linkedIn').then((isLoggedIn) => {
          if (isLoggedIn) {
            let jwt = jwt_decode(auth._accessToken.accessToken);
            // Add the users github handle, name and email to the sites context, also add the jwt token
            // console.log(jwt, auth);
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
        });
      })
      .catch((e) => console.error('Problem logging in', e));

  return (
    <LogoButton
      text="Authorize LinkedIn"
      icon={<LinkedIn width="20px" height="20px" />}
      onClick={login}
      disabled={isLoggedIn ? true : false}
    />
  );
};

export default LinkedInLogin;
