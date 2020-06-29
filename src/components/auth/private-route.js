import React from 'react';
import { navigate } from 'gatsby';

const PrivateRoute = ({ component: Component, location, isLoggedIn, ...rest }) => {
  if (!isLoggedIn && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
