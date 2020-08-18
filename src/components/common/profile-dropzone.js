/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useUpload } from 'use-cloudinary';
import Loading from './../svg/loading';
import Error from './../svg/error';
import { DevCardStateContext, DevCardDispatchContext } from './../../context/devcard-context';
import Cloud from '../svg/cloud';

const ProfileDropzone = () => {
  const { upload, data, isLoading, isError, error } = useUpload({ endpoint: '/.netlify/functions/upload' });
  const state = React.useContext(DevCardStateContext);
  const dispatch = React.useContext(DevCardDispatchContext);

  React.useEffect(() => {
    console.log('username: ', state.name);
  }, []);

  React.useEffect(() => {
    if (data && data.url) dispatch({ type: 'profilePreviewUrl', payload: data.url });
  }, [data]);

  const onDrop = (acceptedFiles) => {
    // Turn the blob into base64 to feed into the upload
    const blobToBase64 = (blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    };

    blobToBase64(acceptedFiles[0]).then((res) => {
      const name = state.cloudinaryFolderName ? state.cloudinaryFolderName : state.name;
      console.log({ name });
      dispatch({ type: 'profileBase64Image', payload: res });
      dispatch({ type: 'acceptedProfileFiles', payload: acceptedFiles[0] });
      return upload({
        // We pass the whole base64 string including the data:image tag
        file: res,
        uploadOptions: {
          // Get rid of the spaces in the name and attach the file path, giving the user its own folder with their name and their image inside
          public_id: `${name.replace(/\s/g, '')}-profile/${acceptedFiles[0].path}`,
          tags: [],
          eager: [
            {
              width: 400,
              height: 400,
              crop: 'fill',
            },
          ],
        },
      });
    });
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/jpg, image/png, image/PNG',
  });

  if (isLoading)
    return (
      <div
        sx={{
          gridArea: 'profileDropzone',
          display: 'flex',
          height: 'auto',
          minHeight: 240,
          border: 'solid 2px',
          p: 3,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'secondary',
          maxWidth: 800,
          width: '100%',
        }}
      >
        <Loading />
      </div>
    );

  return (
    <div
      sx={{
        gridArea: 'profileDropzone',
        display: 'flex',
        height: 'auto',
        border: 'solid 2px',
        p: 3,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: `${state.name === '' ? 'disabled' : 'secondary'}`,
        maxWidth: 600,
        maxHeight: 250,
        width: '100%',
        justifySelf: 'center',
        m: 3,
        cursor: `${state.name === '' ? 'default' : 'pointer'}`,
      }}
      {...getRootProps()}
      className="imageUpload"
    >
      <input disabled={state.name === '' ? true : false} {...getInputProps()} />
      <>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            textAlign: 'center',
            // border: 'solid 2px',
            p: 3,
          }}
        >
          <Cloud width="80px" height="80px" />
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p
              sx={{
                fontFamily: 'heading',
              }}
            >
              Upload your <strong>PROFILE</strong> image
            </p>
            <em
              sx={{
                fontFamily: 'heading',
                fontSize: [0],
                my: 2,
                fontWeight: 700,
              }}
            >
              (Only *.jpeg, *.jpg or *.png images will be accepted)
            </em>
            {/* <em
              sx={{
                fontFamily: 'heading',
                fontSize: [0],
                my: 2,
                fontWeight: 700,
              }}
            >
              The GitHub API doesn't allow you to update your profile picture
            </em> */}
          </div>
        </div>

        {isError ? (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p
              sx={{
                fontFamily: 'heading',
              }}
            >
              {error.message}
            </p>
          </div>
        ) : null}
      </>
    </div>
  );
};

export default ProfileDropzone;
