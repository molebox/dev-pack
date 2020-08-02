/** @jsx jsx */
import { jsx } from 'theme-ui';

const Checkbox = ({ type, checked, onCheckboxChange, disabled, comingSoon }) => {
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
        disabled={disabled}
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
          backgroundColor: disabled ? 'disabled' : 'background',
          cursor: disabled ? null : 'pointer',
          // ':after': {
          //   content: comingSoon ? "'coming soon'" : "''",
          //   top: 30,
          //   left: 0,
          //   position: 'absolute',
          //   color: 'accent',
          //   fontFamily: 'heading',
          //   fontWeight: 600,
          //   textTransform: 'uppercase',
          // },
          ':checked': {
            borderColor: 'background',
            backgroundColor: 'background',
            border: 'solid 2px',
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
