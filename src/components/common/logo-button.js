/** @jsx jsx */
import { jsx } from 'theme-ui';

const LogoButton = ({ onClick, disabled, icon, text }) => {
  return (
    <button
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
        cursor: disabled ? null : 'pointer',
        ':hover': {
          borderColor: disabled ? '' : 'accent',
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
