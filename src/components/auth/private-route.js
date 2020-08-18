import React from 'react';
import { navigate } from 'gatsby';
import { DevCardStateContext } from './../../context/devcard-context';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const state = React.useContext(DevCardStateContext);

  if (!state.isGitHubLoggedIn && location.pathname !== `/app/login`) {
    console.log('Not logged in, navigating to login page');
    // If we’re not logged in, redirect to the login page.
    navigate(`/app/login`);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
