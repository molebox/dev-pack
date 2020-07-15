/** @jsx jsx */
import { jsx } from 'theme-ui';
import Nav from './nav';

const Header = () => {
  return (
    <header
      sx={{
        backgroundColor: 'background',
        color: 'text',
        maxHeight: '100px',
        padding: [null, '2em', '2em'],
        paddingTop: ['1em', null, null],
        // borderBottom: 'solid 3px',
        // borderBottomColor: 'text',
      }}
    >
      <Nav />
    </header>
  );
};

export default Header;
