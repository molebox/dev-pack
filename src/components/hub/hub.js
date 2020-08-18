/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../layout';
import 'react-tabs/style/react-tabs.css';
import DevCardHub from './dev-card/dev-card-hub';
import gsap from 'gsap';

const Hub = () => {
  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
  }, []);

  return (
    <Layout>
      <div
        sx={{
          backgroundColor: 'accent',
          pt: 2,
        }}
      >
        <DevCardHub />
      </div>
    </Layout>
  );
};

export default Hub;
