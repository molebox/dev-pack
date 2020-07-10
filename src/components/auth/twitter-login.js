/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Twitter from '../svg/twitter';
import { navigate } from 'gatsby';
import OneGraphAuth from 'onegraph-auth';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../../context/user-context';
import { APP_ID } from '../../butler';
import LogoButton from '../common/logo-button';

const TwitterLogin = () => {
  const { updateUser } = React.useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
            // Add the users github handle, name and email to the sites context, also add the jwt token
            console.log('JWT: ', jwt, 'AUTH: ', auth);
            console.log(Object.values(jwt)[4].access_token);
            updateUser({
              isTwitterLoggedIn: true,
              handle: jwt.user.handle,
              displayName: jwt.user.twitterName,
              twitterToken: Object.values(jwt)[4].access_token,
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
      text="Authorize Twitter"
      icon={<Twitter width="25px" height="25px" />}
      onClick={login}
      disabled={isLoggedIn ? true : false}
    />
  );
};

export default TwitterLogin;
