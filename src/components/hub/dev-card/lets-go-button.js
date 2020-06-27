/** @jsx jsx */
import { jsx } from 'theme-ui';
import LogoText from './../../logo-text';

const LetsGo = ({ handleLetsGoClick, ...rest }) => {
  return (
    <button
      {...rest}
      sx={{
        border: '3px solid',
        borderColor: 'primary',
        borderRadius: 5,
        padding: 10,
        height: 'auto',
        color: 'text',
        fontFamily: 'heading',
        fontWeight: 500,
        fontSize: ['0.8em', '1em', '1.8em'],
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'secondary',
          color: 'background',
          fontWeight: 'heading',
          fontFamily: 'heading',
          fontWeight: 500,
          fontSize: ['0.8em', '1em', '1.8em'],
        },
        ':active': {
          backgroundColor: 'primary',
          color: 'background',
        },
        ':focus': {
          backgroundColor: 'primary',
          color: 'background',
        },
      }}
      //   onClick={() => handleLetsGoClick()}
    >
      <LogoText>Push it!</LogoText>
    </button>
  );
};

export default LetsGo;
