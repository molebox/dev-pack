/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import LogoButton from '../common/logo-button';
import GitHub from './../svg/github';
import { DevCardAuthContext, DevCardDispatchContext, DevCardStateContext } from '../../context/devcard-context';

const service = 'github';

const GitHubLogin = () => {
  const dispatch = React.useContext(DevCardDispatchContext);
  const state = React.useContext(DevCardStateContext);
  const auth = React.useContext(DevCardAuthContext);

  const login = async () => {
    try {
      await auth.login(service);
      const isLoggedIn = await auth.isLoggedIn(service);
      isLoggedIn ? dispatch({ type: 'hasGitHubAuth', payload: true }) : console.log('Did not grant auth for GitHub');
    } catch (e) {
      console.error('Problem logging in', e);
    }
  };

  React.useEffect(() => {
    const helper = async () => {
      try {
        const isLoggedIn = await auth.isLoggedIn(service);
        isLoggedIn
          ? dispatch({ type: 'hasGitHubAuth', payload: true })
          : console.log('Not logged into GitHub at time of component mount');
      } catch (e) {
        console.error('Problem checking GitHub login status');
      }
    };

    helper();
  });

  return (
    <LogoButton
      text={state.hasGitHubAuth ? 'Authorized!' : 'Authorize GitHub'}
      icon={<GitHub width="25px" height="25px" />}
      onClick={login}
      disabled={state.hasGitHubAuth ? true : false}
    />
  );
};

export default GitHubLogin;
