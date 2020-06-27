import React from 'react';

export const UserContext = React.createContext(null);

const initialState = {
  displayName: 'Mystery Person',
  email: '',
  photoURL: '',
  token: '',
};

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(initialState);

  const updateUser = ({ displayName, email, photoURL, token }) =>
    setCurrentUser({ displayName, email, photoURL, token });

  return <UserContext.Provider value={{ currentUser, updateUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
