/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

const Input = ({ type, name, handleChange, value }) => {
  return (
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
      value={value}
      type={type}
      name={name}
      onChange={handleChange}
    />
  );
};

export default Input;
