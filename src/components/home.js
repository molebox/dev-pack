/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import WaveSection from './svg/wave-section';
import PackCard from './pack-card';
import Card from './svg/card';
import Social from './svg/social';
import Domain from './svg/domain';
import Media from './svg/media';
import Resume from './svg/resume';
import Video from './svg/video';
import gsap from 'gsap';

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
          // justifyContent: 'start',
          alignItems: 'center',
          position: 'relative',
          marginTop: 100,
          maxWidth: 1000,
        }}
      >
        <h1
          sx={{
            fontFamily: 'heading',
            color: 'text',
            fontWeight: 500,
            width: '100%',
            fontSize: ['1.4em', '1.5em', '3em'],
            marginBottom: 20,
            padding: 10,
          }}
        >
          Keep your personal branding consistent across multiple platforms
        </h1>
        <h2
          sx={{
            fontFamily: 'heading',
            color: 'text',
            fontWeight: 400,
            fontSize: ['1em', '1.2em', '2em'],
            width: '100%',
            padding: 10,
          }}
        >
          Manage your social presence, media and domains from one hub. Coming Soon...
        </h2>
      </div>
      <WaveSection>
        <div
          sx={{
            maxWidth: 1440,
            margin: '0 auto',
            display: 'grid',
            gridAutoRows: 'minmax(auto, 250px)',
            gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 450px))',
            gap: '2.5em',
            padding: [20, 10, 1],
          }}
        >
          <PackCard
            heading="Dev Card"
            description="Your dev card is the worlds main entry point to who you are. Tell the world about yourself!"
            icon={<Card width="90px" height="90px" />}
          />
          <PackCard
            heading="Social"
            description="All your social handles in one place. Keeping your handles consistent will help people find you easier."
            icon={<Social width="80px" height="80px" />}
          />
          <PackCard
            heading="Domains"
            description="Search, buy, sell and store all your domains in one place."
            icon={<Domain width="80px" height="80px" />}
          />
          <PackCard
            heading="Manage Media"
            description="Manage your media. For example, your profile picture."
            icon={<Media width="80px" height="80px" />}
          />
          <PackCard
            heading="Resume"
            description="Your resume tells employers why they should hire you. "
            icon={<Resume width="80px" height="80px" />}
          />
          <PackCard
            heading="Meeting Room"
            description="A personal meeting room for video conference calls or friendly catch ups. Coming Soon..."
            icon={<Video width="80px" height="80px" />}
          />
        </div>
      </WaveSection>
    </div>
  );
};

export default Home;
