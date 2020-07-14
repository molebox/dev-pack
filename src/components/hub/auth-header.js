/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { UserContext } from './../../context/user-context';
import Logout from './logout';

const AuthHeader = () => {
  const { currentUser } = React.useContext(UserContext);
  return (
    <section
      sx={{
        gridArea: 'authHeader',
        display: ['flex', 'grid'],
        gridTemplateColumns: ['1fr 1fr', '1fr auto 1fr'],
        justifyContent: ['space-between', null, null],
        maxWidth: 1440,
        m: [3, '0 auto', '0 auto'],
      }}
    >
      <p
        sx={{
          m: 3,
          fontFamily: 'heading',
          fontWeight: 400,
          fontSize: [2, 4],
        }}
      >
        Welcome {currentUser.displayName}!
      </p>
      <div></div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          justifySelf: 'flex-end',
          width: 100,
          height: 'min-content',
          alignSelf: 'center',
          m: 3,
        }}
      >
        <Logout />
      </div>
    </section>
  );
};

export default AuthHeader;
