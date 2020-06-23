/** @jsx jsx */
import { jsx } from 'theme-ui';

const TextArea = ({ type, name, handleChange, value, ariaLabel, placeholder }) => {
  return (
    <textarea
      sx={{
        border: '1px solid',
        borderColor: 'text',
        borderRadius: 5,
        fontFamily: 'heading',
        padding: 2,
        resize: 'none',
      }}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      type={type}
      onChange={handleChange}
      rows="5"
      required
      name={name}
    ></textarea>
  );
};

export default TextArea;
