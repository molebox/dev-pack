/** @jsx jsx */
import { jsx, css } from 'theme-ui';
import React from 'react';
import Logout from './logout';
import { Button } from './../common/button';
import { toast } from 'react-toastify';
import GitHubLogin from '../auth/github-login';
import TwitterLogin from '../auth/twitter-login';
import DevCardTour from './dev-card/dev-card-tour';
toast.configure();

const AuthHeader = ({ userName }) => {
  const [isTourOpen, setIsTourOpen] = React.useState(false);
  const openTour = () => setIsTourOpen(true);
  const closeTour = () => setIsTourOpen(false);
  return (
    <section
      sx={{
        gridArea: 'authHeader',
        display: ['flex', 'grid'],
        flexDirection: ['column', null],
        gridTemplateColumns: ['1fr', 'minmax(300px, 400px) 1fr 400px 200px 200px'],
        justifyContent: ['space-between', null, null],
        // maxWidth: 1440,
        // m: [3, null, null],
        boxShadow: 0,
        border: 'solid 3px',
        backgroundColor: 'background',
        mb: 4,
      }}
      className="authService"
    >
      <DevCardTour isTourOpen={isTourOpen} closeTour={closeTour} />
      <p
        sx={{
          m: 3,
          fontFamily: 'heading',
          fontWeight: 400,
          fontSize: [2, 4],
          textAlign: 'center',
        }}
      >
        Welcome {userName ? userName : 'Stranger'}!
      </p>
      <div></div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          justifySelf: 'center',
          width: '100%',
          height: 'min-content',
          alignSelf: 'center',
        }}
      >
        <GitHubLogin />
        <TwitterLogin />
      </div>

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
        <Button onClick={openTour} text="Tour" />
      </div>
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
