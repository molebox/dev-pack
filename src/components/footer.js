/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useLocation } from '@reach/router';

const DynamicYear = new Date().getFullYear();
const heart = '\u{1F498}';

const Footer = () => {
  const location = useLocation();

  const setBackground = () => {
    switch (location.pathname) {
      case '/':
        return 'accent';
      case '/app/hub':
        return 'accent';
      case '/app/login':
        return 'background';
      default:
        return 'background';
    }
  };

  return (
    <footer
      sx={{
        backgroundColor: setBackground(),
        mb: '-5px',
        width: '100%',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2b2c34" fillOpacity="1" d="M0,288L1440,224L1440,320L0,320Z"></path>
      </svg>
      <section
        sx={{
          backgroundColor: 'text',
          // minHeight: '350px',
          marginTop: '-5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 200,
          // clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)',
        }}
      >
        <div
          sx={{
            textAlign: 'center',
            marginTop: '-5px',
            marginBottom: 10,
          }}
        >
          <p
            sx={{
              fontFamily: 'heading',
              fontSize: '1em',
              color: 'background',
              margin: 10,
            }}
          >
            Created by{' '}
            <a
              sx={{
                fontFamily: 'heading',
                color: 'background',
                ':hover': {
                  color: 'accent',
                },
              }}
              href="https://twitter.com/studio_hungry"
            >
              Rich Haines
            </a>{' '}
            with {heart}, coffee and keyboard
          </p>
          <p
            sx={{
              fontFamily: 'heading',
              fontSize: '1em',
              color: 'background',
              margin: 10,
            }}
          >
            Powered by{' '}
            <a
              sx={{
                fontFamily: 'heading',
                color: 'background',
                ':hover': {
                  color: 'accent',
                },
              }}
              href="https://www.gatsbyjs.org/"
            >
              Gatsby
            </a>{' '}
            and{' '}
            <a
              sx={{
                fontFamily: 'heading',
                color: 'background',
                ':hover': {
                  color: 'accent',
                },
              }}
              href="https://www.onegraph.com/"
            >
              OneGraph
            </a>
          </p>
          <p
            sx={{
              fontFamily: 'heading',
              fontSize: '0.8em',
              color: 'background',
              margin: 10,
            }}
          >
            Copyright &copy; {DynamicYear} dev-pack. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
