import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';

const Loading = () => {
  return (
    <Loader
      type="Watch"
      color="#2b2c34"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default Loading;
