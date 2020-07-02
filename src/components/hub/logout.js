/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { UserContext } from './../../context/user-context';
import { navigate } from 'gatsby';
import OneGraphAuth from 'onegraph-auth';
import { APP_ID } from '../../butler';
import Button from './../common/button';

const Logout = () => {
  const { updateUser } = React.useContext(UserContext);

  // OneGraphAuth uses the window object to display the popup, we need to check it exists due to SSR.
  const auth =
    typeof window !== 'undefined'
      ? new OneGraphAuth({
          appId: APP_ID,
        })
      : null;

  const logout = () =>
    auth.logout('github').then((response) => {
      if (response.result === 'success') {
        updateUser({ isLoggedIn: false });
        navigate('/');
        console.log('Logout succeeded');
      } else {
        console.log('Logout failed');
      }
    });

  return <Button onClick={logout} text="Logout" />;
};

export default Logout;
