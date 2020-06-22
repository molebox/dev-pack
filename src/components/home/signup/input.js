/** @jsx jsx */
import { jsx } from 'theme-ui';

const Input = ({ type, name, handleChange, value, ariaLabel, placeholder }) => {
  return (
    <input
      sx={{
        border: '1px solid',
        borderColor: 'text',
        borderRadius: 3,
        height: '2em',
        fontFamily: 'heading',
        padding: 1,
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
