/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import Logo from './svg/logo';
import { useSiteMetadata } from './useSiteMetadata';
import LogoText from './logo-text';

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
        // display: "grid",
        // gridTemplateColumns: '200px 150px 150px 150px 150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 1440,
        margin: '0 auto',
        width: '100%',
        height: '100%',
        placeSelf: 'center',
      }}
    >
      <Link
        sx={{
          textDecoration: 'none',
          fontFamily: 'heading',
          fontSize: ['1.3em', '1.5em', '2em'],
          color: 'text',
          letterSpacing: 'text',
          display: 'flex',
          alignItems: 'center',
        }}
        to="/"
        className="nav-link"
      >
        <Logo width="70px" height="70px" />
        <LogoText>{siteName}</LogoText>
      </Link>
      {/* <button onClick={logout}>Log out</button> */}
      {/* <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "0.9em"],
          color: "text",
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          ":hover": {
            color: "accent"
          }
        }}
        to="/create-pack"
        className="nav-link"
      >
        My Pack
      </Link>
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "0.9em"],
          color: "text",
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          ":hover": {
            color: "accent"
          }
        }}
        to="/create-pack"
        className="nav-link"
      >
        Dev Card
      </Link>
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "0.9em"],
          color: "text",
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          ":hover": {
            color: "accent"
          }
        }}
        to="/create-pack"
        className="nav-link"
      >
        Social
      </Link>
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "0.9em"],
          color: "text",
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          ":hover": {
            color: "accent"
          }
        }}
        to="/create-pack"
        className="nav-link"
      >
        Domains
      </Link>
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "0.9em"],
          color: "text",
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          ":hover": {
            color: "accent"
          }
        }}
        to="/create-pack"
        className="nav-link"
      >
        Media
      </Link>
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "0.9em"],
          color: "text",
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          ":hover": {
            color: "accent"
          }
        }}
        to="/create-pack"
        className="nav-link"
      >
        Resume
      </Link> */}
    </nav>
  );
};

export default Nav;
