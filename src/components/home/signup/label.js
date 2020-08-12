/** @jsx jsx */
import { jsx } from 'theme-ui';

const Label = ({ children, forAttribute }) => (
  <label
    sx={{
      fontFamily: 'body',
      display: 'flex',
      flexDirection: 'column',
      color: 'text',
      marginTop: 20,
    }}
    for={forAttribute}
  >
    {children}
  </label>
);

export default Label;
