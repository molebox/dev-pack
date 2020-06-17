import React from 'react';

export const UserContext = React.createContext(null);

const initialState = {
  displayName: '',
  email: '',
  photoURL: '',
};

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(initialState);

  const updateUser = ({ displayName, email, photoURL }) => setCurrentUser({ displayName, email, photoURL });

  return <UserContext.Provider value={{ currentUser, updateUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
