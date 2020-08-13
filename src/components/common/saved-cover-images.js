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
          gridColumn: 2,
          textAlign: 'center',
          minHeight: 240,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 400,
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
          gridColumn: 2,
          textAlign: 'center',
          minHeight: 240,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 400,
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
          gridColumn: 2,
          textAlign: 'center',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 500,
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
        gridColumn: 2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        m: 6,
        justifySelf: 'center',
        height: '100%',
      }}
    >
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
        }}
      >
        Your last 3 saves are shown
      </em>
    </div>
  );
};

export default SavedCoverImages;
