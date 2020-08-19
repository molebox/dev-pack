/** @jsx jsx */
import { jsx } from 'theme-ui';
import { TabPanel } from 'react-tabs';

const DomainsHub = () => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 700,
      }}
    >
      <h1
        sx={{
          fontFamily: 'heading',
          fontSize: 6,
          color: 'background',
        }}
      >
        COMING SOON
      </h1>
    </div>
  );
};

DomainsHub.tabsRole = 'TabPanel';

export default DomainsHub;
