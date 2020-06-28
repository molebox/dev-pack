/** @jsx jsx */
import { jsx } from 'theme-ui';

const Checkbox = ({ type, checked, onCheckboxChange }) => {
  return (
    <label
      sx={{
        display: 'inline-flex',
        cursor: 'pointer',
        position: 'relative',
      }}
      htmlFor=""
    >
      <input
        checked={checked}
        onChange={onCheckboxChange}
        sx={{
          height: 25,
          width: 25,
          appearance: 'none',
          border: 'solid 2px',
          borderColor: 'text',
          borderRadius: 5,
          outline: 'none',
          backgroundColor: 'background',
          cursor: 'pointer',
          ':checked': {
            borderColor: 'background',
            backgroundColor: 'background',
            border: 'solid 2px',
            borderColor: 'primary',
            borderRadius: 5,
            ':before': {
              content: '"👊🏽"',
              display: 'block',
              color: 'text',
              position: 'absolute',
              margin: 'auto',
              left: 1,
              top: 0.9,
              right: 0,
            },
          },
        }}
        type="checkbox"
      />
      <span
        sx={{
          color: 'text',
          fontFamily: 'heading',
          fontWeight: 400,
          fontSize: '1.2em',
          textAlign: 'center',
          marginLeft: 10,
          marginRight: 20,
        }}
      >
        {type}
      </span>
    </label>
  );
};

export default Checkbox;
