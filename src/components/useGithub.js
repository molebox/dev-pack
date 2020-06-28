import React from 'react';

const URL = 'https://api.github.com/';

/**
 * 
 * {
  "name": "monalisa octocat",
  "email": "octocat@github.com",
  "blog": "https://github.com/blog",
  "company": "GitHub",
  "location": "San Francisco",
  "hireable": true,
  "bio": "There once...",
  "twitter_username": "monatheoctocat"
}
 */

//https://developer.github.com/v3/users/#update-the-authenticated-user

const useGithub = (user, { name, email, bio, location }) => {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(null);

  fetch(`${URL}${user}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name,
      email,
      bio,
      location,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log({ data });
      setSuccess(true);
    })
    .catch((error) => setError(true));

  return { success, error };
};

export default useGithub;
