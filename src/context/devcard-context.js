import React from 'react';
import OneGraphAuth from 'onegraph-auth';
import { APP_ID } from '../butler';

export const DevCardStateContext = React.createContext(null);
export const DevCardDispatchContext = React.createContext(null);
export const DevCardAuthContext = React.createContext(null);

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
  isGitHubLoggedIn: false,
  //state shows as false even when logged in.
  isTwitterLoggedIn: false,
  hasGitHubAuth: false,
  hasTwitterAuth: false,
};

// OneGraphAuth uses the window object to display the popup, we need to check it exists due to SSR.
export const oneGraphAuth =
  typeof window !== 'undefined'
    ? new OneGraphAuth({
        appId: APP_ID,
      })
    : {
        authHeaders: () => {},
        appId: APP_ID,
      };

const devCardInfoReducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

const DevCardProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(devCardInfoReducer, initialDevCardInfo);

  return (
    <DevCardDispatchContext.Provider value={dispatch}>
      <DevCardAuthContext.Provider value={oneGraphAuth}>
        <DevCardStateContext.Provider value={state}>{children}</DevCardStateContext.Provider>
      </DevCardAuthContext.Provider>
    </DevCardDispatchContext.Provider>
  );
};

export default DevCardProvider;
