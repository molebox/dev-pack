/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import Logo from './svg/logo';
import { useSiteMetadata } from './useSiteMetadata';
import LogoText from './logo-text';
import DevPackLogo from './svg/dev-pack-logo';

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
        justifyContent: 'start',
        alignItems: 'center',
        maxWidth: 1440,
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
        }}
        to="/"
        className="nav-link"
      >
        <DevPackLogo width="100px" height="100px" />
      </Link>
    </nav>
  );
};

export default Nav;
