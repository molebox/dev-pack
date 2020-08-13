/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { DevCardStateContext } from '../../../context/devcard-context';

const ProfileCard = () => {
  const state = React.useContext(DevCardStateContext);

  const getProfileImage = () => {
    if (state.selectedProfileImage !== '') {
      return state.selectedProfileImage;
    }
    return state.profilePreviewUrl;
  };

  const getCoverImage = () => {
    if (state.selectedCoverImage !== '') {
      return state.selectedCoverImage;
    }
    return state.coverPreviewUrl;
  };

  return (
    <div
      sx={{
        gridArea: 'preview',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        maxWidth: 'auto',
        maxHeight: 700,
        padding: 4,
        backgroundColor: 'background',
      }}
      className="preview"
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
        {getCoverImage() !== '' ? (
          <img
            sx={{
              width: '100%',
              maxHeight: 250,
              height: 'auto',
              border: 'solid 2px',
              borderColor: 'text',
              position: 'absolute',
              backgroundColor: 'secondary',
              objectFit: 'cover',
            }}
            src={getCoverImage()}
            alt={`${state.cloudinaryFolderName !== '' ? state.cloudinaryFolderName : state.name} cover`}
          />
        ) : (
          <div
            sx={{
              width: '100%',
              height: 250,
              border: 'solid 2px',
              borderColor: 'text',
              position: 'absolute',
              backgroundColor: 'secondary',
              objectFit: 'cover',
            }}
          ></div>
        )}

        {getProfileImage() !== '' ? (
          <img
            sx={{
              width: [100, 150],
              height: [100, 150],
              borderRadius: '50%',
              border: 'solid 2px',
              borderColor: 'text',
              position: 'absolute',
              backgroundColor: 'accent',
              alignSelf: 'flex-end',
              bottom: -70,
              left: 10,
            }}
            src={getProfileImage()}
            alt={`${state.cloudinaryFolderName !== '' ? state.cloudinaryFolderName : state.name} profile`}
          />
        ) : (
          <div
            sx={{
              width: [100, 150],
              height: [100, 150],
              borderRadius: '50%',
              border: 'solid 2px',
              borderColor: 'text',
              position: 'absolute',
              backgroundColor: 'accent',
              alignSelf: 'flex-end',
              bottom: -50,
              left: 10,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
