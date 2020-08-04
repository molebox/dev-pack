/** @jsx jsx */
import { jsx } from 'theme-ui';

const LabelText = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      marginBottom: 1,
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);

export default LabelText;
