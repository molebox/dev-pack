import React from 'react';

export const UserContext = React.createContext(null);

const initialState = {
  handle: '',
  displayName: '',
  twitterName: '',
  email: '',
  photoURL: '',
  token: '',
  twitterToken: '',
  websiteUrl: '',
  isGithubLoggedIn: false,
  isTwitterLoggedIn: false,
};

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(initialState);

  const updateUser = ({
    handle,
    displayName,
    twitterName,
    email,
    photoURL,
    token,
    twitterToken,
    websiteUrl,
    isGithubLoggedIn,
    isTwitterLoggedIn,
  }) =>
    setCurrentUser({
      handle,
      displayName,
      twitterName,
      email,
      photoURL,
      token,
      twitterToken,
      websiteUrl,
      isGithubLoggedIn,
      isTwitterLoggedIn,
    });

  return <UserContext.Provider value={{ currentUser, updateUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
