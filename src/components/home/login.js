/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../layout';
import { UserContext } from './../../context/user-context';
import gsap from 'gsap';
import { navigate } from 'gatsby';
import OneGraphAuth from 'onegraph-auth';
import jwt_decode from 'jwt-decode';
import { APP_ID } from '../../butler';
import Button from '../common/button';
import TwitterLogin from './../common/twitter-login';

const Login = () => {
  const { updateUser } = React.useContext(UserContext);

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
            // console.log(jwt, auth);
            updateUser({
              isLoggedIn: true,
              handle: jwt.user.handle,
              displayName: jwt.user.name,
              email: jwt.user.email,
              // token: auth._accessToken.accessToken,
            });
            navigate('/app/hub');
          } else {
            console.log('Did not grant auth for GitHub');
          }
        });
      })
      .catch((e) => console.error('Problem logging in', e));

  return (
    <Layout>
      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          margin: '0 auto',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderLeft: 'solid 3px',
            borderBottom: 'solid 3px',
            borderColor: 'primary',
            padding: 30,
          }}
        >
          <h1
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontWeight: 500,
              width: '100%',
              fontSize: ['1.4em', '1.7em', '2em'],
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Looks like you're not logged in
          </h1>
          <p
            sx={{
              fontFamily: 'heading',
              fontWeight: 400,
              fontSize: ['1rem', '1.2rem'],
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            All your information is secure in your pack. Please login to gain access
          </p>

          <Button onClick={login} text="Login" />
        </div>
      </section>
    </Layout>
  );
};

export default Login;
