/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useUpload } from 'use-cloudinary';

const ProfileUpload = ({ userName, uploadedImage }) => {
  const { upload, data, isLoading, isError, error } = useUpload({ endpoint: '/.netlify/functions/upload' });
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
  });
  const files = acceptedFiles.map((file) => <li key={file.path}>{file.path}</li>);
  const onDrop = React.useCallback((acceptedFiles) => {
    console.log({ acceptedFiles });
    upload({
      file: acceptedFiles,
      uploadOptions: {
        public_id: `${userName}/${acceptedFiles.name}`,
        responsive_breakpoints: {
          max_width: 400,
          transformation: {
            crop: 'fill',
            gravity: 'face',
          },
        },
      },
    });
  }, []);

  React.useEffect(() => {
    console.log({ data });
    if (data) {
      uploadedImage(data.url);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <>
          <p>Drag 'n' drop some files here, or click to select files</p>
          <em>(Only *.jpeg and *.png images will be accepted)</em>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
          {isError ? <p>{error.message}</p> : null}
        </>
      )}
    </div>
  );
};

export default ProfileUpload;
