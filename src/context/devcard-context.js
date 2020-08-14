import React from 'react';

export const DevCardStateContext = React.createContext(null);
export const DevCardDispatchContext = React.createContext(null);

const initialDevCardInfo = {
  name: '',
  email: '',
  location: '',
  description: '',
  website: '',
  checkboxTwitter: false,
  checkboxGitHub: false,
  pushContent: false,
  pushProfileImage: false,
  pushCoverImage: false,
  profileMediaId: '',
  coverMediaId: '',
  isFriday: false,
  cloudinaryFolderName: '',
  acceptedProfileFiles: [],
  acceptedCoverFiles: [],
  selectedProfileImage: '',
  selectedCoverImage: '',
  profilePreviewUrl: '',
  coverPreviewUrl: '',
  profileBase64Image: '',
  coverBase64Image: '',
  isLoggedIn: false,
};

const devCardInfoReducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

const DevCardProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(devCardInfoReducer, initialDevCardInfo);

  return (
    <DevCardDispatchContext.Provider value={dispatch}>
      <DevCardStateContext.Provider value={state}>{children}</DevCardStateContext.Provider>
    </DevCardDispatchContext.Provider>
  );
};

export default DevCardProvider;
