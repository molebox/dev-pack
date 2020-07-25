/** @jsx jsx */
import { jsx } from 'theme-ui';

const TourBox = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: 2,
    }}
  >
    {children}
  </div>
);

export default TourBox;
