/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from './../components/layout';
import SEO from 'gatsby-theme-seo/src/components/seo';
import SignupForm from './../components/home/signup/form';
import { Link } from 'gatsby';
import gsap from 'gsap';
import IntroSection from '../components/home/intro-section';
import Footer from '../components/footer';
import { InternalLink } from './../components/common/internal-link';

const keywords = ['manage social profile', 'branding', 'developer branding', 'manage media', 'manage online presence'];

export default ({ location }) => {
  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });

    gsap.fromTo(
      '.h1-title',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.8,
        duration: 1,
      }
    );

    gsap.fromTo(
      '.h2-title',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.5,
        duration: 1,
      }
    );

    gsap.fromTo(
      '.to-hub',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2.5,
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
        {/* <div
          sx={{
            minWidth: [300, 500],
            maxHeight: 30,
            margin: '0 auto',
          }}
        >
          <InternalLink className="to-hub" to="/app/hub" text="Step inside (BETA)" />
        </div> */}

        <IntroSection />
      </div>
    </Layout>
  );
};
