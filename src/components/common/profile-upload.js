/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useUpload } from 'use-cloudinary';
import Loading from './../svg/loading';

const ProfileUpload = ({ userName, getUploadedProfileImage }) => {
  const { upload, data, isLoading, isError, error } = useUpload({ endpoint: '/.netlify/functions/upload' });

  const onDrop = React.useCallback((acceptedFiles) => {
    console.log('Dropped File: ', acceptedFiles);

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
      console.log('RES: ', res);
      // getUploadedProfileImage(res.split(',')[1])

      return upload({
        // We pass the whole base64 string including the data:image tag
        file: res,
        uploadOptions: {
          // Get rid of the spaces in the name and attach the file path, giving the user its own folder with their name and their image inside
          public_id: `${userName.replace(/\s/g, '')}/${acceptedFiles[0].path}`,
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
  }, []);

  React.useEffect(() => {
    if (data && data.url) {
      getUploadedProfileImage(data.url);
    }
  }, [data]);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png, image/PNG',
  });

  if (isLoading)
    return (
      <div
        sx={{
          my: 3,
        }}
      >
        <Loading />
      </div>
    );

  return (
    <div
      sx={{
        my: 3,
        border: 'solid 3px',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'background',
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            minHeight: 50,
          }}
        >
          <p
            sx={{
              fontFamily: 'heading',
            }}
          >
            Drag 'n' drop a profile image here, or click to select{' '}
          </p>
          <em
            sx={{
              fontFamily: 'heading',
              fontSize: [0],
              my: 2,
              fontWeight: 700,
            }}
          >
            (Only *.jpeg and *.png images will be accepted)
          </em>
        </div>
        {data ? (
          <aside
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              minWidth: 300,
              maxWidth: 500,
            }}
          >
            <h4
              sx={{
                fontFamily: 'heading',
              }}
            >
              File:
            </h4>
            <div
              sx={{
                display: 'flex',
              }}
            >
              <p sx={{ fontFamily: 'heading' }}>{acceptedFiles[0].path}</p>
              <p sx={{ fontFamily: 'heading', ml: 2 }}>{acceptedFiles[0].size} Bytes</p>
            </div>
          </aside>
        ) : null}

        {isError ? <p>{error.message}</p> : null}
      </>
    </div>
  );
};

export default ProfileUpload;
