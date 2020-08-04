/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useUpload } from 'use-cloudinary';
import Loading from './../svg/loading';
import Error from './../svg/error';
import Label from '../home/signup/label';
import LabelText from './label-text';
import Input from '../home/signup/input';
import Button from './button';
import SavedImages from '../hub/dev-card/saved-images';

const ProfileUpload = ({ userName, getBase64Image }) => {
  const { upload, data, isLoading, isError, error } = useUpload({ endpoint: '/.netlify/functions/upload' });
  const [cloudinaryName, setCloudinaryName] = React.useState('');
  const [file, setFile] = React.useState({});

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    console.log('Dropped File: ', acceptedFiles);
    console.log({ userName });

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

      return upload({
        // We pass the whole base64 string including the data:image tag
        file: res,
        uploadOptions: {
          // Get rid of the spaces in the name and attach the file path, giving the user its own folder with their name and their image inside
          public_id: `${cloudinaryName ? cloudinaryName : userName.replace(/\s/g, '')}/${acceptedFiles[0].path}`,
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

  const handleOnNameChange = (e) => {
    setCloudinaryName(e.target.value);
  };

  return (
    <section
      sx={{
        display: 'grid',
        gridTemplateAreas: `
        'dropzone preview'
        'input saved'
        'input fileInfo'
        `,
        gridTemplateColumns: '400px 350px',
        gridTemplateRows: 'minmax(200px, auto) minmax(50px, auto)',
        justifyContent: 'space-around',
        gap: 1,
        alignItems: 'center',
        my: 3,
        border: 'solid 3px',
        width: '100%',
        height: '100%',
        backgroundColor: 'background',
        margin: '0 auto',
      }}
    >
      <div
        sx={{
          gridArea: 'dropzone',
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: 'background',
          flexGrow: 'grow',
          mt: 3,
          height: '100%',
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
              alignItems: 'start',
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
                alignItems: 'start',
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

          {isError ? (
            <div>
              <Error width="90px" height="90px" />
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

      <div
        sx={{
          gridArea: 'preview',
          width: 350,
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {data ? (
          <>
            <div
              sx={{
                border: 'solid 3px',
                width: 154,
                height: 154,
                alignSelf: 'center',
                justifySelf: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {data.url && <img src={data.url} width="150" height="150" />}
            </div>
          </>
        ) : null}
      </div>
      <SavedImages
        endpoint="/.netlify/functions/search"
        folder={cloudinaryName ? cloudinaryName : userName.replace(/\s/g, '')}
      />

      {/* <div
        sx={{
          gridArea: 'saved',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          sx={{
            width: 80,
            height: 80,
            border: 'solid 2px',
          }}
        ></div>
        <div
          sx={{
            width: 80,
            height: 80,
            border: 'solid 2px',
          }}
        ></div>
        <div
          sx={{
            width: 80,
            height: 80,
            border: 'solid 2px',
          }}
        ></div>
        <div
          sx={{
            width: 80,
            height: 80,
            border: 'solid 2px',
          }}
        ></div>
      </div> */}
      <aside
        sx={{
          gridArea: 'fileInfo',
          display: 'flex',
          justifyContent: 'space-evenly',
          maxWidth: 350,
          mt: 2,
        }}
      >
        <p
          sx={{
            fontFamily: 'heading',
          }}
        >
          File:
        </p>
        <div
          sx={{
            display: 'flex',
          }}
        >
          <p sx={{ fontFamily: 'heading' }}>{file.path}</p>
          <p sx={{ fontFamily: 'heading', ml: 2 }}>{file.size} Bytes</p>
        </div>
      </aside>
      <div
        sx={{
          gridArea: 'input',
          gridRow: 3,
          width: 300,
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'start',
        }}
      >
        <Label>
          <LabelText>Manually set cloudinary folder name</LabelText>
          <Input
            type="text"
            name="cloudinaryFolder"
            handleChange={handleOnNameChange}
            value={cloudinaryName}
            ariaLabel="Folder name"
            placeholder="Folder name..."
          />
        </Label>
      </div>
    </section>
  );
};

export default ProfileUpload;
