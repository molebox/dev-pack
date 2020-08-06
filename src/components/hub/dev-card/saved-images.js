/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import LazyImage from './image';
import { useSearch } from 'use-cloudinary';
import Loading from './../../svg/loading';
import Button from '../../common/button';
import Error from '../../svg/error';
export default function SavedImages({ endpoint, folder, getSelectedImage }) {
  console.log({ folder });
  const { search, data, isLoading, isSuccess, isError, error } = useSearch({ endpoint });
  console.log('search data: ', data);

  // OPTION 2: Also included is a few opinionated object configurations to more easily craft search based off of user interaction. This includes publicId search, folder search, and more.
  const customConfigSearch = React.useCallback(() => search({ resourceType: 'image', folder, max_results: 3 }), [
    search,
    folder,
  ]);

  if (isLoading)
    return (
      <div sx={{ gridArea: 'saved', gridColumn: 2, textAlign: 'center', height: 200 }}>
        <Loading />
      </div>
    );
  if (isError)
    return (
      <div sx={{ gridArea: 'saved', textAlign: 'center', height: 200, gridColumn: 2 }}>
        <Error width="90px" height="90px" />
        <p
          sx={{
            fontFamily: 'heading',
          }}
        >
          {error.message}
        </p>
      </div>
    );

  if (folder !== '' && isSuccess) {
    return (
      <div
        sx={{
          gridArea: 'saved',
          gridColumn: 2,
          textAlign: 'center',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 400,
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
              .filter((image) => image.folder === folder)
              .slice(0, 3)
              .map((image) => {
                return (
                  <LazyImage
                    key={image.etag}
                    publicId={image.public_id}
                    width={100}
                    height={100}
                    transforms={{ height: 0.2, border: '2px_solid_black' }}
                    cloudName="devpack-dev"
                    secure_url={image.secure_url}
                    getSelectedImage={getSelectedImage}
                  />
                );
              })}
        </div>
        <div
          sx={{
            height: 30,
          }}
        >
          <Button text="Load Saved Images" onClick={() => customConfigSearch()} />
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
        gridArea: 'saved',
        gridColumn: 2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        m: 6,

        height: 30,
        maxWidth: 400,
      }}
    >
      <Button text="Load Images" onClick={() => customConfigSearch()} />
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
