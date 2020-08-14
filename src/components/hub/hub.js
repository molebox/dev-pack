/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../layout';
import 'react-tabs/style/react-tabs.css';
import DevCardHub from './dev-card/dev-card-hub';
import gsap from 'gsap';
import { APP_ID, LOGGED_IN_SERVICES } from '../../butler';
import { OneGraphAuth } from 'onegraph-auth';
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';

toast.configure();

const Hub = () => {
  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
  }, []);
  const { data: loggedInServiceData } = useQuery(LOGGED_IN_SERVICES);

  // let auth =
  //   typeof window !== 'undefined'
  //     ? new OneGraphAuth({
  //         appId: APP_ID,
  //       })
  //     : null;

  // React.useEffect(() => {
  //   if (
  //     loggedInServiceData &&
  //     loggedInServiceData.me.serviceMetadata.loggedInServices.length &&
  //     !loggedInServiceData.me.serviceMetadata.loggedInServices[0].isLoggedIn &&
  //     loggedInServiceData.me.serviceMetadata.loggedInServices[0].service === 'GITHUB'
  //   ) {
  //     console.log('hub - loggedInServiceData - GitHub', loggedInServiceData)
  //     auth
  //       .login('github')
  //       .then(() => {
  //         auth.isLoggedIn('github').then((isLoggedIn) => {
  //           if (isLoggedIn) {
  //             toast.success('Successfully logged in to GitHub ', {
  //               position: toast.POSITION.BOTTOM_CENTER,
  //             });
  //           } else {
  //             toast.error('You did not grant auth for GitHub ', {
  //               position: toast.POSITION.BOTTOM_CENTER,
  //             });
  //           }
  //         });
  //       })
  //       .catch((e) => console.error('Problem logging in', e));
  //   }
  // }, []);

  return (
    <Layout>
      <div
        sx={{
          backgroundColor: 'accent',
          pt: 2,
        }}
      >
        <DevCardHub />
      </div>
      {/* <section
        sx={{
          margin: '0 auto',
        }}
      >
        <div
          sx={{
            maxWidth: 1440,
            margin: '0 auto',
          }}
        >
          <Tabs>
            <TabList>
              <Tab>
                <p sx={{ fontFamily: 'heading' }}>Dev Card</p>
              </Tab>
              {/* <Tab>
                <p sx={{ fontFamily: 'heading' }}>Domains</p>
              </Tab> */}
      {/* </TabList>

            <DevCardHub user={currentUser} />
            <DomainsHub user={currentUser} />
          </Tabs>
        </div>
      </section> */}
    </Layout>
  );
};

export default Hub;
