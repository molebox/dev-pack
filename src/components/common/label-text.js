/** @jsx jsx */
import { jsx } from 'theme-ui';

const LabelText = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      marginBottom: 1,
    }}
  >
    {children}
  </div>
);

export default LabelText;
