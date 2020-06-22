/** @jsx jsx */
import { jsx } from 'theme-ui';

const DynamicYear = new Date().getFullYear();
const heart = '\u{1F498}';

const Footer = () => (
  <footer
    sx={{
      background: 'primary',
      marginBottom: '-5px',
      width: '100%',
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#2b2c34" fill-opacity="1" d="M0,160L1440,128L1440,320L0,320Z"></path>
    </svg>
    <section
      sx={{
        backgroundColor: 'text',
        minHeight: '50px',
        marginTop: '-5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div
        sx={{
          textAlign: 'center',
          marginTop: '-5px',
          marginBottom: 20,
        }}
      >
        <p
          sx={{
            fontFamily: 'heading',
            fontSize: '1.1em',
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
                color: 'primary',
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
            fontSize: '1.1em',
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

export default Footer;
