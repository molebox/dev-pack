/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import { useSiteMetadata } from './useSiteMetadata';
import Logo from './svg/logo';
import { useWindupString } from 'windups';
import { UserContext } from './../context/user-context';

const Nav = () => {
  const { siteName } = useSiteMetadata();
  const [title] = useWindupString(siteName, {
    pace: (char) => (char === ' ' ? 400 : 40),
  });

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
        justifyContent: ['center', 'center', 'start'],
        alignItems: 'center',
        width: '100vw',
        height: '100%',
        mb: 3,
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
        <Logo width="50px" height="50px" />
        <p
          sx={{
            fontFamily: 'heading',
            color: 'text',
            ml: 3,
            fontSize: [2, 3, 3],
          }}
        >
          {title}
        </p>
      </Link>
    </nav>
  );
};

export default Nav;
