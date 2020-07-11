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
  );
};

export default Header;
