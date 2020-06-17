/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Layout from './../components/layout';
import firebase from "gatsby-plugin-firebase"
import { useAuthState } from 'react-firebase-hooks/auth';

export default () => {
  const [user, loading, error] = useAuthState(firebase.auth());

  const login = () => {
    firebase.auth().GithubAuthProvider();
  };

  const logout = () => {
    firebase.auth().signOut();
  }

  if (loading) {
    return (
      <Layout>
        <p>Initialising User...</p>
      </Layout>
    );
  }
  if (error) {
    return (
      <Layout>
        <p>Error: {error}</p>
      </Layout>
    );
  }

  if (user) {
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
          <h1
            sx={{
              fontFamily: 'heading',
              color: 'text',
              ':after': {
                content: "''",
                display: 'block',
                paddingTop: 10,
                borderColor: 'accent',
                width: '100%',
                borderBottom: '2px solid #e45858',
              },
            }}
          >
            dev-pack
          </h1>
          <div
            sx={{
              backgroundColor: 'secondary',
              padding: 3,
              borderRadius: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2
              sx={{
                fontFamily: 'heading',
                color: 'text',
              }}
            >
              Keep your online presence consistent across all social media.
            </h2>
          </div>
          <h3 sx={{
                fontFamily: 'heading',
                color: 'text',
              }}>
                Welcome {user.name}
              </h3>
              <button onClick={logout}>Log out</button>
          {/* <h2
            sx={{
              fontFamily: 'heading',
              color: 'text',
            }}
          >
            Coming Soon.
          </h2>
          <Link to="/create-pack">Create Pack</Link> */}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>No user yet....</h1>
      <button onClick={login}>Log in</button>
    </Layout>
  )

  
};
