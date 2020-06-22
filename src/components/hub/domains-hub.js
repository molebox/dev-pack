/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { TabPanel } from 'react-tabs';

const DomainsHub = ({ user, ...rest }) => {
  return <TabPanel {...rest}>This is the domains panel</TabPanel>;
};

DomainsHub.tabsRole = 'TabPanel';

export default DomainsHub;
