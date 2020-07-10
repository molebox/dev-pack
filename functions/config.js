const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  twitterAccessToken: process.env.TWITTER_API_ACCESS_TOKEN,
  twitterAccessSecret: process.env.TWITTER_API_ACCESS_SECRET,
  twitterConsumerKey: process.env.TWITTER_API_CONSUMER_KEY,
  twitterConsumerSecret: process.env.TWITTER_API_CONSUMER_SECRET,
};
