/** @jsx jsx */
import { jsx } from 'theme-ui';

const Label = ({ children }) => (
  <label
    sx={{
      fontFamily: 'body',
      display: 'flex',
      flexDirection: 'column',
      color: 'text',
      marginTop: 20,
    }}
  >
    {children}
  </label>
);

export default Label;
