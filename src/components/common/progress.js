/** @jsx jsx */
import { jsx } from 'theme-ui';

const Progress = ({ progress }) => {
  return (
    <div
      sx={{
        width: '100%',
        height: 8,
        backgroundColor: 'rgb(183, 155, 229)',
        borderRadius: 5,
      }}
    >
      <div
        sx={{
          width: progress + '%',
          backgroundColor: 'rgba(103, 58, 183, 1)',
          height: '100%',
          margin: 0,
          borderRadius: 5,
        }}
      />
    </div>
  );
};

export default Progress;
