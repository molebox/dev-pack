/** @jsx jsx */
import { jsx } from 'theme-ui';

const Subtitle = ({ children }) => (
  <h3
    sx={{
      fontFamily: 'heading',
      color: 'text',
      fontWeight: 700,
      fontSize: [4, 4, 6],
      padding: 2,
      maxWidth: 300,
      m: 50,
      textAlign: 'center',
      border: 'solid 3px',
      transform: 'skew(-15deg)',
      boxShadow: 0,
      // zIndex: 999,
      // position: 'relative',
      // ':after': {
      //   content: '""',
      //   position: 'absolute',
      //   top: ['-20%', '30%', '-10%'],
      //   left: ['20%', '250px', '150px'],
      //   backgroundColor: 'background',
      //   border: 'solid 3px',
      //   borderColor: 'text',
      //   minWidth: ['200px', '200px', '300px'],
      //   minHeight: '100px',
      //   width: 'auto',
      //   height: 'auto',
      //   display: 'block',
      //   zIndex: -99999,
      //   transform: 'skew(-5deg)',
      // },
    }}
  >
    {children}
  </h3>
);

export default Subtitle;
