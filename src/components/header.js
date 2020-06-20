/** @jsx jsx */
import { jsx } from 'theme-ui';
import Nav from './nav';

const Header = () => {
  return (
    <header
      sx={{
        backgroundColor: 'background',
        color: 'text',
        maxHeight: '150px',
        padding: [null, '2em', '2em'],
        paddingTop: ['1em', null, null],
      }}
    >
      <Nav />
    </header>
    // <header
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginBottom: 50,
    //     ':after': {
    //       content: "''",
    //       display: 'block',
    //       paddingTop: 10,
    //       borderColor: 'accent',
    //       width: '100%',
    //       borderBottom: '2px solid #e45858',
    //     },
    //   }}
    // >
    //   <h1
    //     sx={{
    //       fontFamily: 'heading',
    //       fontWeight: 400,
    //       color: 'text',
    //       textTransform: 'uppercase',
    //     }}
    //   >
    //     {title}
    //   </h1>
    // </header>
  );
};

export default Header;
