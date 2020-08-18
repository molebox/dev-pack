/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Button from '../../../common/button';
import LazyImage from './image';
import Error from '../../../svg/error';
import Loading from '../../../svg/loading';
import { useSearch } from 'use-cloudinary';
import { DevCardStateContext } from '../../../../context/devcard-context';

const SavedProfileImages = () => {
  const { search, data, isLoading, isSuccess, isError, error } = useSearch({
    endpoint: '/.netlify/functions/search-profile-image',
  });
  const state = React.useContext(DevCardStateContext);

  let folder = `${state.name.replace(/\s/g, '')}-profile`;

  const customConfigSearch = React.useCallback(
    () => search({ expression: `resource_type:image AND folder=${folder}`, config: {} }),
    [search, folder]
  );

  if (isLoading)
    return (
      <div
        sx={{
          gridArea: 'savedProfile',
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
          gridArea: 'savedProfile',
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

  if (state.name.replace(/\s/g, '') !== '' && isSuccess) {
    return (
      <div
        sx={{
          gridArea: 'savedProfile',
          display: 'flex',
          height: 'auto',
          border: 'solid 2px',
          p: 3,
          justifyContent: 'center',
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
              // .filter((image) => image.folder === getFolder())
              // .slice(0, 3)
              .map((image) => {
                return (
                  <LazyImage
                    isProfile={true}
                    key={image.etag}
                    publicId={image.public_id}
                    width={100}
                    height={100}
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
          <Button text="Load Saved Profile Images" onClick={() => customConfigSearch()} />
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
        gridArea: 'savedProfile',
        display: 'flex',
        height: 'auto',
        border: 'solid 2px',
        p: 3,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        backgroundColor: 'secondary',
        maxWidth: 500,
        width: '100%',
        m: 3,
        justifySelf: 'center',
      }}
      className="loadImages"
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
            height: 100,
            width: 100,
            backgroundColor: 'disabled',
          }}
        ></div>
        <div
          sx={{
            border: 'solid 2px',
            height: 100,
            width: 100,
            backgroundColor: 'disabled',
          }}
        ></div>
        <div
          sx={{
            border: 'solid 2px',
            height: 100,
            width: 100,
            backgroundColor: 'disabled',
          }}
        ></div>
      </div>
      <div
        sx={{
          height: 30,
        }}
      >
        <Button text="Load Profile Images" onClick={() => customConfigSearch()} />
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

export default SavedProfileImages;
