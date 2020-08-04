/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useImage } from 'use-cloudinary';

// Image w/ Lazy-load + placeholder
function LazyImage({ publicId, transformations, width, height, cloudName, secure_url, getSelectedImage }) {
  const {
    generateUrl,
    blurredPlaceholderUrl,
    url,
    isError,
    error,
    ref,
    supportsLazyLoading,
    inView,
    isSuccess,
  } = useImage({
    cloudName,
  });
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
      }}
      onClick={() => getSelectedImage(secure_url)}
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
          alt="Lazy loaded"
        />
      ) : null}
    </div>
  );
}

export default LazyImage;
