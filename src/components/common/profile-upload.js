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
import Cloud from '../svg/cloud';
import Emoji from './emoji';

const ProfileUpload = ({ userName, getBase64Image, currentImage }) => {
  const { upload, data, isLoading, isError, error } = useUpload({ endpoint: '/.netlify/functions/upload' });
  const [cloudinaryName, setCloudinaryName] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState('');

  const pushBase64Image = (res) => getBase64Image(res);

  const getSelectedImage = (imageUrl) => {
    setSelectedImage(imageUrl);

    // The user has selected a previously saved image from cloudinary so we convert that url back to a base64 string and push it up ready to be set as the new profile picture
    const toDataURL = (url) =>
      fetch(url)
        .then((response) => response.blob())
        .then(
          (blob) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            })
        );

    toDataURL(imageUrl).then((dataUrl) => {
      console.log('converted to base64', dataUrl);
      pushBase64Image(dataUrl);
    });
  };

  // const UploadImage = ({ filePath, name, file }) => {
  //   return upload({
  //     // We pass the whole base64 string including the data:image tag
  //     file,
  //     uploadOptions: {
  //       // Get rid of the spaces in the name and attach the file path, giving the user its own folder with their name and their image inside
  //       public_id: `${name.replace(/\s/g, '')}/${filePath}`,
  //       tags: [],
  //       eager: [
  //         {
  //           width: 400,
  //           height: 400,
  //           crop: 'fill',
  //         },
  //       ],
  //     },
  //   });
  // };

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
      const name = cloudinaryName ? cloudinaryName : userName;
      pushBase64Image(res);
      return upload({
        // We pass the whole base64 string including the data:image tag
        file: res,
        uploadOptions: {
          // Get rid of the spaces in the name and attach the file path, giving the user its own folder with their name and their image inside
          public_id: `${name.replace(/\s/g, '')}/${acceptedFiles[0]}`,
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
        'fileInfo preview '
        'dropzone saved'
        '. . '
        `,
        gridTemplateColumns: '1fr 1fr',
        gridAutoRows: 'auto',
        justifyContent: 'space-evenly',
        gap: 3,
        alignItems: 'center',
        m: 3,
        width: '100%',
        height: '100%',
      }}
    >
      <div
        sx={{
          gridArea: 'dropzone',
          display: 'flex',
          height: 'auto',
          border: 'solid 2px',
          p: 3,
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: 'secondary',
          maxWidth: 800,
          width: '100%',
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
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
            {/* <p
              sx={{
                fontFamily: 'heading',
              }}
            >
              Load and select from one of your previously used images or drop a profile image here, or click to select.
              Once you drop a file here it will automatically be uploaded to cloudinary and stored in a folder set as
              your current name.
            </p>
            <p
              sx={{
                fontFamily: 'heading',
                my: 1,
              }}
            >
              You can also choose to set your folder name manually below. If you do this, choose the folder then drop
              the file.
            </p> */}
            <div
              sx={{
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
          // height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gridRow: 1,
        }}
      >
        {data ? (
          <div
            sx={{
              border: 'solid 2px',
              width: 304,
              height: 304,
              alignSelf: 'center',
              justifySelf: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {data.url && <img src={data.url} width="300" height="300" />}
          </div>
        ) : selectedImage !== '' ? (
          <div
            sx={{
              border: 'solid 2px',
              width: 304,
              height: 304,
              alignSelf: 'center',
              justifySelf: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={selectedImage} width="300" height="300" />
          </div>
        ) : (
          <div
            sx={{
              border: 'solid 2px',
              width: 304,
              height: 304,
              alignSelf: 'center',
            }}
          >
            <img src={currentImage} width="300" height="300" />
          </div>
        )}
      </div>

      {userName ? (
        <div
          sx={{
            gridArea: 'saved',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SavedImages
            endpoint="/.netlify/functions/search"
            folder={cloudinaryName ? cloudinaryName : userName.replace(/\s/g, '')}
            getSelectedImage={getSelectedImage}
          />
        </div>
      ) : null}

      <aside
        sx={{
          gridArea: 'fileInfo',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
        }}
      >
        <h2
          sx={{
            fontFamily: 'heading',
            color: 'text',
            fontWeight: 400,
            fontSize: [4],
          }}
        >
          Say cheese! <Emoji ariaLabel="A camera">📸</Emoji>
        </h2>
        <Label>
          <LabelText>Manually set folder name (optional)</LabelText>
          <Input
            type="text"
            name="cloudinaryFolder"
            handleChange={handleOnNameChange}
            value={cloudinaryName}
            ariaLabel="Folder name"
            placeholder="Folder name..."
          />
        </Label>
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
    </section>
  );
};

export default ProfileUpload;
