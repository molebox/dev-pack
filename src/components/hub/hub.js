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
        {/* <AuthHeader /> */}
        <DevCardHub />
      </div>
      {/* <section
        sx={{
          margin: '0 auto',
        }}
      >
        <div
          sx={{
            maxWidth: 1440,
            margin: '0 auto',
          }}
        >
          <Tabs>
            <TabList>
              <Tab>
                <p sx={{ fontFamily: 'heading' }}>Dev Card</p>
              </Tab>
              {/* <Tab>
                <p sx={{ fontFamily: 'heading' }}>Domains</p>
              </Tab> */}
      {/* </TabList>

            <DevCardHub user={currentUser} />
            <DomainsHub user={currentUser} />
          </Tabs>
        </div>
      </section> */}
    </Layout>
  );
};

export default Hub;
