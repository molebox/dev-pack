/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from './../components/layout';
// import firebase from 'gatsby-plugin-firebase';
// import Loading from '../components/svg/loading';
// import ErrorCard from './../components/error-card';
import { UserContext } from './../context/user-context';
import { navigate } from 'gatsby';
// import useAuthState from './../components/useAuthState';
import SEO from 'gatsby-theme-seo/src/components/seo';
import SignupForm from './../components/home/signup/form';
import { Link } from 'gatsby';
import WaveSection from './../components/svg/wave-section';
import CardContainer from './../components/home/card-container';
import Card from './../components/svg/card';
import Social from './../components/svg/social';
import Domain from './../components/svg/domain';
import Media from './../components/svg/media';
import Resume from './../components/svg/resume';
import Video from './../components/svg/video';
import Footer from './../components/footer';
import gsap from 'gsap';
import OneGraphAuth from 'onegraph-auth';
import jwt_decode from 'jwt-decode';

const keywords = ['manage social profile', 'branding', 'developer branding', 'manage media', 'manage online presence'];

const APP_ID = '575ea4f4-6d15-4fcc-bafe-411321fd0ce6';

// const auth = new OneGraphAuth({
//   appId: APP_ID,
// });

export default ({ location }) => {
  // const [user, loading, error] = useAuthState(firebase);
  const { currentUser, updateUser } = React.useContext(UserContext);
  // let provider = new firebase.auth.GithubAuthProvider();
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
            console.log(auth);
            let jwt = jwt_decode(auth._accessToken.accessToken);
            console.log('PAYLOAD: ', jwt);
            // Add the users github name and email to the sites context, also add the jwt token
            updateUser({
              displayName: jwt.user.name,
              email: jwt.user.email,
              token: auth._accessToken.accessToken,
            });
            navigate('/hub');
          } else {
            console.log('Did not grant auth for GitHub');
          }
        });
      })
      .catch((e) => console.error('Problem logging in', e));

  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });

    gsap.fromTo(
      '.h1-title',
      {
        x: 1000,
      },
      {
        x: 0,
        ease: 'back(1.2)',
        duration: 1,
      }
    );

    gsap.fromTo(
      '.h2-title',
      {
        x: -1000,
      },
      {
        x: 0,
        ease: 'back(1.2)',
        duration: 1,
      }
    );
  }, []);

  // const login = () => {
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  //       // let token = result.credential.accessToken;

  //       // The signed-in user info.
  //       let user = result.user;
  //       // Add the logged in users info to context to use throughout the site while logged in.
  //       updateUser({
  //         displayName: user.displayName,
  //         email: user.email,
  //         photoURL: user.photoURL,
  //         token: user.token
  //       });
  //       console.log({ user });
  //       console.log({ currentUser });
  //     })
  //     .catch((error) => {
  //       console.log({ error });
  //     });
  // };

  // const logout = () => {
  //   firebase.auth().signOut();
  // };

  // if (loading) {
  //   return (
  //     <Layout>
  //       <div
  //         sx={{
  //           display: 'flex',
  //           flexDirection: 'column',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           backgroundColor: 'background',
  //           height: '100vh',
  //         }}
  //       >
  //         <Loading />
  //       </div>
  //     </Layout>
  //   );
  // }
  // if (error) {
  //   return (
  //     <Layout>
  //       <div
  //         sx={{
  //           display: 'flex',
  //           flexDirection: 'column',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           backgroundColor: 'background',
  //           height: '100vh',
  //         }}
  //       >
  //         <ErrorCard error={error} />
  //       </div>
  //     </Layout>
  //   );
  // }

  // if (user) {
  //   navigate('/hub');
  // }

  return (
    <Layout>
      <SEO
        title="Dev Pack"
        description="Keep your personal branding consistent across multiple platforms. Manage your social presence, media and domains from one hub. The dev pack is an authenticated hub where you will be able to manage and control various aspect of your online presence through a tabbed dashboard."
        keywords={keywords}
        pathname={location.pathname}
        twitter="studio_hungry"
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            marginTop: 10,
            maxWidth: 1000,
          }}
        >
          <h1
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontWeight: 500,
              width: '100%',
              fontSize: ['1.4em', '1.7em', '3em'],
              marginBottom: 20,
              padding: 10,
              textAlign: 'center',
            }}
            className="h1-title"
          >
            Keep your personal branding consistent across multiple platforms
          </h1>
          <h2
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontWeight: 400,
              fontSize: ['1.2em', '1.4em', '2em'],
              width: '100%',
              padding: 10,
              textAlign: 'center',
            }}
            className="h2-title"
          >
            Manage your social presence, media and domains from one hub
          </h2>
          <SignupForm />
          <Link to="/hub">To Hub</Link>
          <button onClick={login}> login</button>
        </div>
        <WaveSection>
          <h3
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontWeight: 400,
              fontSize: ['1.3em', '1.5em', '2em'],
              width: '100%',
              padding: 2,
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            What's included in your dev pack?
          </h3>
          <p
            sx={{
              margin: '2em 1em',
              fontFamily: 'heading',
              fontWeight: 400,
              fontSize: ['1rem', '1.2rem'],
              textAlign: 'center',
            }}
          >
            The dev pack is an authenticated hub where you will be able to manage and control various aspect of your
            online presence through a tabbed dashboard.
          </p>
          {/* <CardGrid /> */}
          <section
            sx={{
              paddingTop: 50,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: ['1fr', '1fr 1fr'],
              gap: '2em',
              justifyContent: 'center',
              maxWidth: 1440,
              padding: [20, 10, 1],
            }}
          >
            <CardContainer>
              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxHeight: '150px',
                  width: '100%',
                  marginTop: 30,
                }}
              >
                <Card width="90px" height="90px" />
                <h4
                  sx={{
                    fontFamily: 'heading',
                    fontWeight: 400,
                    fontSize: ['1.2rem', '1.5rem'],
                    letterSpacing: 'text',
                    marginLeft: 2,
                    ':after': {
                      content: "''",
                      display: 'block',
                      paddingTop: 1,
                      width: '100%',
                      borderBottom: `2px solid #e45858`,
                    },
                  }}
                >
                  Dev Card
                </h4>
              </div>
              <p
                sx={{
                  margin: '2em 1em',
                  fontFamily: 'heading',
                  fontWeight: 400,
                  fontSize: ['1rem', '1.2rem'],
                }}
              >
                The Dev Card tab will tie in with the Manage Media section and enable you to save your profile picture
                to the correct size depending on the platform. As well as your chosen name and bio. Once you have chosen
                your online card you will be able to push it to our selected social networks, which at the moment
                include Twitter and Github.{' '}
                <strong>Planned integrations include dev.to, LinkedIn, CopePen, Twitch and Stackoverflow</strong> Having
                all this information in one place and being able to edit it and be consistent across all platforms will
                increase your social reach and findability.
              </p>
            </CardContainer>

            <CardContainer>
              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxHeight: '150px',
                  width: '100%',
                  marginTop: 30,
                }}
              >
                <Social width="80px" height="80px" />
                <h4
                  sx={{
                    fontFamily: 'heading',
                    fontWeight: 400,
                    fontSize: ['1.2rem', '1.5rem'],
                    letterSpacing: 'text',
                    marginLeft: 2,
                    ':after': {
                      content: "''",
                      display: 'block',
                      paddingTop: 1,
                      width: '100%',
                      borderBottom: `2px solid #e45858`,
                    },
                  }}
                >
                  Social
                </h4>
              </div>
              <p
                sx={{
                  margin: '2em 1em',
                  fontFamily: 'heading',
                  fontWeight: 400,
                  fontSize: ['1rem', '1.2rem'],
                }}
              >
                The Social tab will aim to enable you to sync your social handles across platforms. As with the{' '}
                <strong>Dev Card</strong>, from launch you will be able to sync your Twitter and Github handles, with
                the same planned integrations to come.
              </p>
            </CardContainer>

            <CardContainer>
              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxHeight: '150px',
                  width: '100%',
                  marginTop: 30,
                }}
              >
                <Domain width="80px" height="80px" />
                <h4
                  sx={{
                    fontFamily: 'heading',
                    fontWeight: 400,
                    fontSize: ['1.2rem', '1.5rem'],
                    letterSpacing: 'text',
                    marginLeft: 2,
                    ':after': {
                      content: "''",
                      display: 'block',
                      paddingTop: 1,
                      width: '100%',
                      borderBottom: `2px solid #e45858`,
                    },
                  }}
                >
                  Domain
                </h4>
              </div>
              <p
                sx={{
                  margin: '2em 1em',
                  fontFamily: 'heading',
                  fontWeight: 400,
                  fontSize: ['1rem', '1.2rem'],
                }}
              >
                The Domains tab will be powered by namecheap and enable you to search for, buy and sell your domains.
                The dashboard will integrate with the namecheap API so that you can manage your domains from the hub.
              </p>
            </CardContainer>
            <CardContainer>
              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxHeight: '150px',
                  width: '100%',
                  marginTop: 30,
                }}
              >
                <Media width="80px" height="80px" />
                <h4
                  sx={{
                    fontFamily: 'heading',
                    fontWeight: 400,
                    fontSize: ['1.2rem', '1.5rem'],
                    letterSpacing: 'text',
                    marginLeft: 2,
                    ':after': {
                      content: "''",
                      display: 'block',
                      paddingTop: 1,
                      width: '100%',
                      borderBottom: `2px solid #e45858`,
                    },
                  }}
                >
                  Manage Media
                </h4>
              </div>
              <p
                sx={{
                  margin: '2em 1em',
                  fontFamily: 'heading',
                  fontWeight: 400,
                  fontSize: ['1rem', '1.2rem'],
                }}
              >
                The Manage Media tab will be your media store. From here you will be able to sync your profile images to
                the correct size depending on the chosen platform and store your cover images for your blog posts or
                website. Of course you can store whatever you want here really, its up to you! This will be powered by
                Cloudinary, ensuring safe, secure and optimal images.
              </p>
            </CardContainer>

            <CardContainer>
              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxHeight: '150px',
                  width: '100%',
                  marginTop: 30,
                }}
              >
                <Resume width="80px" height="80px" />
                <h4
                  sx={{
                    fontFamily: 'heading',
                    fontWeight: 400,
                    fontSize: ['1.2rem', '1.5rem'],
                    letterSpacing: 'text',
                    marginLeft: 2,
                    ':after': {
                      content: "''",
                      display: 'block',
                      paddingTop: 1,
                      width: '100%',
                      borderBottom: `2px solid #e45858`,
                    },
                  }}
                >
                  Resume Builder
                </h4>
              </div>
              <p
                sx={{
                  margin: '2em 1em',
                  fontFamily: 'heading',
                  fontWeight: 400,
                  fontSize: ['1rem', '1.2rem'],
                }}
              >
                The Resume tab will enable you to build out your resume for finding the perfect job via a drag and drop
                interface using composable resume sections. Arrange them as you want and save or print to PDF when you
                are done.
              </p>
            </CardContainer>

            <CardContainer>
              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxHeight: '150px',
                  width: '100%',
                  marginTop: 30,
                }}
              >
                <Video width="80px" height="80px" />
                <h4
                  sx={{
                    fontFamily: 'heading',
                    fontWeight: 400,
                    fontSize: ['1.2rem', '1.5rem'],
                    letterSpacing: 'text',
                    marginLeft: 2,
                    ':after': {
                      content: "''",
                      display: 'block',
                      paddingTop: 1,
                      width: '100%',
                      borderBottom: `2px solid #e45858`,
                    },
                  }}
                >
                  Meeting Room
                </h4>
              </div>
              <p
                sx={{
                  margin: '2em 1em',
                  fontFamily: 'heading',
                  fontWeight: 400,
                  fontSize: ['1rem', '1.2rem'],
                }}
              >
                The Meeting Room tab will be your own private chat portal. You can hold conference calls with other
                developers or just chat with your mates. Each invite will hold a key that expires after the call ends.
                Totally secure, no eavesdropping on your conversation, no saving of your chat. Its yours until it ends,
                then it disappears from existents. This of course means no saving of your meetings. This is will be
                powered by the daily.to API.
              </p>
            </CardContainer>
          </section>
        </WaveSection>
        <Footer />
      </div>
    </Layout>
  );
};
