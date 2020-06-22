/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import WaveSection from '../svg/wave-section';
import gsap from 'gsap';
import CardGrid from './card-grid';
import SignupForm from './signup/form';
import Footer from '../footer';
import { Link } from 'gatsby';

const Home = () => {
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

  return (
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
        {/* <Link to="/hub">To Hub</Link> */}
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
        <CardGrid />
        <h4
          sx={{
            fontFamily: 'heading',
            color: 'text',
            fontWeight: 400,
            fontSize: ['1.3em', '1.5em', '2em'],
            width: '100%',
            paddingTop: 50,
            marginBottom: 10,
            textAlign: 'center',
          }}
        >
          Lets break it down....
        </h4>
        <section
          sx={{
            paddingTop: 50,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: 1440,
          }}
        >
          <div
            sx={{
              backgroundColor: 'background',
              padding: 4,
              borderRadius: 3,
              marginBottom: 40,
            }}
          >
            <h4
              sx={{
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1.5rem', '1.7rem'],
                textAlign: 'center',
                ':after': {
                  content: "''",
                  display: 'block',
                  paddingTop: 1,
                  width: '100%',
                  borderBottom: `2px solid #e45858`,
                },
              }}
            >
              Dev Pack
            </h4>
            <p
              sx={{
                margin: '2em 1em',
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1rem', '1.2rem'],
              }}
            >
              The Dev Card tab will tie in with the Manage Media section and enable you to save your profile picture to
              the correct size depending on the platform. As well as your chosen name and bio. Once you have chosen your
              online card you will be able to push it to our selected social networks, which at the moment include
              Twitter and Github.{' '}
              <strong>Planned integrations include dev.to, LinkedIn, CopePen, Twitch and Stackoverflow</strong> Having
              have all this information in one place and being able to edit it and be consistent across all platforms
              will increase your social reach and findability.
            </p>
          </div>

          <div
            sx={{
              backgroundColor: 'background',
              padding: 4,
              borderRadius: 3,
              marginBottom: 40,
            }}
          >
            <h4
              sx={{
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1.5rem', '1.7rem'],
                textAlign: 'center',
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
            <p
              sx={{
                margin: '2em 1em',
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1rem', '1.2rem'],
                // textAlign: 'center'
              }}
            >
              The Social tab will aim to enable you to sync your social handles across platforms. There are some walls
              to cross with this feature as some platform APIs dont allow changing of handles. As with the Dev Card,
              from launch you will be able to sync your Twitter and Github handles, with the same planned integrations
              to come.
            </p>
          </div>

          <div
            sx={{
              backgroundColor: 'background',
              padding: 4,
              borderRadius: 3,
              marginBottom: 40,
            }}
          >
            <h4
              sx={{
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1.5rem', '1.7rem'],
                textAlign: 'center',
                ':after': {
                  content: "''",
                  display: 'block',
                  paddingTop: 1,
                  width: '100%',
                  borderBottom: `2px solid #e45858`,
                },
              }}
            >
              Domains
            </h4>
            <p
              sx={{
                margin: '2em 1em',
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1rem', '1.2rem'],
              }}
            >
              The Domains tab will be powered by namecheap and enable you to search for, buy and sell your domains. The
              dashboard will integrate with the namecheap API so that you can manage your domains from the hub.
            </p>
          </div>
          <div
            sx={{
              backgroundColor: 'background',
              padding: 4,
              borderRadius: 3,
              marginBottom: 40,
            }}
          >
            <h4
              sx={{
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1.5rem', '1.7rem'],
                textAlign: 'center',
                ':after': {
                  content: "''",
                  display: 'block',
                  paddingTop: 1,
                  width: '100%',
                  borderBottom: `2px solid #e45858`,
                },
              }}
            >
              Mange Media
            </h4>
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
          </div>

          <div
            sx={{
              backgroundColor: 'background',
              padding: 4,
              borderRadius: 3,
              marginBottom: 40,
            }}
          >
            <h4
              sx={{
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1.5rem', '1.7rem'],
                textAlign: 'center',
                ':after': {
                  content: "''",
                  display: 'block',
                  paddingTop: 1,
                  width: '100%',
                  borderBottom: `2px solid #e45858`,
                },
              }}
            >
              Resume
            </h4>
            <p
              sx={{
                margin: '2em 1em',
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1rem', '1.2rem'],
              }}
            >
              The Resume tab will enable you to build out your resume for finding the perfect job via a drag and drop
              interface using composable resume sections. Arrange them as you want and save or print to PDF when you are
              done.
            </p>
          </div>

          <div
            sx={{
              backgroundColor: 'background',
              padding: 4,
              borderRadius: 3,
              marginBottom: 40,
            }}
          >
            <h4
              sx={{
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1.5rem', '1.7rem'],
                textAlign: 'center',
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
          </div>
        </section>
      </WaveSection>
      <Footer />
    </div>
  );
};

export default Home;
