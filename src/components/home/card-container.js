/** @jsx jsx */
import { jsx } from 'theme-ui';

const CardContainer = ({ children }) => (
  <div
    sx={{
      backgroundColor: 'background',
      padding: 2,
      borderRadius: 3,
      marginBottom: 40,
      borderLeft: `solid 3px #6246ea`,
    }}
  >
    {children}
  </div>
);

export default CardContainer;
