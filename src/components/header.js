/** @jsx jsx */
import { jsx } from 'theme-ui';
import Nav from './nav';
import { useLocation } from '@reach/router';

const Header = () => {
  const location = useLocation();
  return (
    <header
      sx={{
        backgroundColor: 'background',
        color: 'text',
        maxHeight: '100px',
        padding: [null, '2em', '2em'],
        paddingTop: ['1em', null, null],
        display: location.pathname === '/app/hub' ? 'none' : 'block',
      }}
    >
      <Nav />
    </header>
  );
};

export default Header;
