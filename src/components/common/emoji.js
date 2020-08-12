import React from 'react';

const Emoji = ({ ariaLabel, symbol }) => (
  <span role="img" aria-label={ariaLabel}>
    {symbol}
  </span>
);
export default Emoji;
