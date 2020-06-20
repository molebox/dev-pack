/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PackCard from '../components/pack-card';
import Layout from '../components/layout';
import Social from '../components/svg/social';
import Domain from '../components/svg/domain';
import Media from '../components/svg/media';
import Card from '../components/svg/card';
import Resume from '../components/svg/resume';
import Header from '../components/header';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CreatePack = () => {
  const packCardRef = React.useRef(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.to('body', { visibility: 'visible' });

    gsap.fromTo(
      '.packCard',
      { scale: 0.001 },
      {
        duration: 0.6,
        scale: 1,
        y: 40,
        ease: 'power1.inOut',
        stagger: {
          grid: 'auto',
          from: 'edges',
          amount: 1,
        },
      }
    );

    // if (packCardRef.current) {
    //   gsap.to(packCardRef.current, {
    //     duration: 1,
    //     ease: "power3.inOut",
    //     stagger: {
    //       grid: 'auto',
    //       from: "center",
    //       amount: 1.5
    //     }
    //   });
    // }
  }, []);

  return (
    <Layout>
      <div
        sx={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'grid',
          gridAutoRows: 'minmax(auto, 250px)',
          gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 450px))',
          gap: '2.5em',
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
          description="Store links to all your domains in one place for easy access."
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
      </div>
    </Layout>
  );
};

export default CreatePack;
