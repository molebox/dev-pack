/** @jsx jsx */
import { jsx } from 'theme-ui';

const Input = ({ type, name, handleChange }) => (
  <input
    sx={{
      border: '1px solid',
      borderColor: 'text',
      borderRadius: 3,
      height: '2em',
      marginTop: 2,
      fontFamily: 'heading',
      padding: 1,
    }}
    type={type}
    name={name}
    onChange={handleChange}
  />
);

export default Input;
