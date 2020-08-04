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
  const [selectedImage, setSelectedImage] = React.useState('');

  const getSelectedImage = (imageUrl) => {
    console.log({ imageUrl });
    setSelectedImage(imageUrl);
  };

  const onDrop = (acceptedFiles) => {
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
    accept: 'image/jpeg, image/jpg, image/png, image/PNG',
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
        // gridTemplateAreas: `
        // 'dropzone preview'
        // 'fileInfo saved'
        // 'input saved'
        // `,
        gridTemplateAreas: `
        'dropzone dropzone'
        'preview saved'
        'input fileInfo'
        '. .'
        `,
        gridTemplateColumns: '400px 350px',
        // gridTemplateRows: 'minmax(200px, auto) auto',
        gridAutoRows: 'auto',
        justifyContent: 'space-evenly',
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
          width: '100%',
          height: 200,
          border: 'solid 2px',
          p: 3,
          // alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: 'background',
          flexGrow: 'grow',
          // height: '100%',
          mt: 3,
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
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              textAlign: 'start',
              // border: 'solid 2px',
              // p: 3,
            }}
          >
            <p
              sx={{
                fontFamily: 'heading',
              }}
            >
              Select from one of your previously used images or drop a profile image here, or click to select
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
                (Only *.jpeg, *.jpg or *.png images will be accepted)
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
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          mt: 3,
        }}
      >
        <p sx={{ fontFamily: 'heading', pb: 2 }}>Selected Image</p>
        {data ? (
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
        ) : selectedImage !== '' ? (
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
            <img src={selectedImage} width="150" height="150" />
          </div>
        ) : (
          <div
            sx={{
              border: 'solid 3px',
              width: 154,
              height: 154,
              alignSelf: 'center',
            }}
          ></div>
        )}
      </div>
      <SavedImages
        endpoint="/.netlify/functions/search"
        folder={cloudinaryName ? cloudinaryName : userName.replace(/\s/g, '')}
        getSelectedImage={getSelectedImage}
      />
      <aside
        sx={{
          gridArea: 'fileInfo',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'start',
        }}
      >
        <Label>
          <LabelText>Image Info</LabelText>
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
              {acceptedFiles.length || selectedImage ? 'Selected image:' : 'No image selected...'}
            </p>
            {acceptedFiles.length ? (
              <div
                sx={{
                  display: 'flex',
                }}
              >
                <p sx={{ fontFamily: 'heading', ml: 4 }}>{acceptedFiles.length ? acceptedFiles[0].path : null}</p>
              </div>
            ) : selectedImage !== '' ? (
              <div
                sx={{
                  display: 'flex',
                }}
              >
                <p sx={{ fontFamily: 'heading', ml: 4 }}>{selectedImage.split('/').pop()}</p>
              </div>
            ) : null}
          </div>
        </Label>
      </aside>
      <div
        sx={{
          gridArea: 'input',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
