/** @jsx jsx */
import { jsx } from 'theme-ui';
import { TabPanel } from 'react-tabs';

const ManageMediaHub = ({ user, ...rest }) => {
  return <TabPanel {...rest}>This is the manage media panel</TabPanel>;
};

ManageMediaHub.tabsRole = 'TabPanel';

export default ManageMediaHub;
