/** @jsx jsx */
import { jsx } from 'theme-ui';
import Error from './svg/error';

const ErrorCard = ({ error }) => {
  return (
    <div
      sx={{
        backgroundColor: 'secondary',
        padding: 4,
        borderRadius: 3,
        maxHeight: '220px',
        height: '100%',
      }}
    >
      <div
        sx={{
          display: 'flex',
          marginRight: 4,
          justifyContent: 'center',
          alignItems: 'center',
          maxHeight: '150px',
        }}
      >
        <Error width="90px" height="90px" />
        <h3
          sx={{
            fontFamily: 'heading',
            fontSize: '1.5rem',
            letterSpacing: 'text',
          }}
        >
          Oh No!
        </h3>
      </div>
      <p
        sx={{
          fontFamily: 'heading',
          fontSize: '1.2rem',
        }}
      >
        {error}
      </p>
    </div>
  );
};

export default ErrorCard;
