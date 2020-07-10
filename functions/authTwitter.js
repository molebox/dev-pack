const { twitterConsumerKey, twitterConsumerSecret, twitterAccessToken, twitterAccessSecret } = require('./config');
const Twitter = require('twitter-lite');
const OneGraphAuth = require('onegraph-auth');
const jwt_decode = require('jwt-decode');

let client;

exports.handler = async (event, context, callback) => {
  let oauth_token;
  let oauth_token_secret;

  const auth = new OneGraphAuth({
    appId: APP_ID,
  });

  if (!client) {
    // Create the client
    client = new Twitter({
      consumer_key: twitterConsumerKey, // twitter
      consumer_secret: twitterConsumerSecret, // twitter
    });
  }

  const twitter = () =>
    client
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

  auth
    .login('twitter')
    .then(() => {
      auth.isLoggedIn('twitter').then((isLoggedIn) => {
        if (isLoggedIn) {
          let jwt = jwt_decode(auth._accessToken.accessToken);
          // Add the users github handle, name and email to the sites context, also add the jwt token
          console.log('JWT: ', jwt, 'AUTH: ', auth);
          console.log(Object.values(jwt)[4].access_token);
          twitter();
        } else {
          console.log('Did not grant auth for Twitter');
        }
      });
    })
    .catch((e) => console.error('Problem logging in', e));

  //     client
  //   .getAccessToken({
  //     oauth_verifier: oauthVerifier,
  //     oauth_token: oauthToken
  //   })
  //   .then(res =>
  //     console.log({
  //       accTkn: res.oauth_token,
  //       accTknSecret: res.oauth_token_secret,
  //       userId: res.user_id,
  //       screenName: res.screen_name
  //     })
  //   )
  //   .catch(console.error);
};
