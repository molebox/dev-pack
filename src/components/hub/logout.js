/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import { navigate } from 'gatsby';
import OneGraphAuth from 'onegraph-auth';
import { APP_ID } from '../../butler';
import Button from './../common/button';
import { DevCardDispatchContext, DevCardStateContext } from '../../context/devcard-context';

const Logout = () => {
  const dispatch = React.useContext(DevCardDispatchContext);
  const state = React.useContext(DevCardStateContext);

  // OneGraphAuth uses the window object to display the popup, we need to check it exists due to SSR.
  const auth =
    typeof window !== 'undefined'
      ? new OneGraphAuth({
          appId: APP_ID,
        })
      : null;

  React.useEffect(() => {
    if (!state.isGitHubLoggedIn) {
      navigate('/');
    }
  }, [state.isGitHubLoggedIn]);

  const logout = () =>
    auth.logout('github').then((response) => {
      if (response.result === 'success') {
        dispatch({ type: 'isGitHubLoggedIn', payload: false });
        navigate('/');
        console.log('Logout succeeded');
      } else {
        console.log('Logout failed');
      }
    });

  return <Button onClick={logout} text="Logout" />;
};

export default Logout;
