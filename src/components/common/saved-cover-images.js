/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Button from './button';
import LazyImage from '../hub/dev-card/image';
import Error from '../svg/error';
import Loading from '../svg/loading';
import { useSearch } from 'use-cloudinary';
import { DevCardStateContext } from './../../context/devcard-context';

const SavedCoverImages = () => {
  const { search, data, isLoading, isSuccess, isError, error } = useSearch({
    endpoint: '/.netlify/functions/search-cover-image',
  });
  const state = React.useContext(DevCardStateContext);

  const getFolder = () => {
    if (state.cloudinaryFolderName !== '') {
      return `${state.cloudinaryFolderName.replace(/\s/g, '')}-cover`;
    }
    return `${state.name.replace(/\s/g, '')}-cover`;
  };

  const customConfigSearch = React.useCallback(
    () => search({ expression: `resource_type:image AND folder=${getFolder()}`, config: {} }),
    [search, getFolder()]
  );

  if (isLoading)
    return (
      <div
        sx={{
          gridArea: 'savedCover',
          display: 'flex',
          height: 'auto',
          border: 'solid 2px',
          p: 3,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'secondary',
          maxWidth: 600,
          width: '100%',
          m: 3,
          justifySelf: 'center',
        }}
      >
        <Loading />
      </div>
    );
  if (isError)
    return (
      <div
        sx={{
          gridArea: 'savedCover',
          display: 'flex',
          height: 'auto',
          border: 'solid 2px',
          p: 3,
          justifyContent: 'flex-end',
          flexDirection: 'column',
          backgroundColor: 'secondary',
          maxWidth: 600,
          width: '100%',
          m: 3,
          justifySelf: 'center',
        }}
      >
        <Error width="90px" height="90px" />
        <p
          sx={{
            fontFamily: 'heading',
            pb: 3,
          }}
        >
          {error.message.includes('Unexpected token') ? 'You have no images saved' : error.message}
        </p>
        <div
          sx={{
            height: 30,
          }}
        >
          <Button text="Load Saved Cover Images" onClick={() => customConfigSearch()} />
        </div>
      </div>
    );

  if (getFolder() !== '' && isSuccess) {
    return (
      <div
        sx={{
          gridArea: 'savedCover',
          display: 'flex',
          height: 'auto',
          border: 'solid 2px',
          p: 3,
          justifyContent: 'flex-end',
          flexDirection: 'column',
          backgroundColor: 'secondary',
          maxWidth: 600,
          width: '100%',
          m: 3,
          justifySelf: 'center',
        }}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            my: 4,
          }}
        >
          {data &&
            data.resources
              .filter((image) => image.folder === getFolder())
              // .slice(0, 3)
              .map((image) => {
                return (
                  <LazyImage
                    isProfile={false}
                    key={image.etag}
                    publicId={image.public_id}
                    width={150}
                    height={80}
                    transforms={{ height: 0.2, border: '2px_solid_black' }}
                    cloudName="devpack-dev"
                    secure_url={image.secure_url}
                  />
                );
              })}
        </div>
        <div
          sx={{
            height: 30,
          }}
        >
          <Button text="Load Saved Cover Images" onClick={() => customConfigSearch()} />
        </div>

        <em
          sx={{
            fontFamily: 'heading',
            fontSize: [0],
            mt: 2,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Your last 3 saves are shown
        </em>
      </div>
    );
  }

  return (
    <div
      sx={{
        gridArea: 'savedCover',
        display: 'flex',
        height: 'auto',
        border: 'solid 2px',
        p: 3,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        backgroundColor: 'secondary',
        maxWidth: 600,
        width: '100%',
        m: 3,
        justifySelf: 'center',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          my: 4,
        }}
      >
        <div
          sx={{
            border: 'solid 2px',
            height: 80,
            width: 150,
            backgroundColor: 'disabled',
          }}
        ></div>
        <div
          sx={{
            border: 'solid 2px',
            height: 80,
            width: 150,
            backgroundColor: 'disabled',
          }}
        ></div>
        <div
          sx={{
            border: 'solid 2px',
            height: 80,
            width: 150,
            backgroundColor: 'disabled',
          }}
        ></div>
      </div>

      <div
        sx={{
          height: 30,
        }}
      >
        <Button text="Load Cover Images" onClick={() => customConfigSearch()} />
      </div>

      <em
        sx={{
          fontFamily: 'heading',
          fontSize: [0],
          mt: 2,
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        Your last 3 saves are shown
      </em>
    </div>
  );
};

export default SavedCoverImages;
