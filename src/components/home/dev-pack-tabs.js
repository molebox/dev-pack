/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';
import './dev-pack-tabs.css';
import DevCardHub from './../hub/dev-card/dev-card-hub';

const DevPackTabs = () => {
  return (
    <section
      sx={{
        backgroundColor: 'accent',
        minHeight: 700,
        width: '100vw',
        marginTop: '10em',
      }}
    >
      <div
        sx={{
          m: 6,
        }}
      >
        <Tabs className="react-tabs">
          <TabList className="react-tabs__tab-list">
            <Tab className="react-tabs__tab">
              <p
                sx={{
                  fontFamily: 'heading',
                  fontSize: 2,
                }}
              >
                Dev Card
              </p>
            </Tab>
            <Tab className="react-tabs__tab">
              <p
                sx={{
                  fontFamily: 'heading',
                  fontSize: 2,
                }}
              >
                Domain MGMT
              </p>
            </Tab>
          </TabList>

          <TabPanel className="react-tabs__tab-panel">
            <DevCardHub />
          </TabPanel>
          <TabPanel className="react-tabs__tab-panel">domains mgmt</TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default DevPackTabs;
