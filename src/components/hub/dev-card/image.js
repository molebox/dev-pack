import { useImage } from 'use-cloudinary';
// Basic Image component
function Image({ publicId, transformations, width, height, alt }) {
  const { generateUrl, url, isLoading, isError, error } = useImage({ cloudName: 'testing-hooks-upload' });
  React.useEffect(() => {
    // the `generateUrl` function will hook internally to the SDK and do a lot of the heavy lifting for generating your image url
    generateUrl({
      publicId,
      transformations: {
        // by supplying height and width separately from the transformations object,
        // we can use the height and width to dictate the size of the element AND the transformations
        height,
        width,
        // then we can spread the rest of the transformations in
        ...transformations,
        /* 
          you'll also be getting these automatically attached from internals
          fetchFormat: 'auto',
          quality: 'auto',
          crop: 'scale'
        */
      },
    });
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <img
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
      src={url}
      alt={alt}
    />
  );
}
// Image w/ Lazy-load + placeholder
function LazyImage({ publicId, transformations, width, height, cloudName }) {
  const { generateUrl, blurredPlaceholderUrl, url, isError, error, ref, supportsLazyLoading, inView } = useImage({
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
    >
      {inView || supportsLazyLoading ? (
        <img
          src={url}
          loading="lazy"
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          alt="Lazy loaded"
        />
      ) : null}
    </div>
  );
}

export default { Image, LazyImage };
