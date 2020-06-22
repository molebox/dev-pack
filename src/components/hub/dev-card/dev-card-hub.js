/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { TabPanel } from 'react-tabs';
import { UserContext } from '../../../context/user-context';

const DevCardHub = ({ user, ...rest }) => {
  return (
    <TabPanel {...rest}>
      <h1
        sx={{
          fontFamily: 'heading',
          color: 'text',
          fontWeight: 500,
          width: '100%',
          fontSize: ['1.4em', '1.7em', '2em'],
          marginBottom: 20,
          padding: 10,
          textAlign: 'center',
        }}
      >
        Welcome to your Dev Card {user}
      </h1>
      <section
        sx={{
          maxWidth: 1440,
        }}
      ></section>
    </TabPanel>
  );
};

DevCardHub.tabsRole = 'TabPanel';

export default DevCardHub;
