const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = (event) => {
  const { public_id, file, tags, eager, type = 'auto', size } = JSON.parse(event.body);

  async function chooseUpload() {
    function formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return [parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), sizes[i]];
    }

    if (formatBytes(size)[0] > 100 && formatBytes(size)[1] === 'MB') {
      await cloudinary.uploader.upload_large(file, {
        public_id,
        resource_type: type,
        tags,
        eager,
      });
    } else {
      await cloudinary.uploader.upload(file, {
        public_id,
        resource_type: type,
        tags,
        eager,
      });
    }
  }

  const res = chooseUpload();

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(res),
  };
};
