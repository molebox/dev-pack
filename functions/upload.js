const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload an image with a max of 3 images in a folder
exports.handler = async (event) => {
  const { file } = JSON.parse(event.body);
  const body = JSON.parse(event.body);
  // extract the folder from the public_id
  const folder = body.public_id.split('/')[0];

  // get the images of the folder and sort them by the uploaded date
  const searchRes = await cloudinary.search
    .expression(folder)
    .sort_by('uploaded_at')
    .execute()
    .then((searchResult) => searchResult);

  // if the folder contains 3 images then delete the oldest one
  if (searchRes.resources.length === 3) {
    await cloudinary.uploader.destroy(searchRes.resources[searchRes.resources.length - 1].public_id);
  }

  // upload our new image to the folder
  const res = await cloudinary.uploader.upload(file, { ...JSON.parse(event.body) });
  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};
