/** @jsx jsx */
import { jsx } from 'theme-ui';

const IntroCardText = ({ children }) => (
  <p
    sx={{
      m: 3,
      fontFamily: 'heading',
      fontWeight: 400,
      fontSize: [1, 2],
    }}
  >
    {children}
  </p>
);

export default IntroCardText;
