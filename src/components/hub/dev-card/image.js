/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useImage } from 'use-cloudinary';
import { DevCardDispatchContext } from '../../../context/devcard-context';

// Image w/ Lazy-load + placeholder
function LazyImage({ publicId, transformations, width, height, cloudName, secure_url, isProfile }) {
  const { generateUrl, blurredPlaceholderUrl, isError, error, ref, supportsLazyLoading, inView, isSuccess } = useImage({
    cloudName,
  });
  const dispatch = React.useContext(DevCardDispatchContext);
  React.useEffect(() => {
    generateUrl({
      publicId,
      transformations: {
        width,
        height,
        ...transformations,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isError) return <p>{error.message}</p>;
  return (
    <div
      ref={!supportsLazyLoading ? ref : undefined}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `no-repeat url(${blurredPlaceholderUrl(publicId, width, height)})`,
      }}
      sx={{
        cursor: 'pointer',
        outline: 'none',
      }}
      role="button"
      tabIndex="0"
      // aria-pressed="false"
      onKeyPress={() =>
        dispatch({ type: isProfile ? 'selectedProfileImage' : 'selectedCoverImage', payload: secure_url })
      }
      onClick={() => dispatch({ type: isProfile ? 'selectedProfileImage' : 'selectedCoverImage', payload: secure_url })}
    >
      {inView || (supportsLazyLoading && isSuccess) ? (
        <img
          src={secure_url}
          loading="lazy"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            border: 'solid 2px',
          }}
          alt="Lazy loaded profile"
        />
      ) : null}
    </div>
  );
}

export default LazyImage;
