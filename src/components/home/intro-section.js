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
          margin: '3em auto',
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'space-evenly',
          maxWidth: 1440,
          width: '100%',
        }}
      >
        <div>
          <Subtitle>Dev Card</Subtitle>
          <div
            sx={{
              my: 4,
              padding: 2,
              boxShadow: 0,
              border: 'solid 3px',
              maxWidth: [600],
              backgroundColor: 'background',
              margin: '0 auto',
            }}
          >
            <p
              sx={{
                margin: '2em 1em',
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1rem', '1.2rem'],
              }}
            >
              Your Dev Card is your <strong>Hello World</strong> tag that you send out to the world. Think about how
              your profile reads on different social media platforms, <strong>name</strong>, <strong>location</strong>,{' '}
              <strong>website</strong>, <strong>email</strong> and <strong>bio</strong>. Set these in one place and push
              them to your chosen platforms.
            </p>
            <p
              sx={{
                margin: '2em 1em',
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1rem', '1.2rem'],
              }}
            >
              Launch platforms include <strong>Twitter</strong> and <strong>GitHub</strong>. Planned integrations
              include dev.to, LinkedIn, CopePen, Twitch and Stackoverflow.
            </p>

            <p
              sx={{
                margin: '2em 1em',
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1rem', '1.2rem'],
              }}
            >
              Of course your profile is nothing without a cheesy snap of your lovely face. Powered by{' '}
              <strong>Cloudinary</strong>, you can save your profile picture and cover image in the correct formats for
              each platform.
            </p>
            <p
              sx={{
                margin: '2em 1em',
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1rem', '1.2rem'],
              }}
            >
              Having all this information in one place and being able to edit it and be <strong>consistent</strong>{' '}
              across all platforms will increase your social reach and findability.
            </p>
          </div>
        </div>
        <div>
          <Subtitle>Domain Boss</Subtitle>
          <div
            sx={{
              my: 4,
              padding: 2,
              boxShadow: 0,
              border: 'solid 3px',
              maxWidth: 600,
              backgroundColor: 'background',
              margin: '0 auto',
            }}
          >
            <p
              sx={{
                margin: '2em 1em',
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: ['1rem', '1.2rem'],
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
    </section>
  );
};

export default IntroSection;
