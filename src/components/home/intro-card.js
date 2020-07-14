/** @jsx jsx */
import { jsx } from 'theme-ui';

const IntroCard = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mx: 15,
    }}
  >
    {children}
  </div>
);

export default IntroCard;
