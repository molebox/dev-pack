import React from 'react';
import { navigate } from 'gatsby';
import { toast } from 'react-toastify';
import OneGraphAuth from 'onegraph-auth';
import { APP_ID } from '../../butler';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../../context/user-context';

toast.configure();

const PrivateRoute = ({ component: Component, location, isLoggedIn, ...rest }) => {
  const { currentUser } = React.useContext(UserContext);
  // create the auth
  // let auth =
  //   typeof window !== 'undefined'
  //     ? new OneGraphAuth({
  //         appId: APP_ID,
  //       })
  //     : null;
  // check if the user is logged in. If they are already then navigate them to the hub

  // auth.isLoggedIn('github').then((isLoggedIn) => {
  //   if (!isLoggedIn && location.pathname !== `/app/login`) {
  //     // let jwt = jwt_decode(auth._accessToken.accessToken);
  //     // Add the users github handle, name and email to the sites context
  //     // updateUser({
  //     //   isGithubLoggedIn: true,
  //     //   displayName: jwt.user.githubName,
  //     //   email: jwt.user.email,
  //     // });
  //     navigate(`/app/login`);
  //     return null;
  //   }
  // });
  if (!currentUser.isGithubLoggedIn && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
