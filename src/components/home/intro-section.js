/** @jsx jsx */
import { jsx } from 'theme-ui';
import Subtitle from '../common/subtitle';
import IntroCard from './intro-card';
import IntroCardText from './intro-card-text';
import IntroCardInner from './intro-card-inner';

const IntroSection = () => {
  return (
    <section
      sx={{
        backgroundColor: 'accent',
        minHeight: 700,
        width: '100vw',
        marginTop: '10em',
        position: 'relative',
        clipPath: 'polygon(0 6%, 100% 0%, 100% 100%, 0% 100%)',
      }}
    >
      <div
        sx={{
          m: 6,
          textAlign: 'center',
          pt: 6,
        }}
      >
        <h3
          sx={{
            fontFamily: 'heading',
            color: 'text',
            fontWeight: 500,
            fontSize: [3, 3, 5],
          }}
        >
          The dev pack contains your <strong sx={{ color: 'background' }}>dev card</strong> and{' '}
          <strong sx={{ color: 'background' }}>domain</strong> management hubs. Once authenticated you will be able to
          manage your online presence via a simple form which will push all your changes to your selected social
          platforms.
        </h3>
        <h4
          sx={{
            fontFamily: 'heading',
            color: 'text',
            fontWeight: 500,
            fontSize: [3, 3, 4],
            my: 6,
          }}
        >
          Having all this information in one place and being able to edit it and be{' '}
          <strong sx={{ color: 'background' }}>consistent</strong> across all platforms will increase your social reach
          and findability.
        </h4>
      </div>

      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'space-evenly',
          width: '100%',
          my: 6,
        }}
      >
        <IntroCard>
          <Subtitle>Dev Card</Subtitle>
          <IntroCardInner>
            <IntroCardText>
              Your Dev Card is your <strong>Hello World</strong> tag that you send out to the world. Think about how
              your profile reads on different social media platforms, <strong>name</strong>, <strong>location</strong>,{' '}
              <strong>website</strong>, <strong>email</strong> and <strong>bio</strong>. Set these in one place and push
              them to your chosen platforms.
            </IntroCardText>

            <IntroCardText>
              Of course your profile is nothing without a cheesy snap of your lovely face. Powered by{' '}
              <strong>Cloudinary</strong>, you can save your profile picture and cover image in the correct formats for
              each platform.
            </IntroCardText>
          </IntroCardInner>
        </IntroCard>
        <IntroCard>
          <Subtitle>Domain</Subtitle>
          <IntroCardInner>
            <IntroCardText>
              You're a dev right? You <strong>love</strong> buying domains! <strong>Search</strong> for the perfect
              domain for that dream project, then <strong>buy it</strong>, <strong>sell it</strong> or actually use it
              and make that project! You're the boss of your domains, manage them the way you see fit, all from your dev
              pack.
            </IntroCardText>
          </IntroCardInner>
        </IntroCard>
      </div>
      <div
        sx={{
          mt: '5em',
          mx: 3,
          textAlign: 'center',
        }}
      >
        <h5
          sx={{
            fontFamily: 'heading',
            color: 'text',
            fontWeight: 500,
            fontSize: [3, 3, 5],
          }}
        >
          Launch platforms include <strong sx={{ color: 'background' }}>Twitter</strong> and{' '}
          <strong sx={{ color: 'background' }}>GitHub</strong>. Planned integrations include dev.to, LinkedIn, CodePen,
          Twitch and Stack Overflow.
        </h5>
      </div>
    </section>
  );
};

export default IntroSection;
