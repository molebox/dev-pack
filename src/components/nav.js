/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import { useSiteMetadata } from './useSiteMetadata';
import Logo from './svg/logo';

const Nav = () => {
  const { siteName } = useSiteMetadata();

  React.useEffect(() => {
    gsap.fromTo(
      '.nav-link',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.2,
      }
    );
  }, []);

  return (
    <nav
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        width: '90vw',
        height: '100%',
        placeSelf: 'center',
      }}
    >
      <Link
        sx={{
          textDecoration: 'none',
          fontFamily: 'heading',
          color: 'text',
          letterSpacing: 'text',
          display: 'flex',
          alignItems: 'center',
          //   zIndex: 999,
          //   position: 'relative',
          //   ":after": {
          //     content: '""',
          //     position: 'absolute',
          //     top: ['20%', '30%', '30%'],
          //     left: ['15%', '250px', '-60px'],
          //     backgroundColor: 'accent',
          //     minWidth: '250px',
          //     minHeight: '50px',
          //     width: 'auto',
          //     height: 'auto',
          //     display: 'block',
          //     zIndex: -99999,
          //     transform: 'rotate(-5deg)'
          // }
        }}
        to="/"
        className="nav-link"
      >
        <Logo width="90px" height="90px" />
        {/* <p sx={{
          fontFamily: 'heading',
          ml: 5,
          fontSize: [2, 3, 3]
        }}>{siteName}</p> */}
      </Link>
    </nav>
  );
};

export default Nav;
