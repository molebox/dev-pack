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
      <div sx={{ gridArea: 'saved', textAlign: 'center', height: '100%' }}>
        <Loading />
      </div>
    );
  if (isError)
    return (
      <div sx={{ gridArea: 'saved', textAlign: 'center', height: '100%' }}>
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
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
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
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <p
        sx={{
          fontFamily: 'heading',
          textAlign: 'center',
          mb: 2,
        }}
      >
        Load your previously saved images
      </p>
      <Button text="Load Images" onClick={() => customConfigSearch()} />
    </div>
  );
}
