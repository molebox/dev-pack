/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';
import './dev-pack-tabs.css';
import DevCardHub from './../hub/dev-card/dev-card-hub';
import DomainsHub from '../hub/domain/domains-hub';
import { DevCardStateContext } from './../../context/devcard-context';
import AuthHeader from './../hub/auth-header';

const DevPackTabs = () => {
  const state = React.useContext(DevCardStateContext);
  return (
    <section
      sx={{
        backgroundColor: 'accent',
        minHeight: 700,
        // width: '100%',
        my: 5,
        mb: -10,
      }}
    >
      <header
        sx={{
          margin: '0 auto',
          width: '90%',
          mb: 6,
        }}
      >
        <AuthHeader userName={state.name} />
      </header>

      <div
        sx={{
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        <Tabs className="react-tabs">
          <TabList className="react-tabs__tab-list">
            <Tab className="react-tabs__tab">
              <p
                sx={{
                  fontFamily: 'heading',
                  fontSize: 2,
                  color: 'text',
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
                Domains
              </p>
            </Tab>
          </TabList>

          <TabPanel className="react-tabs__tab-panel">
            <DevCardHub />
          </TabPanel>
          <TabPanel className="react-tabs__tab-panel">
            <DomainsHub />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default DevPackTabs;
