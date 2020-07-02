/** @jsx jsx */
import { jsx } from 'theme-ui';

const LabelText = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      marginBottom: 10,
    }}
  >
    {children}
  </div>
);

export default LabelText;
