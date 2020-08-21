/** @jsx jsx */
import { jsx } from 'theme-ui';

const ActivityHub = () => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
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
        Overview of your activities. Your GitHub contributions chart, what sites you have deployed through Netlify etc..
      </p>
    </div>
  );
};

ActivityHub.tabsRole = 'TabPanel';

export default ActivityHub;
