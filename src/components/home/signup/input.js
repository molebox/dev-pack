/** @jsx jsx */
import { jsx } from 'theme-ui';

const Input = ({ type, name, handleChange, value, ariaLabel, placeholder }) => {
  return (
    <input
      sx={{
        my: 2,
        border: '3px solid',
        borderColor: 'text',
        height: '2em',
        fontFamily: 'heading',
        padding: 2,
        ':focus': {
          border: '4px solid',
          borderColor: 'text',
        },
      }}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      type={type}
      name={name}
      onChange={handleChange}
    />
  );
};

export default Input;
