import styled from '@emotion/styled';
import { gql } from '@apollo/client';

export const linearGradient = `linear-gradient(90deg, rgba(98,70,234,1) 9%, rgba(209,209,233,1) 28%, rgba(224,62,62,1) 60%, rgba(98,70,234,1) 100%);`;
export const APP_ID = process.env.GATSBY_ONEGRAPH_APP_ID;
export const NAMECHEAP_SANDBOX_URL = `https://api.sandbox.namecheap.com/xml.response`;
export const NAMECHEAP_PRODUCTION_URL = `https://api.namecheap.com/xml.response`;

export const FunkyText = styled.span`
  background-image: ${linearGradient}
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `;

export const loginAndCheck = async (auth, service) => {
  await auth.login(service);
  const isLoggedIn = await auth.isLoggedIn(service);
  return isLoggedIn;
};

export const userServiceData = ({ loggedInServiceData, service }) => {
  let loggedInServices = loggedInServiceData?.me?.serviceMetadata?.loggedInServices || [];
  return loggedInServices.find((serviceData) => {
    console.log('ServiceData: ', serviceData, service);
    return serviceData.service === service;
  });
};

/**
 * Function takes in a Date object and returns the day of the week in a text format.
 */
export function getWeekDay(date) {
  //Create an array containing each day, starting with Sunday.
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //Use the getDay() method to get the day.
  var day = date.getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}

export const getSelectedImage = (imageUrl, getBase64Image) => {
  // The user has selected a previously saved image from cloudinary so we convert that url back to a base64 string and push it up ready to be set as the new profile picture
  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  toDataURL(imageUrl).then((dataUrl) => {
    getBase64Image(dataUrl);
  });
};

export const LOGGED_IN_SERVICES = gql`
  query AllMyLoggedInServices {
    me {
      serviceMetadata {
        loggedInServices {
          service
          friendlyServiceName
          isLoggedIn
          foreignUserId
          bearerToken
        }
      }
    }
  }
`;

export const UPDATE_TWITTER_USER = gql`
  mutation UpdateTwitterProfile($query: [[String!]!]) {
    twitter {
      makeRestCall {
        post(path: "/1.1/account/update_profile.json", query: $query) {
          jsonBody
          response {
            statusCode
          }
        }
      }
    }
  }
`;

export const UPDATE_GITHUB_USER = gql`
  mutation UpdateGitHubUserProfile($email: String, $bio: String, $location: String, $name: String) {
    gitHub {
      updateAuthenticatedUser_oneGraph(input: { name: $name, location: $location, email: $email, bio: $bio }) {
        updatedUser {
          bio
          name
          email
          location
        }
      }
    }
  }
`;

export const GET_PROFILE_INFO = gql`
  query GetTwitterGithubProfileQuery {
    me {
      twitter {
        name
        description
        location
        screenName
      }
      github {
        email
        websiteUrl
        avatarUrl
      }
    }
  }
`;

export const UPLOAD_TWITTER_MEDIA = gql`
  mutation UploadTwitterMedia($imageData: String!) {
    twitter {
      uploadBase64EncodedMedia(input: { base64EncodedMediaData: $imageData }) {
        mediaResponse {
          expiresAfterSeconds
          size
          mediaId
        }
      }
    }
  }
`;

export const UPDATE_TWITTER_PROFILE_IMAGE = gql`
  mutation UpdateTwitterProfileImage($mediaId: String!) {
    twitter {
      updateProfileImage(input: { mediaId: $mediaId }) {
        mediaResponse {
          user {
            id
            name
          }
        }
      }
    }
  }
`;

export const UPDATE_TWITTER_COVER_IMAGE = gql`
  mutation UpdateProfileBanner($mediaId: String!) {
    twitter {
      updateProfileBanner(input: { mediaId: $mediaId }) {
        # Just select __typename if you don't want the new user
        __typename
      }
    }
  }
`;
