/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from './../components/layout';
import firebase from 'gatsby-plugin-firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../components/svg/loading';
import ErrorCard from './../components/error-card';
// import { UserContext } from './../context/user-context';
import { navigate } from 'gatsby';
import Home from '../components/home';

export default () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  // const { currentUser, updateUser } = React.useContext(UserContext);
  // let provider = new firebase.auth.GithubAuthProvider();

  // const login = () => {
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  //       let token = result.credential.accessToken;
  //       // The signed-in user info.
  //       let user = result.user;
  //       // Add the logged in users info to context to use throughout the site while logged in.
  //       updateUser({
  //         displayName: user.displayName,
  //         email: user.email,
  //         photoURL: user.photoURL,
  //       });
  //       console.log({ user });
  //     })
  //     .catch((error) => {
  //       console.log({ error });
  //     });
  // };

  // const logout = () => {
  //   firebase.auth().signOut();
  // };

  if (loading) {
    return (
      <Layout>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'background',
            height: '100vh',
          }}
        >
          <Loading />
        </div>
      </Layout>
    );
  }
  if (error) {
    return (
      <Layout>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'background',
            height: '100vh',
          }}
        >
          <ErrorCard error={error} />
        </div>
      </Layout>
    );
  }

  if (user) {
    navigate('/my-dev-pack');
  }

  return (
    <Layout>
      <Home />
    </Layout>
  );

};
