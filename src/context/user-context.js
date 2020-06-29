import React from 'react';

export const UserContext = React.createContext(null);

const initialState = {
  handle: '',
  displayName: 'Mystery Person',
  email: '',
  photoURL: '',
  token: '',
  isLoggedIn: false,
};

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(initialState);

  const updateUser = ({ handle, displayName, email, photoURL, token, isLoggedIn }) =>
    setCurrentUser({ handle, displayName, email, photoURL, token, isLoggedIn });

  return <UserContext.Provider value={{ currentUser, updateUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
