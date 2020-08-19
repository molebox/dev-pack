/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../layout';
import 'react-tabs/style/react-tabs.css';
import gsap from 'gsap';
import DevPackTabs from '../home/dev-pack-tabs';
import { DevCardAuthContext } from './../../context/devcard-context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userServiceData, loginAndCheck, LOGGED_IN_SERVICES } from '../../butler';
import { useQuery } from '@apollo/client';

toast.configure();

const Hub = () => {
  const auth = React.useContext(DevCardAuthContext);
  const { data: loggedInServiceData } = useQuery(LOGGED_IN_SERVICES);
  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
  }, []);

  React.useEffect(() => {
    const toastPosition = toast.POSITION.BOTTOM_CENTER;
    const toastSuccess = (message) => {
      toast.success(message, {
        position: toastPosition,
      });
    };

    const toastError = (message) => {
      toast.error(message, {
        position: toastPosition,
      });
    };

    const twitterUserData = userServiceData({ loggedInServiceData, service: 'TWITTER' });
    const gitHubUserData = userServiceData({ loggedInServiceData, service: 'GITHUB' });

    if (!twitterUserData) {
      loginAndCheck(auth, 'twitter')
        .then((isLoggedIn) => {
          isLoggedIn
            ? toastSuccess('Successfully logged in to Twitter ')
            : toastError('You did not grant auth for Twitter ');
        })
        .catch((e) => console.error('Problem logging in', e));
    }
    if (!gitHubUserData) {
      loginAndCheck(auth, 'github')
        .then((isLoggedIn) => {
          isLoggedIn
            ? toastSuccess('Successfully logged in to GitHub ')
            : toastError('You did not grant auth for GitHub ');
        })
        .catch((e) => console.error('Problem logging in', e));
    }
  }, [loggedInServiceData, auth]);

  return (
    <Layout>
      <div
        sx={{
          backgroundColor: 'accent',
          pt: 2,
        }}
      >
        <DevPackTabs />
      </div>
    </Layout>
  );
};

export default Hub;
