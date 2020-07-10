/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from './../components/layout';
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
import gsap from 'gsap';
import { FunkyText } from './../butler/index';

const keywords = ['manage social profile', 'branding', 'developer branding', 'manage media', 'manage online presence'];

export default ({ location }) => {
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
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            maxWidth: 1000,
          }}
        >
          <h1
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontWeight: 500,
              width: '100%',
              fontSize: [3, 4, 6],
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
              fontSize: [1, 2, 4],
              width: '100%',
              padding: 10,
              textAlign: 'center',
            }}
            className="h2-title"
          >
            Manage your social presence, media and domains from one hub
          </h2>
        </div>
        <SignupForm />
        {/* <Link to="/app/hub">To Hub</Link> */}
        {/* <WaveSection>
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
        </WaveSection> */}
      </div>
    </Layout>
  );
};
