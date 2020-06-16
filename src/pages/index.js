/** @jsx jsx */
import { jsx } from 'theme-ui';

export default () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background',
        height: '100vh',
      }}
    >
      <h1
        sx={{
          fontFamily: 'heading',
          color: 'text',
          ':after': {
            content: "''",
            display: 'block',
            paddingTop: 10,
            borderColor: 'accent',
            width: '100%',
            borderBottom: '2px solid #e45858',
          },
        }}
      >
        dev-pack
      </h1>
      <div
        sx={{
          backgroundColor: 'secondary',
          padding: 3,
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2
          sx={{
            fontFamily: 'heading',
            color: 'text',
          }}
        >
          Keep your online presence consistent across all social media.
        </h2>
      </div>
      <h2
        sx={{
          fontFamily: 'heading',
          color: 'text',
        }}
      >
        Coming Soon.
      </h2>
    </div>
  );
};
