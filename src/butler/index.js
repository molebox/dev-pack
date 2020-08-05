import styled from '@emotion/styled';
import { gql } from '@apollo/client';

export const linearGradient = `linear-gradient(90deg, rgba(98,70,234,1) 9%, rgba(209,209,233,1) 28%, rgba(224,62,62,1) 60%, rgba(98,70,234,1) 100%);`;
export const APP_ID = process.env.GATSBY_ONEGRAPH_APP_ID;

export const FunkyText = styled.span`
  background-image: ${linearGradient}
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `;

/**
 * Function takes in a Date object and returns the day of the week in a text format.
 */
export function getWeekDay(date) {
  //Create an array containing each day, starting with Sunday.
  var weekdays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  //Use the getDay() method to get the day.
  var day = date.getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}

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
      updateAuthenticatedUser_oneGraph(input: { name: $name, location: $location, email: $email, description: $bio }) {
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
          # Use this reference when posting
          # a tweet with an image, or updating
          # a banner image, etc.
          mediaId
        }
      }
    }
  }
`;

export const UPDATE_TWITTER_PROFILE_IMAGE = gql`
  mutation UpdateTwitterProfileImage($mediaId: String!) {
    twitter {
      makeRestCall {
        post(path: "/1.1/account/update_profile_image.json", query: [["media_id", $mediaId]]) {
          jsonBody
          response {
            statusCode
          }
        }
      }
    }
  }
`;
