/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { navigate } from 'gatsby';
import Button from '../common/button';
import { DevCardDispatchContext, DevCardStateContext, DevCardAuthContext } from '../../context/devcard-context';

const Logout = () => {
  const dispatch = React.useContext(DevCardDispatchContext);
  const state = React.useContext(DevCardStateContext);
  const auth = React.useContext(DevCardAuthContext);

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
