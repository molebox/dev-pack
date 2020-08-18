const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// When doing a signed upload, you'll use a function like this
exports.handler = async (event) => {
  const { public_id } = JSON.parse(event.body);
  const res = await cloudinary.uploader.destroy(public_id);
  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};