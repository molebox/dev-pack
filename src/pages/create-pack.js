/** @jsx jsx */
import { jsx } from 'theme-ui';
import PackCard from '../components/pack-card';
import Layout from './../components/layout';
import Social from '../components/svg/social';
import Domain from '../components/svg/domain';
import Media from './../components/svg/media';
import Card from './../components/svg/card';
import Resume from './../components/svg/resume';
import Header from '../components/header';

const CreatePack = () => {
  return (
    <Layout>
      <Header title="Create Pack" />
      <div
        sx={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'grid',
          gridAutoRows: 'minmax(auto, 220px)',
          gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 450px))',
          gap: '2.5em',
          //   width: '100%',
          //   height: '100%',
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
