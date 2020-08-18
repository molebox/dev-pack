/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Twitter from '../svg/twitter';
import LogoButton from '../common/logo-button';
import { DevCardAuthContext, DevCardDispatchContext, DevCardStateContext } from '../../context/devcard-context';

const service = 'twitter';

const TwitterLogin = () => {
  const dispatch = React.useContext(DevCardDispatchContext);
  const state = React.useContext(DevCardStateContext);
  const auth = React.useContext(DevCardAuthContext);

  const login = async () => {
    try {
      await auth.login(service);
      const isLoggedIn = await auth.isLoggedIn(service);
      isLoggedIn ? dispatch({ type: 'hasTwitterAuth', payload: true }) : console.log('Did not grant auth for Twitter');
    } catch (e) {
      console.error('Problem logging in', e);
    }
  };

  React.useEffect(() => {
    const helper = async () => {
      try {
        const isLoggedIn = await auth.isLoggedIn(service);
        isLoggedIn
          ? dispatch({ type: 'hasTwitterAuth', payload: true })
          : console.log('Not logged into Twitter at time of component mount');
      } catch (e) {
        console.error('Problem checking Twitter login status');
      }
    };

    helper();
  }, [auth, dispatch]);

  return (
    <LogoButton
      className="twitter"
      text={state.hasTwitterAuth ? 'Authorized!' : 'Authorize Twitter'}
      icon={<Twitter width="25px" height="25px" />}
      onClick={login}
      disabled={state.hasTwitterAuth ? true : false}
    />
  );
};

export default TwitterLogin;
