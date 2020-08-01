/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useUpload } from 'use-cloudinary';
import Loading from './../svg/loading';
import Error from './../svg/error';

const ProfileUpload = ({ userName, getBase64Image }) => {
  const { upload, data, isLoading, isError, error } = useUpload({ endpoint: '/.netlify/functions/upload' });

  const onDrop = React.useCallback((acceptedFiles) => {
    console.log('Dropped File: ', acceptedFiles);
    console.log('username: ', userName.replace(/\s/g, ''));
    const publicId = `${userName.replace(/\s/g, '')}/${acceptedFiles[0].path}`;
    console.log({ publicId });

    const pushBase64Image = (res) => getBase64Image(res);

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
      pushBase64Image(res);

      console.log({ userName });

      return upload({
        // We pass the whole base64 string including the data:image tag
        file: res,
        uploadOptions: {
          // Get rid of the spaces in the name and attach the file path, giving the user its own folder with their name and their image inside
          public_id: publicId,
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

  // React.useEffect(() => {
  //   if (data && data.url) {
  //     getUploadedProfileImage(data.url);
  //   }
  // }, [data]);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png, image/PNG',
  });

  if (isLoading)
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
          <div
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
            <em
              sx={{
                fontFamily: 'heading',
                fontSize: [0],
                my: 2,
                fontWeight: 700,
              }}
            >
              The GitHub API doesn't allow you to update your profile picture
            </em>
          </div>
        </div>
        {data ? (
          <>
            {data.url && (
              <div
                sx={{
                  mt: 5,
                }}
              >
                <img src={data.url} width="200" height="200" />
              </div>
            )}
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
          </>
        ) : null}

        {isError ? (
          <div>
            <Error width="150px" height="150px" />
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

export default ProfileUpload;
