/** @jsx jsx */
import { jsx } from 'theme-ui';

const PackCard = ({ heading, description, icon }) => {
  return (
    <div
      sx={{
        backgroundColor: 'background',
        padding: 4,
        borderRadius: 3,
        maxHeight: '260px',
        height: '100%',
        width: '100%',
        borderLeft: `solid 3px #6246ea`,
      }}
      className="packCard"
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxHeight: '150px',
          width: '100%',
        }}
      >
        {icon}
        <h3
          sx={{
            fontFamily: 'heading',
            fontWeight: 400,
            fontSize: ['1.2rem', '1.5rem'],
            letterSpacing: 'text',
            marginLeft: 2,
            ':after': {
              content: "''",
              display: 'block',
              paddingTop: 1,
              width: '100%',
              borderBottom: `2px solid #e45858`,
            },
          }}
        >
          {heading}
        </h3>
      </div>
      <p
        sx={{
          fontFamily: 'heading',
          fontSize: ['1rem', '1.2rem'],
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default PackCard;
