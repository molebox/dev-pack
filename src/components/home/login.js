/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../layout';
import { UserContext } from './../../context/user-context';
import gsap from 'gsap';
import { navigate } from 'gatsby';
import OneGraphAuth from 'onegraph-auth';
import jwt_decode from 'jwt-decode';

const APP_ID = '575ea4f4-6d15-4fcc-bafe-411321fd0ce6';

const Login = () => {
  const { currentUser, updateUser } = React.useContext(UserContext);

  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
  }, []);

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
            // Add the users github handle, name and email to the sites context, also add the jwt token
            console.log(jwt, auth);
            updateUser({
              isLoggedIn: true,
              handle: jwt.user.handle,
              displayName: jwt.user.name,
              email: jwt.user.email,
              token: auth._accessToken.accessToken,
              // token: jwt.aud,
              // token: auth._accessToken.accessToken,
            });
            navigate('/app/hub');
          } else {
            console.log('Did not grant auth for GitHub');
          }
        });
      })
      .catch((e) => console.error('Problem logging in', e));

  if (currentUser.isLoggedIn) {
    navigate('/app/hub');
  }

  return (
    <Layout>
      <section
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button onClick={login}> login</button>
      </section>
    </Layout>
  );
};

export default Login;
