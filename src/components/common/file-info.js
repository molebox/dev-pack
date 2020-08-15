/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Label from './../home/signup/label';
import LabelText from './label-text';
import Input from './../home/signup/input';
import Emoji from './emoji';
import { DevCardDispatchContext, DevCardStateContext } from '../../context/devcard-context';
import AuthService from './../hub/dev-card/auth-service';

const FileInfo = ({ loadBtn }) => {
  const dispatch = React.useContext(DevCardDispatchContext);
  const state = React.useContext(DevCardStateContext);

  // const handleOnNameChange = (e) => {
  //   dispatch({ type: 'cloudinaryFolderName', payload: e.target.value });
  // };

  return (
    <aside
      sx={{
        gridArea: 'fileInfo',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        ml: 3,
        maxWidth: 600,
        width: '100%',
        p: 3,
      }}
    >
      <h2
        sx={{
          fontFamily: 'heading',
          color: 'text',
          fontWeight: 400,
          fontSize: [2],
        }}
      >
        Pick your profile images <Emoji ariaLabel="A camera" symbol="📸" />
      </h2>
      <h2
        sx={{
          fontFamily: 'heading',
          color: 'text',
          fontWeight: 400,
          fontSize: [2],
        }}
      >
        Automatically saved in the cloud <Emoji ariaLabel="A floppy disk" symbol="💾" />
      </h2>
      <h2
        sx={{
          fontFamily: 'heading',
          color: 'text',
          fontWeight: 400,
          fontSize: [2],
        }}
      >
        Edit your content <Emoji ariaLabel="A hand writing" symbol="✍🏽" />
      </h2>
      <h2
        sx={{
          fontFamily: 'heading',
          color: 'text',
          fontWeight: 400,
          fontSize: [2],
        }}
      >
        Push to production <Emoji ariaLabel="A hand writing" symbol="🚚" />
      </h2>
      {/* <div
        sx={{
          display: 'flex',
          my: 3,
        }}
      >
        {loadBtn}
      </div> */}
      {/* <Label>
        <LabelText>Manually set folder name (optional)</LabelText>
        <Input
          type="text"
          name="cloudinaryFolderName"
          handleChange={handleOnNameChange}
          value={state.cloudinaryFolderName}
          ariaLabel="Folder name"
          placeholder="Folder name..."
        />
      </Label> */}
      <Label>
        <LabelText>Images Info</LabelText>
        <div
          sx={{
            display: 'flex',
          }}
        >
          <p
            sx={{
              fontFamily: 'heading',
            }}
          >
            {state.acceptedProfileFiles.length || state.selectedProfileImage
              ? 'Selected profile image:'
              : 'No profile image selected...'}
          </p>
          {state.acceptedProfileFiles.length ? (
            <div
              sx={{
                display: 'flex',
              }}
            >
              <p sx={{ fontFamily: 'heading', ml: 4 }}>
                {state.acceptedProfileFiles.length ? state.acceptedProfileFiles[0].path : null}
              </p>
            </div>
          ) : state.selectedProfileImage !== '' ? (
            <div
              sx={{
                display: 'flex',
              }}
            >
              <p sx={{ fontFamily: 'heading', ml: 3 }}>{state.selectedProfileImage.split('/').pop()}</p>
            </div>
          ) : null}
        </div>
        <div
          sx={{
            display: 'flex',
          }}
        >
          <p
            sx={{
              fontFamily: 'heading',
            }}
          >
            {state.acceptedCoverFiles.length || state.selectedCoverImage
              ? 'Selected cover image:'
              : 'No cover image selected...'}
          </p>
          {state.acceptedCoverFiles.length ? (
            <div
              sx={{
                display: 'flex',
              }}
            >
              <p sx={{ fontFamily: 'heading', ml: 4 }}>
                {state.acceptedCoverFiles.length ? state.acceptedCoverFiles[0].path : null}
              </p>
            </div>
          ) : state.selectedCoverImage !== '' ? (
            <div
              sx={{
                display: 'flex',
              }}
            >
              <p sx={{ fontFamily: 'heading', ml: 4 }}>{state.selectedCoverImage.split('/').pop()}</p>
            </div>
          ) : null}
        </div>
      </Label>
    </aside>
  );
};

export default FileInfo;
