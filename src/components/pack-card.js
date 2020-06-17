/** @jsx jsx */
import { jsx } from 'theme-ui';

const PackCard = ({ heading, description, icon }) => {
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
        {icon}
        <h3
          sx={{
            fontFamily: 'heading',
            fontSize: '1.5rem',
            letterSpacing: 'text',
          }}
        >
          {heading}
        </h3>
      </div>
      <p
        sx={{
          fontFamily: 'heading',
          fontSize: '1.2rem',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default PackCard;
