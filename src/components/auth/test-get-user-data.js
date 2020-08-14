import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { APP_ID } from '../../butler';
import { OneGraphAuth } from 'onegraph-auth';

const GET_TWITTER_GITHUB_PROFILE_QUERY_QUERY = gql`
  query GetTwitterGithubProfileQuery {
    me {
      twitter {
        name
        description
        location
        screenName
        profileImageUrl
      }
      github {
        email
        websiteUrl
        avatarUrl(size: 300)
      }
    }
  }
`;

const TestGetUserData = () => {
  const auth =
    typeof window !== 'undefined'
      ? new OneGraphAuth({
          appId: APP_ID,
        })
      : null;

  const { data, loading, error, refetch } = useQuery(GET_TWITTER_GITHUB_PROFILE_QUERY_QUERY);

  if (loading) return <pre>Loading</pre>;
  const dataEl = data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null;

  const errorEl = error ? (
    <div className="error-box">
      Error in GetTwitterGithubProfileQuery.
      <br />
      {error.message && error.message.startsWith('Network') ? (
        <span>
          Make sure <strong>{window.location.origin}</strong> is in your CORS origins on the OneGraph dashboard.
        </span>
      ) : null}
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  ) : null;

  const needsLoginService = auth.findMissingAuthServices(error)[0];

  return (
    <div>
      {dataEl}
      {errorEl}
      <br />
      <button
        onClick={async () => {
          if (!needsLoginService) {
            refetch();
          } else {
            await auth.login(needsLoginService);
            const loginSuccess = await auth.isLoggedIn(needsLoginService);
            if (loginSuccess) {
              console.log('Successfully logged into ' + needsLoginService);
              refetch();
            } else {
              console.log('The user did not grant auth to ' + needsLoginService);
            }
          }
        }}
      >
        {needsLoginService ? 'Log in to ' + needsLoginService : 'Run query: GetTwitterGithubProfileQuery'}
      </button>
    </div>
  );
};

export default TestGetUserData;
