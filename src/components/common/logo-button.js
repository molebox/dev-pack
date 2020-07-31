/** @jsx jsx */
import { jsx } from 'theme-ui';

const LogoButton = ({ onClick, disabled, icon, text, comingSoon, className }) => {
  return (
    <button
      className={className}
      sx={{
        display: 'inline-block',
        height: 50,
        width: '100%',
        maxWidth: 200,
        display: 'grid',
        gridTemplateColumns: '25% 75%',
        justifyItems: 'center',
        alignItems: 'center',
        placeItems: 'center',
        textTransform: 'uppercase',
        backgroundColor: disabled ? 'disabled' : 'transparent',
        border: 'solid 2px',
        borderColor: 'text',
        borderRadius: '5px',
        position: 'relative',
        cursor: disabled ? null : 'pointer',
        ':hover': {
          borderColor: disabled ? '' : 'text',
          backgroundColor: 'background',
        },
        ':after': {
          content: comingSoon ? "'coming soon'" : "''",
          top: 50,
          left: 50,
          position: 'absolute',
          color: 'accent',
          fontFamily: 'heading',
          fontWeight: 600,
        },
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <p
        sx={{
          fontFamily: 'heading',
          fontWeight: 500,
          color: 'text',
          fontSize: ['0.9em', '0.8em'],
          textAlign: 'center',
        }}
      >
        {text}
      </p>
    </button>
  );
};

export default LogoButton;
