/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { DevCardStateContext, DevCardDispatchContext } from '../../../context/devcard-context';
import Camera from './../../svg/camera';
import { useDropzone } from 'react-dropzone';
import { useUpload } from 'use-cloudinary';
import Loading from '../../svg/loading';
import Error from '../../svg/error';

const ProfileCard = () => {
  const state = React.useContext(DevCardStateContext);
  const dispatch = React.useContext(DevCardDispatchContext);
  const {
    upload: uploadProfile,
    data: profileData,
    isLoading: profileIsLoading,
    isError: profileHasError,
    error: profileError,
  } = useUpload({ endpoint: '/.netlify/functions/upload-profile' });
  const {
    upload: uploadCover,
    data: coverData,
    isLoading: coverIsLoading,
    isError: coverHasError,
    error: coverError,
  } = useUpload({ endpoint: '/.netlify/functions/upload-cover' });

  React.useEffect(() => {
    if (coverData && coverData.url) dispatch({ type: 'coverPreviewUrl', payload: coverData.url });
  }, [coverData]);

  React.useEffect(() => {
    if (profileData && profileData.url) dispatch({ type: 'profilePreviewUrl', payload: profileData.url });
  }, [profileData]);

  const onProfileDrop = (acceptedFiles) => {
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
      dispatch({ type: 'coverBase64Image', payload: res });
      dispatch({ type: 'acceptedProfileFiles', payload: acceptedFiles[0] });
      return uploadProfile({
        // We pass the whole base64 string including the data:image tag
        file: res,
        uploadOptions: {
          // Get rid of the spaces in the name and attach the file path, giving the user its own folder with their name and their image inside
          public_id: `${name.replace(/\s/g, '')}-cover/${acceptedFiles[0].path}`,
          tags: [],
          eager: [
            {
              width: 1500,
              height: 500,
              crop: 'fill',
            },
          ],
        },
      });
    });
  };

  const onCoverDrop = (acceptedFiles) => {
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
      dispatch({ type: 'coverBase64Image', payload: res });
      dispatch({ type: 'acceptedCoverFiles', payload: acceptedFiles[0] });
      return uploadCover({
        // We pass the whole base64 string including the data:image tag
        file: res,
        uploadOptions: {
          // Get rid of the spaces in the name and attach the file path, giving the user its own folder with their name and their image inside
          public_id: `${name.replace(/\s/g, '')}-cover/${acceptedFiles[0].path}`,
          tags: [],
          eager: [
            {
              width: 1500,
              height: 500,
              crop: 'fill',
            },
          ],
        },
      });
    });
  };

  const { getRootProps: getCoverRootProps, getInputProps: getCoverInputProps } = useDropzone({
    onCoverDrop,
    accept: 'image/jpeg, image/jpg, image/png, image/PNG',
  });

  const { getRootProps: getProfileRootProps, getInputProps: getProfileInputProps } = useDropzone({
    onProfileDrop,
    accept: 'image/jpeg, image/jpg, image/png, image/PNG',
  });

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

  if (coverIsLoading)
    return (
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
      >
        <div
          sx={{
            position: 'relative',
            top: '45%',
            left: '45%',
            height: 50,
            width: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loading />
        </div>
      </div>
    );

  if (profileIsLoading)
    return (
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
      >
        <div
          sx={{
            position: 'relative',
            top: '38%',
            left: '32%',
            height: 50,
            width: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loading />
        </div>
      </div>
    );

  if (coverHasError) {
    return (
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
      >
        <div
          sx={{
            position: 'relative',
            top: '45%',
            left: '45%',
            height: 50,
            width: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Error width="50px" height="50px" />
          <p
            sx={{
              fontFamily: 'heading',
            }}
          >
            {coverError.message}
          </p>
        </div>
      </div>
    );
  }

  if (profileHasError) {
    return (
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
      >
        <div
          sx={{
            position: 'relative',
            top: '38%',
            left: '32%',
            height: 50,
            width: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Error width="50px" height="50px" />
          <p
            sx={{
              fontFamily: 'heading',
            }}
          >
            {profileError.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      sx={{
        gridArea: 'preview',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        width: '100%',
        maxWidth: 700,
        // maxHeight: 700,
        p: 3,
        backgroundColor: 'background',
        justifySelf: 'center',
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
          // marginBottom: 20,
          position: 'relative',
        }}
      >
        {getCoverImage() !== '' ? (
          <>
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
            <div
              sx={{
                position: 'relative',
                top: '0',
                left: '0',
                height: 50,
                width: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
              }}
              {...getCoverRootProps()}
            >
              <input {...getCoverInputProps()} />
              <Camera width="50" height="50" onHover="#E03E3E" color="#fffffe" />
            </div>
          </>
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
          >
            <div
              sx={{
                position: 'relative',
                top: '45%',
                left: '45%',
                height: 50,
                width: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              {...getCoverRootProps()}
            >
              <input {...getCoverInputProps()} />
              <Camera width="50" height="50" color="#E03E3E" />
            </div>
          </div>
        )}

        {getProfileImage() !== '' ? (
          <>
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
                // zIndex: -10000
              }}
              src={getProfileImage()}
              alt={`${state.cloudinaryFolderName !== '' ? state.cloudinaryFolderName : state.name} profile`}
            />
            <div
              sx={{
                position: 'relative',
                top: 125,
                left: -260,
                height: 50,
                width: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              {...getProfileRootProps()}
            >
              <input {...getProfileInputProps()} />
              <Camera width="50" height="50" onHover="#E03E3E" color="#fffffe" />
            </div>
          </>
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
          >
            <div
              sx={{
                position: 'relative',
                top: '38%',
                left: '32%',
                height: 50,
                width: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              {...getProfileRootProps()}
            >
              <input {...getProfileInputProps()} />
              <Camera width="50" height="50" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
