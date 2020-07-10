/** @jsx jsx */
import { jsx } from 'theme-ui';

const Subtitle = ({ children }) => (
  <h3
    sx={{
      fontFamily: 'heading',
      color: 'text',
      fontWeight: 500,
      fontSize: [4, 4, 5],
      width: '100%',
      padding: 2,
      my: 50,
      textAlign: 'center',
      zIndex: 999,
      position: 'relative',
      ':after': {
        content: '""',
        position: 'absolute',
        top: ['20%', '30%', '30%'],
        left: ['15%', '250px', '170px'],
        backgroundColor: 'background',
        minWidth: '250px',
        minHeight: '50px',
        width: 'auto',
        height: 'auto',
        display: 'block',
        zIndex: -99999,
        transform: 'rotate(-5deg)',
      },
    }}
  >
    {children}
  </h3>
);

export default Subtitle;
