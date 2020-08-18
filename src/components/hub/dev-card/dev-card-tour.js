/** @jsx jsx */
import { jsx, css } from 'theme-ui';
import TourBox from './../../common/tour-box';
import Loadable from 'react-loadable';

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
    navDotAriaLabel: 'Go to auth service',
  },
  {
    selector: '.authService',
    content: () => (
      <TourBox>
        <p
          sx={{
            fontFamily: 'heading',
            mb: 2,
          }}
        >
          When you first login you will be authenticated with GitHub and Twitter, if one of these auth services hasn't
          authenticated you, check here and auth again.
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
    navDotAriaLabel: 'Go to load data button',
  },
  {
    selector: '.loadDataBtn',
    content: () => (
      <TourBox>
        <p
          sx={{
            fontFamily: 'heading',
            mb: 2,
          }}
        >
          Load your data once you are authorized with the platforms.
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
    navDotAriaLabel: 'Go to image upload',
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
    navDotAriaLabel: 'Go to load saved images',
  },
  {
    selector: '.loadImages',
    content: () => (
      <TourBox>
        <p
          sx={{
            fontFamily: 'heading',
          }}
        >
          If you have previously uploaded an image it has been saved to the cloud for you, from here you can load your
          last 3 saved images.
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
    navDotAriaLabel: 'Go to preview',
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
    navDotAriaLabel: 'Go to form',
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
    navDotAriaLabel: 'Go to platforms',
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
    navDotAriaLabel: 'Go to push button',
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

const DevCardTour = ({ isTourOpen, closeTour }) => {
  return (
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
  );
};

export default DevCardTour;
