/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { linearGradient } from './../../butler/index';

const Shadow = styled.p`
  background-image: ${linearGradient}
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `;

const Button = ({ onClick, type, children }) => (
  <button
    onClick={onClick}
    sx={{
      fontFamily: 'heading',
      fontSize: '0.9em',
      fontWeight: 600,
      letterSpacing: 1,
      border: '1px solid',
      borderRadius: 5,
      padding: 1,
      borderColor: 'text',
      backgroundColor: 'background',
      color: 'background',
      cursor: 'pointer',
      textTransform: 'uppercase',
      height: '2em',
      minWidth: 100,
      '&:hover': {
        border: '1.5px solid',
        borderColor: 'text',
      },
      '&:active': {
        boxShadow: ' 1px #e45858',
      },
    }}
    type={type}
  >
    <Shadow>{children}</Shadow>
  </button>
);

export default Button;
