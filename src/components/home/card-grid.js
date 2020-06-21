/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PackCard from './../pack-card';
import Card from './../svg/card';
import Social from './../svg/social';
import Domain from './../svg/domain';
import Media from './../svg/media';
import Resume from './../svg/resume';
import Video from './../svg/video';

const CardGrid = () => (
  <div
    sx={{
      maxWidth: 1440,
      margin: '0 auto',
      display: 'grid',
      gridAutoRows: 'minmax(auto, 260px)',
      gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 450px))',
      gap: '2.5em',
      padding: [20, 10, 1],
    }}
  >
    <PackCard
      heading="Dev Card"
      description="Your dev card is the worlds main entry point to who you are. Tell the world about yourself! Includes your chosen name, profile picture and blurb."
      icon={<Card width="90px" height="90px" />}
    />
    <PackCard
      heading="Social"
      description="All your social handles in one place. Keeping your handles consistent will help people find you easier."
      icon={<Social width="80px" height="80px" />}
    />
    <PackCard
      heading="Domains"
      description="Search, buy, sell and store all your domains in one place. Powered by Namecheap."
      icon={<Domain width="80px" height="80px" />}
    />
    <PackCard
      heading="Manage Media"
      description="Manage your media. For example, your profile pictures and cover photos. Powered by Cloudinary."
      icon={<Media width="80px" height="80px" />}
    />
    <PackCard
      heading="Resume Builder"
      description="Your resume tells employers why they should hire you. Drop in and arrange with composable components, then save or print to PDF."
      icon={<Resume width="80px" height="80px" />}
    />
    <PackCard
      heading="Meeting Room"
      description="A personal meeting room for video conference calls or friendly catch ups."
      icon={<Video width="80px" height="80px" />}
    />
  </div>
);

export default CardGrid;
