/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Upload from '../svg/upload';

const ImageDropzone = ({ disabled, onFilesAdded }) => {
  const [highlight, setHighlight] = React.useState(false);
  const fileInputRef = React.createRef();

  const openFileDialog = () => {
    if (disabled) {
      return;
    }
    fileInputRef.current.click();
  };

  const onFileAdded = (evt) => {
    if (disabled) {
      return;
    }
    const files = evt.target.file;
    if (onFilesAdded) {
      const array = fileListToArray(files);
      onFilesAdded(array);
    }
  };

  const onDragOver = (evt) => {
    evt.preventDefault();
    if (disabled) {
      return;
    }
    setHighlight(true);
  };

  const onDragLeave = () => {
    setHighlight(false);
  };

  const onDrop = (event) => {
    event.preventDefault();
    if (disabled) {
      return;
    }

    const files = event.dataTransfer.files;
    if (onFilesAdded) {
      const array = fileListToArray(files);
      onFilesAdded(array);
    }
    setHighlight(false);
  };

  const fileListToArray = (list) => {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };

  return (
    <div
      sx={{
        height: 100,
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: disabled ? 'default' : 'pointer',
        backgroundColor: highlight ? 'accent' : 'background',
        border: 'solid 1px',
        borderRadius: '50%',
        p: 3,
      }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={openFileDialog}
    >
      <input
        sx={{
          opacity: 0,
        }}
        ref={fileInputRef}
        type="file"
        multiple
        onChange={onFileAdded}
      />
      <Upload width="80px" height="80px" />
    </div>
  );
};

export default ImageDropzone;
