/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';

const Layout = ({ children }) => (
  <React.Fragment>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          visibility: hidden;
          scroll-behavior: smooth;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          width: 100%;
          overflow-x: hidden;
        }
      `}
    />
    <div
      sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'background',
      }}
    >
      <Header />
      {children}
    </div>
  </React.Fragment>
);

export default Layout;
