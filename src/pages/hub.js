/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from './../components/layout';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DevCardHub from '../components/hub/dev-card/dev-card-hub';
import SocialHub from '../components/hub/social/social-hub';
import DomainsHub from '../components/hub/domain/domains-hub';
import ManageMediaHub from '../components/hub/media/manage-media-hub';
import ResumeHub from '../components/hub/resume/resume-hub';
import MeetingRoomHub from '../components/hub/meeting-room/meeting-room-hub';
import { UserContext } from './../context/user-context';

const Hub = () => {
  console.log('render');
  const { currentUser } = React.useContext(UserContext);
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
            <Tab>
              <p sx={{ fontFamily: 'heading' }}>Social</p>
            </Tab>
            <Tab>
              <p sx={{ fontFamily: 'heading' }}>Domains</p>
            </Tab>
            <Tab>
              <p sx={{ fontFamily: 'heading' }}>Manage Media</p>
            </Tab>
            <Tab>
              <p sx={{ fontFamily: 'heading' }}>Resume</p>
            </Tab>
            <Tab>
              <p sx={{ fontFamily: 'heading' }}>Meeting Room</p>
            </Tab>
          </TabList>

          <DevCardHub user={currentUser.displayName} />
          <SocialHub user={currentUser.displayName} />
          <DomainsHub user={currentUser.displayName} />
          <ManageMediaHub user={currentUser.displayName} />
          <ResumeHub user={currentUser.displayName} />
          <MeetingRoomHub user={currentUser.displayName} />
        </Tabs>
      </section>
    </Layout>
  );
};

export default Hub;
