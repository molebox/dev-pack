/** @jsx jsx */
import { jsx } from 'theme-ui';
import { TabPanel } from 'react-tabs';

const SocialHub = ({ displayName, ...rest }) => {
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
        Welcome to your Social Hub {displayName}
      </h1>
    </TabPanel>
  );
};

SocialHub.tabsRole = 'TabPanel';

export default SocialHub;
