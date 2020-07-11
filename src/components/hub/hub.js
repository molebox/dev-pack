/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../layout';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DevCardHub from './dev-card/dev-card-hub';
import SocialHub from './social/social-hub';
import DomainsHub from './domain/domains-hub';
import ManageMediaHub from './media/manage-media-hub';
import ResumeHub from './resume/resume-hub';
import MeetingRoomHub from './meeting-room/meeting-room-hub';
import gsap from 'gsap';
import { UserContext } from './../../context/user-context';

const Hub = () => {
  const { currentUser } = React.useContext(UserContext);

  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
  }, []);

  return (
    <Layout>
      <section
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
              <p sx={{ fontFamily: 'heading' }}>Social</p>
            </Tab> */}
            <Tab>
              <p sx={{ fontFamily: 'heading' }}>Domains</p>
            </Tab>
            {/* <Tab>
              <p sx={{ fontFamily: 'heading' }}>Manage Media</p>
            </Tab>
            <Tab>
              <p sx={{ fontFamily: 'heading' }}>Resume</p>
            </Tab>
            <Tab>
              <p sx={{ fontFamily: 'heading' }}>Meeting Room</p>
            </Tab> */}
          </TabList>

          <DevCardHub user={currentUser} />
          <SocialHub user={currentUser} />
          <DomainsHub user={currentUser} />
          <ManageMediaHub user={currentUser} />
          <ResumeHub user={currentUser} />
          <MeetingRoomHub user={currentUser} />
        </Tabs>
      </section>
    </Layout>
  );
};

export default Hub;
