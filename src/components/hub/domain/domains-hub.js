/** @jsx jsx */
import { jsx } from 'theme-ui';

const DomainsHub = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 700,
        maxWidth: 1440,
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
      <p
        sx={{
          fontFamily: 'heading',
          fontSize: 4,
          color: 'text',
        }}
      >
        Search, buy and sell domains. Powered by namecheap
      </p>
    </div>
  );
};

DomainsHub.tabsRole = 'TabPanel';

export default DomainsHub;
