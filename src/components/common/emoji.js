/** @jsx jsx */
import { jsx } from 'theme-ui';

const Emoji = ({ children, ariaLabel }) => (
  <span sx={{ marginLeft: 2 }} role="img" aria-label={ariaLabel}>
    {children}
  </span>
);

export default Emoji;
