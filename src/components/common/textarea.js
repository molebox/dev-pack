/** @jsx jsx */
import { jsx } from 'theme-ui';

const TextArea = ({ type, name, handleChange, value, ariaLabel, placeholder }) => {
  return (
    <textarea
      sx={{
        border: '3px solid',
        borderColor: 'text',
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
      maxLength="160"
    ></textarea>
  );
};

export default TextArea;
