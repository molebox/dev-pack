/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { TabPanel } from 'react-tabs';

const ResumeHub = ({ user, ...rest }) => {
  return <TabPanel {...rest}>This is the resume panel</TabPanel>;
};

ResumeHub.tabsRole = 'TabPanel';

export default ResumeHub;
