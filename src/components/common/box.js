/** @jsx jsx */
import { jsx, Box as ThemeBox } from 'theme-ui';

const Box = ({ children }) => {
  return (
    <ThemeBox
      sx={{
        my: 4,
        padding: 2,
        boxShadow: 0,
        border: 'solid 3px',
        maxWidth: 600,
      }}
    >
      {children}
    </ThemeBox>
  );
};

export default Box;
