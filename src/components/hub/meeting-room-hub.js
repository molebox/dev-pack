/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { TabPanel } from 'react-tabs';

const MeetingRoomHub = ({ user, ...rest }) => {
  return <TabPanel {...rest}>This is the meeting room panel</TabPanel>;
};

MeetingRoomHub.tabsRole = 'TabPanel';

export default MeetingRoomHub;
