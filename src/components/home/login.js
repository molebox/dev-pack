/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../layout';
import gsap from 'gsap';
import { navigate } from 'gatsby';
import OneGraphAuth from 'onegraph-auth';
import { APP_ID, GET_PROFILE_INFO } from '../../butler';
import Button from '../common/button';
import { DevCardDispatchContext, DevCardStateContext } from '../../context/devcard-context';
import jwt_decode from 'jwt-decode';
import { useLazyQuery } from '@apollo/client';

const Login = () => {
  const [getUserDetails, { loading, error, data: userData }] = useLazyQuery(GET_PROFILE_INFO);
  const dispatch = React.useContext(DevCardDispatchContext);
  const state = React.useContext(DevCardStateContext);
  let auth =
    typeof window !== 'undefined'
      ? new OneGraphAuth({
          appId: APP_ID,
        })
      : null;

  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
  }, []);
  React.useEffect(() => {
    if (state.isGitHubLoggedIn) {
      auth
      .login('twitter')
      .then(() => {
        auth.isLoggedIn('twitter').then((isLoggedIn) => {
          if (isLoggedIn) {
            dispatch({ type: 'hasTwitterAuth', payload: true });
          } else {
            console.log('Did not grant auth for Twitter');
          }
        });
      })
      .catch((e) => console.error('Problem logging in', e));
      console.log(userData, error, loading);
      if (!error && !loading) {
        if (userData && userData.me) {
          dispatch({ type: 'name', payload: userData.me.twitter.name });
          dispatch({ type: 'email', payload: userData.me.github.email });
          dispatch({ type: 'description', payload: userData.me.twitter.description });
          dispatch({ type: 'location', payload: userData.me.twitter.location });
          dispatch({ type: 'website', payload: userData.me.github.websiteUrl.slice(12) });
          navigate('/app/hub');
        }
      }
    }
  }, [state.isGitHubLoggedIn, userData, error, loading]);

  const login = () =>
    auth
      .login('github')
      .then(() => {
        auth.isLoggedIn('github').then((isLoggedIn) => {
          if (isLoggedIn) {
            let jwt = jwt_decode(auth._accessToken.accessToken);
            console.log(jwt);
            getUserDetails();
            console.log('Logged into GitHub, navigating to hub');
            dispatch({ type: 'isGitHubLoggedIn', payload: true });
            dispatch({ type: 'hasGitHubAuth', payload: true });
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
          backgroundColor: 'background',
        }}
      >
        <div
          sx={{
            textAlign: 'center',
            padding: 4,
            boxShadow: 0,
            border: 'solid 3px',
            maxWidth: 800,
            backgroundColor: 'background',
            m: 3,
          }}
        >
          <h1
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontWeight: 500,
              fontSize: [3, 3, 4],
            }}
          >
            Looks like you're not logged in
          </h1>
          <p
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontWeight: 500,
              fontSize: [2, 2, 3],
              my: 6,
            }}
          >
            All your information is secure in your pack. Please login to gain access. By default we use your Github
            account.
          </p>
          <div
            sx={{
              margin: '0 auto',
              height: 'min-content',
              width: 'min-content',
              mt: 3,
            }}
          >
            <Button onClick={login} text="Login" />
          </div>
        </div>
        <em
          sx={{
            fontFamily: 'heading',
            fontSize: [1],
            fontWeight: 700,
            mt: 3,
          }}
        >
          This site uses popups to allow you to login. Please disable any popup blockers you have installed for this
          domain to allow for proper login and data fetching.
        </em>
      </section>
    </Layout>
  );
};

export default Login;
