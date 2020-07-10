const { twitterConsumerKey, twitterConsumerSecret, twitterAccessToken, twitterAccessSecret } = require('./config');
const Twitter = require('twitter-lite');

let client;

exports.handler = async (event, context, callback) => {
  // stuff is in the body => event.body
  // console.log({event});
  const { twitterName, name, location, description } = JSON.parse(event.body);
  console.log(twitterName, name, location, description);
  let oauth_token;
  let oauth_token_secret;

  if (!client) {
    // Create the client
    client = new Twitter({
      consumer_key: twitterConsumerKey, // twitter
      consumer_secret: twitterConsumerSecret, // twitter
    });

    await client
      .getRequestToken('https://serve.onegraph.com/oauth/twitter/receive')
      .then((res) => {
        oauth_token = res.oauth_token;
        oauth_token_secret = res.oauth_token_secret;

        console.log({
          reqTkn: res.oauth_token,
          reqTknSecret: res.oauth_token_secret,
        });
      })
      .catch(console.error);

    //  Create the user client
    client = new Twitter({
      consumer_key: twitterConsumerKey, // twitter
      consumer_secret: twitterConsumerSecret, // twitter
      access_token_key: oauth_token, // user
      access_token_secret: oauth_token_secret, // user
    });

    try {
      const uploadResponse = await client.post(
        `https://api.twitter.com/1.1/account/update_profile.json?name=${twitterName}`,
        {
          name: name ? name : null,
          location: location ? location : null,
          description: description ? description : null,
        }
      );
      const response = uploadResponse.json();
      console.log('RESPONSE: ', response);
      return {
        statusCode: 200,
        body: response,
      };
    } catch (e) {
      if ('errors' in e) {
        // Twitter API error
        if (e.errors[0].code === 88)
          // rate limit exceeded
          console.log('Rate limit will reset on', new Date(e._headers.get('x-rate-limit-reset') * 1000));
        // some other kind of error, e.g. read-only API trying to POST
        else console.log('API Error: ', e.errors);
        return {
          statusCode: 500,
          body: JSON.stringify(e),
        };
      } else {
        // non-API error, e.g. network problem or invalid JSON in response
        console.log('Non API Error: ', e._headers);
        return {
          statusCode: 500,
          body: JSON.stringify(e),
        };
      }
    }
  }

  // const response = {
  //     statusCode: 200,
  //     body: JSON.stringify(updateProfile)
  //   };
  //  return callback(undefined, response);
};
