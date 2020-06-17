/** @jsx jsx */
import { jsx } from 'theme-ui';

const Header = ({ title }) => {
  return (
    <header
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        ':after': {
          content: "''",
          display: 'block',
          paddingTop: 10,
          borderColor: 'accent',
          width: '100%',
          borderBottom: '2px solid #e45858',
        },
      }}
    >
      <h1
        sx={{
          fontFamily: 'heading',
          color: 'text',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </h1>
    </header>
  );
};

export default Header;
