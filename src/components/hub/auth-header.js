/** @jsx jsx */
import { jsx, css } from 'theme-ui';
import React from 'react';
import Logout from './logout';
import { Button } from './../common/button';
import TourBox from './../common/tour-box';
import Loadable from 'react-loadable';
import { useQuery } from '@apollo/client';
import { GET_PROFILE_INFO, APP_ID } from '../../butler';
import OneGraphAuth from 'onegraph-auth';
import { toast } from 'react-toastify';
import { DevCardDispatchContext } from '../../context/devcard-context';

toast.configure();

const Tour = Loadable({
  loader: () => import('reactour'),
  loading: () => null,
});

const steps = [
  {
    selector: '.devCard',
    content: () => (
      <TourBox>
        <p
          sx={{
            fontFamily: 'heading',
            mb: 2,
          }}
        >
          This is your dev card. The initial data is taken from your GitHub and Twitter profiles combined and populated
          for you when you login.
        </p>
        <p
          sx={{
            fontFamily: 'heading',
          }}
        >
          At this stage of development you can update your Twitter and GitHub profiles text based data.
        </p>
      </TourBox>
    ),
    position: 'center',
    // you could do something like:
    // position: [160, 250],
    action: (node) => {
      // by using this, focus trap is temporary disabled
      node.focus();
      console.log('yup, the target element is also focused!');
    },
    style: {
      backgroundColor: '#fffffe',
      border: 'solid 3px',
      width: '400px',
    },
    // Disable interaction for this specific step.
    // Could be enabled passing `true`
    // when `disableInteraction` prop is present in Tour
    stepInteraction: false,
    // Text read to screen reader software for this step's navigation dot
    navDotAriaLabel: 'Go to dev card form',
  },
  {
    selector: '.preview',
    content: () => (
      <TourBox>
        <p
          sx={{
            fontFamily: 'heading',
          }}
        >
          When you upload a new profile or cover image, or you select a previously saved image they will be shown here.
          This is just a mockup for you to get an idea of how they might look together.
        </p>
      </TourBox>
    ),
    position: 'left',
    // you could do something like:
    // position: [160, 250],
    action: (node) => {
      // by using this, focus trap is temporary disabled
      node.focus();
      console.log('yup, the target element is also focused!');
    },
    style: {
      backgroundColor: '#fffffe',
      border: 'solid 3px',
    },
    // Disable interaction for this specific step.
    // Could be enabled passing `true`
    // when `disableInteraction` prop is present in Tour
    stepInteraction: false,
    // Text read to screen reader software for this step's navigation dot
    navDotAriaLabel: 'Go to dev card form',
  },
  {
    selector: '.form',
    content: () => (
      <TourBox>
        <p
          sx={{
            fontFamily: 'heading',
          }}
        >
          You can edit any of the fields. Once you have pushed your changes the same info will be fetched the next time
          you login.
        </p>
      </TourBox>
    ),
    position: 'right',
    // you could do something like:
    // position: [160, 250],
    action: (node) => {
      // by using this, focus trap is temporary disabled
      node.focus();
      console.log('yup, the target element is also focused!');
    },
    style: {
      backgroundColor: '#fffffe',
      border: 'solid 3px',
    },
    // Disable interaction for this specific step.
    // Could be enabled passing `true`
    // when `disableInteraction` prop is present in Tour
    stepInteraction: false,
    // Text read to screen reader software for this step's navigation dot
    navDotAriaLabel: 'Go to push button',
  },
  {
    selector: '.imageUpload',
    content: () => (
      <TourBox>
        <p
          sx={{
            fontFamily: 'heading',
          }}
        >
          You can drag and drop or select a local file to be used as your profile or cover image.
        </p>
      </TourBox>
    ),
    position: 'left',
    // you could do something like:
    // position: [160, 250],
    action: (node) => {
      // by using this, focus trap is temporary disabled
      node.focus();
      console.log('yup, the target element is also focused!');
    },
    style: {
      backgroundColor: '#fffffe',
      border: 'solid 3px',
    },
    // Disable interaction for this specific step.
    // Could be enabled passing `true`
    // when `disableInteraction` prop is present in Tour
    stepInteraction: false,
    // Text read to screen reader software for this step's navigation dot
    navDotAriaLabel: 'Go to dev card form',
  },
  {
    selector: '.platforms',
    content: () => (
      <TourBox>
        <p
          sx={{
            fontFamily: 'heading',
          }}
        >
          Select which platforms you wish to be updated. As you can see, right now you can choose from Twitter and
          GitHub.
        </p>
      </TourBox>
    ),
    position: 'left',
    // you could do something like:
    // position: [160, 250],
    action: (node) => {
      // by using this, focus trap is temporary disabled
      node.focus();
      console.log('yup, the target element is also focused!');
    },
    style: {
      backgroundColor: '#fffffe',
      border: 'solid 3px',
    },
    // Disable interaction for this specific step.
    // Could be enabled passing `true`
    // when `disableInteraction` prop is present in Tour
    stepInteraction: false,
    // Text read to screen reader software for this step's navigation dot
    navDotAriaLabel: 'Go to dev card form',
  },
  {
    selector: '.push',
    content: () => (
      <TourBox>
        <p
          sx={{
            fontFamily: 'heading',
            mb: 3,
          }}
        >
          Once you are happy with your dev card you can push your changes to the selected platforms. You will have to
          select platform(s) for the button to enable.
        </p>
        <p
          sx={{
            fontFamily: 'heading',
            mb: 1,
          }}
        >
          <strong>Coming soon....</strong> Additional platforms to choose from
        </p>
      </TourBox>
    ),
    position: 'right',
    // you could do something like:
    // position: [160, 250],
    action: (node) => {
      // by using this, focus trap is temporary disabled
      node.focus();
      console.log('yup, the target element is also focused!');
    },
    style: {
      backgroundColor: '#fffffe',
      border: 'solid 3px',
    },
    // Disable interaction for this specific step.
    // Could be enabled passing `true`
    // when `disableInteraction` prop is present in Tour
    stepInteraction: false,
  },
];

const AuthHeader = ({ userName, loadBtn }) => {
  const [isTourOpen, setIsTourOpen] = React.useState(false);
  const openTour = () => setIsTourOpen(true);
  const closeTour = () => setIsTourOpen(false);
  const auth =
    typeof window !== 'undefined'
      ? new OneGraphAuth({
          appId: APP_ID,
        })
      : null;

  return (
    <section
      sx={{
        gridArea: 'authHeader',
        display: ['flex', 'grid'],
        flexDirection: ['column', null],
        gridTemplateColumns: ['1fr', 'minmax(300px, 400px) 1fr 200px 200px'],
        justifyContent: ['space-between', null, null],
        // maxWidth: 1440,
        // m: [3, null, null],
        boxShadow: 0,
        border: 'solid 3px',
        backgroundColor: 'background',
        mb: 4,
      }}
    >
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
        accentColor="#E03E3E"
        closeWithMask={true}
        sx={{
          maxWidth: 500,
        }}
        css={css`
          max-width: 500px;
          [data-tour-elem='controls'] {
            justify-content: center;
          }
        `}
      />
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
      {/* <div
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          justifySelf: 'flex-end',
          width: 200,
          height: 'min-content',
          alignSelf: 'center',
          m: 3,
        }}
      >
        {loadBtn}
      </div> */}
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
