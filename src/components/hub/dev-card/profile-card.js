/** @jsx jsx */
import { jsx } from 'theme-ui';
import Camera from '../../svg/camera';

const ProfileCard = ({ name, location, website, bio, profileImage, coverImage }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        maxWidth: 'auto',
        maxHeight: 700,
        padding: 4,
        borderRadius: 5,
        backgroundColor: 'background',
        border: 'solid 3px',
        borderColor: 'text',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: 250,
          height: 'auto',
          marginBottom: 20,
          position: 'relative',
        }}
      >
        <div
          sx={{
            width: '100%',
            minHeight: 250,
            height: 'auto',
            border: 'solid 1px',
            borderColor: 'text',
            position: 'absolute',
            backgroundColor: 'secondary',
          }}
        >
          {/* <div sx={{
                  position: 'absolute',
                  top: [55, '40%'],
                  left: [50, '45%'],
                  cursor: 'pointer'
              }}>
                <Camera width="50px" height="50px"/>
              </div> */}
          {coverImage}
        </div>

        <div
          sx={{
            width: [100, 150],
            height: [100, 150],
            borderRadius: '50%',
            border: 'solid 1px',
            borderColor: 'text',
            position: 'absolute',
            backgroundColor: 'accent',
            alignSelf: 'flex-end',
            bottom: -50,
            left: 10,
          }}
        >
          {profileImage}
        </div>
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginBottom: 20,
          marginTop: 40,
          width: '100%',
        }}
      >
        <p
          sx={{
            fontFamily: 'heading',
            fontWeight: 400,
            color: 'text',
            fontSize: ['1.3em', '1.8em'],
          }}
        >
          {name ? name : 'Mystery Person'}
        </p>
        <p
          sx={{
            fontFamily: 'heading',
            fontWeight: 400,
            color: 'text',
            fontSize: ['1.3em', '1.4em'],
          }}
        >
          {location ? location : null}
        </p>
        <p
          sx={{
            fontFamily: 'heading',
            fontWeight: 400,
            color: 'text',
            fontSize: ['1.3em', '1.4em'],
          }}
        >
          {website ? website : null}
        </p>
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <p
          sx={{
            fontFamily: 'heading',
            fontWeight: 400,
            color: 'text',
            fontSize: ['1em', '1.2em'],
          }}
        >
          {bio ? bio : null}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
