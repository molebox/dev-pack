/** @jsx jsx */
import { jsx } from 'theme-ui';

// Created by Travis Avery
function Cloud({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 24 30"
      width={width}
      height={height}
      fill="#2b2c34"
      aria-labelledby="cloudTitle"
      role="img"
      sx={{
        ':hover': {
          fill: 'primary',
        },
      }}
    >
      <title id="cameraTitle">Drop to upload image</title>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M12 9.707V17.5a.5.5 0 11-1 0V9.707l-2.146 2.147a.5.5 0 01-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L12 9.707zM22 11a4 4 0 01-4 4h-.5a.5.5 0 110-1h.5a3 3 0 100-6 .5.5 0 01-.689-.345A4.998 4.998 0 0012.5 4a4.99 4.99 0 00-4.267 2.405.5.5 0 01-.589.213A1.972 1.972 0 007 6.5a2 2 0 00-2 2 .5.5 0 01-.5.5 2.5 2.5 0 100 5h1a.5.5 0 110 1h-1a3.5 3.5 0 01-.463-6.97A3 3 0 017 5.5c.197 0 .392.022.588.065A5.985 5.985 0 0112.5 3a5.998 5.998 0 015.654 4.003A4 4 0 0122 11z"
      ></path>
    </svg>
  );
}

export default Cloud;
