/** @jsx jsx */
import { jsx } from 'theme-ui';

const TextArea = ({ type, name, handleChange, value, ariaLabel, placeholder }) => {
  return (
    <textarea
      sx={{
        border: '2px solid',
        borderColor: 'primary',
        borderRadius: 5,
        fontFamily: 'heading',
        padding: 2,
        resize: 'none',
        '&:focus': {
          borderColor: 'accent',
        },
      }}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      type={type}
      onChange={handleChange}
      rows="5"
      name={name}
    ></textarea>
  );
};

export default TextArea;
