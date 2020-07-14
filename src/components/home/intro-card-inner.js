/** @jsx jsx */
import { jsx } from 'theme-ui';

const IntroCardInner = ({ children }) => (
  <div
    sx={{
      my: 4,
      padding: 2,
      boxShadow: 0,
      border: 'solid 3px',
      maxWidth: 600,
      backgroundColor: 'background',
      minHeight: 250,
    }}
  >
    {children}
  </div>
);

export default IntroCardInner;
