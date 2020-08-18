/** @jsx jsx */
import GitHubLogin from './../../auth/github-login';
import TwitterLogin from '../../auth/twitter-login';
import { jsx } from 'theme-ui';

const AuthService = () => {
  return (
    <div
      sx={{
        gridArea: 'authService',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        my: 4,
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'start',
        }}
      >
        <GitHubLogin />
        <TwitterLogin />
      </div>
    </div>
  );
};

export default AuthService;
