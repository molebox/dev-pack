/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import WaveSection from '../svg/wave-section';
import gsap from 'gsap';
import CardGrid from './card-grid';
import SignupForm from './signup/form';
import Footer from '../footer';

const Home = () => {
  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
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
        >
          Keep your personal branding consistent across multiple platforms.
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
        >
          Manage your social presence, media and domains from one hub.
        </h2>
        <SignupForm />
      </div>
      <WaveSection>
        <CardGrid />
      </WaveSection>
      <Footer />
    </div>
  );
};

export default Home;
