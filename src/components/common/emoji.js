import React from 'react';

const Emoji = ({ children, ariaLabel }) => (
  <span style={{ marginLeft: 5 }} role="img" aria-label={ariaLabel}>
    {children}
  </span>
);

export default Emoji;
