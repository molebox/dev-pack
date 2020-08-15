import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';

const Loading = ({ color }) => {
  return (
    <Loader
      type="Watch"
      color={color ? color : '#2b2c34'}
      height={30}
      width={30}
      timeout={3000} //3 secs
    />
  );
};

export default Loading;
