/** @jsx jsx */
import { jsx } from 'theme-ui';

const WaveSection = ({ children }) => {
  return (
    <section
      sx={{
        background: 'secondary',
        marginBottom: '-5px',
        width: '100%',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d1d1e9"
          fillOpacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,197.3C384,224,480,256,576,224C672,192,768,96,864,85.3C960,75,1056,149,1152,181.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <section
        sx={{
          backgroundColor: 'secondary',
          minHeight: '500px',
          marginTop: '-5px',
          paddingBottom: '3em',
        }}
      >
        {children}
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d1d1e9"
          fill-opacity="1"
          d="M0,192L48,176C96,160,192,128,288,117.3C384,107,480,117,576,144C672,171,768,213,864,202.7C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default WaveSection;
