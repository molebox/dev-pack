/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import LazyImage from './image';
import { useSearch } from 'use-cloudinary';
import Loading from './../../svg/loading';
import Button from '../../common/button';
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
      <div sx={{ gridArea: 'saved' }}>
        <Loading />
      </div>
    );
  if (isError)
    return (
      <div sx={{ gridArea: 'saved' }}>
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
      <div sx={{ gridArea: 'saved' }}>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            my: 3,
          }}
        >
          {data &&
            data.resources.map((image) => (
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
            ))}
        </div>
        <Button text="Load Saved Images" onClick={() => customConfigSearch()} />
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
        }}
      >
        Load your previously saved images
      </p>
      <Button text="Load Images" onClick={() => customConfigSearch()} />
    </div>
  );
}
