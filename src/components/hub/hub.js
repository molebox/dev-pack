/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../layout';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DevCardHub from './dev-card/dev-card-hub';
import DomainsHub from './domain/domains-hub';
import gsap from 'gsap';
import { UserContext } from './../../context/user-context';
import Logout from './logout';
import AuthHeader from './auth-header';
import Footer from './../footer';

const Hub = () => {
  const { currentUser } = React.useContext(UserContext);

  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
  }, []);

  return (
    <Layout>
      <AuthHeader />
      <DevCardHub />
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
