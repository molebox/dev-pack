/** @jsx jsx */
import { jsx } from 'theme-ui';
import Subtitle from '../common/subtitle';

const IntroSection = () => {
  return (
    <section
      sx={{
        backgroundColor: 'accent',
        minHeight: 700,
        width: '100vw',
        marginTop: '10em',
        position: 'relative',
      }}
    >
      <div
        sx={{
          m: 6,
          textAlign: 'center',
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
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: 15,
          }}
        >
          <Subtitle>Dev Card</Subtitle>
          <div
            sx={{
              my: 4,
              padding: 2,
              boxShadow: 0,
              border: 'solid 3px',
              maxWidth: 700,
              backgroundColor: 'background',
              minHeight: 250,
            }}
          >
            <p
              sx={{
                m: 3,
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: [1, 2],
              }}
            >
              Your Dev Card is your <strong>Hello World</strong> tag that you send out to the world. Think about how
              your profile reads on different social media platforms, <strong>name</strong>, <strong>location</strong>,{' '}
              <strong>website</strong>, <strong>email</strong> and <strong>bio</strong>. Set these in one place and push
              them to your chosen platforms.
            </p>

            <p
              sx={{
                m: 3,
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: [1, 2],
              }}
            >
              Of course your profile is nothing without a cheesy snap of your lovely face. Powered by{' '}
              <strong>Cloudinary</strong>, you can save your profile picture and cover image in the correct formats for
              each platform.
            </p>
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: 15,
          }}
        >
          <Subtitle>Domain</Subtitle>
          <div
            sx={{
              my: 4,
              padding: 2,
              boxShadow: 0,
              border: 'solid 3px',
              maxWidth: 600,
              backgroundColor: 'background',
              minHeight: 250,
            }}
          >
            <p
              sx={{
                m: 3,
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: [1, 2],
              }}
            >
              You're a dev right? You <strong>love</strong> buying domains! <strong>Search</strong> for the perfect
              domain for that dream project, then <strong>buy it</strong>, <strong>sell it</strong> or actually use it
              and make that project! You're the boss of your domains, manage them the way you see fit, all from your dev
              pack.
            </p>
          </div>
        </div>
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
          <strong sx={{ color: 'background' }}>GitHub</strong>. Planned integrations include dev.to, LinkedIn, CopePen,
          Twitch and Stackoverflow.
        </h5>
      </div>
    </section>
  );
};

export default IntroSection;
