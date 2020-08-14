/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Input from '../../home/signup/input';
import TextArea from '../../common/textarea';
import Label from '../../home/signup/label';
import Checkbox from './../../home/social-checkboxes/checkbox';
import { useMutation, useLazyQuery, useQuery } from '@apollo/client';
import Button from '../../common/button';
import Emoji from '../../common/emoji';
import LabelText from './../../common/label-text';
import gsap from 'gsap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OneGraphAuth from 'onegraph-auth';
import {
  APP_ID,
  UPDATE_GITHUB_USER,
  UPDATE_TWITTER_USER,
  GET_PROFILE_INFO,
  UPDATE_TWITTER_PROFILE_IMAGE,
  UPLOAD_TWITTER_MEDIA,
  getWeekDay,
  UPDATE_TWITTER_COVER_IMAGE,
  LOGGED_IN_SERVICES,
} from '../../../butler';
import { PushButton } from './../../common/push-button';
import AuthHeader from './../auth-header';
import FileInfo from '../../common/file-info';
import ProfileCard from './profile-card';
import SavedProfileImages from '../../common/saved-profile-images';
import SavedCoverImages from '../../common/saved-cover-images';
import ProfileDropzone from '../../common/profile-dropzone';
import CoverDropzone from '../../common/cover-dropzone';
import { DevCardAuthContext, DevCardDispatchContext, DevCardStateContext } from '../../../context/devcard-context';
import Loading from '../../svg/loading';
import AuthService from './auth-service';
import TestGetUserData from '../../auth/test-get-user-data';

toast.configure();

const loginAndCheck = async (auth, service) => {
  await auth.login(service);
  const isLoggedIn = await auth.isLoggedIn(service);
  return isLoggedIn;
};

const userServiceData = ({ loggedInServiceData, service }) => {
  let loggedInServices = loggedInServiceData?.me?.serviceMetadata?.loggedInServices || [];
  return loggedInServices.find((serviceData) => {
    console.log('ServiceData: ', serviceData, service);
    return serviceData.service === service;
  });
};

const DevCardHub = () => {
  const [github, { error: githubError, loading: githubUpdateLoading }] = useMutation(UPDATE_GITHUB_USER);
  const [twitter, { loading: twitterUpdateLoading }] = useMutation(UPDATE_TWITTER_USER);
  const [uploadTwitterMedia, { errorTwitterMedia }] = useMutation(UPLOAD_TWITTER_MEDIA);
  const [updateTwitterProfileImage, { errorTwitterProfileImage }] = useMutation(UPDATE_TWITTER_PROFILE_IMAGE);
  const [updateTwitterCoverImage, { errorTwitterCoverImage }] = useMutation(UPDATE_TWITTER_COVER_IMAGE);
  const [getUserDetails, { loading, error, data: userData }] = useLazyQuery(GET_PROFILE_INFO);
  const { data: loggedInServiceData } = useQuery(LOGGED_IN_SERVICES);

  const dispatch = React.useContext(DevCardDispatchContext);
  const state = React.useContext(DevCardStateContext);
  const auth = React.useContext(DevCardAuthContext);

  const needsLoginService = auth.findMissingAuthServices(error)[0];

  React.useEffect(() => {
    console.log({ loggedInServiceData });
    const toastPosition = toast.POSITION.BOTTOM_CENTER;
    const toastSuccess = (message) => {
      toast.success(message, {
        position: toastPosition,
      });
    };

    const toastError = (message) => {
      toast.error(message, {
        position: toastPosition,
      });
    };

    const twitterUserData = userServiceData({ loggedInServiceData, service: 'TWITTER' });
    const gitHubUserData = userServiceData({ loggedInServiceData, service: 'GITHUB' });

    if (!twitterUserData) {
      loginAndCheck(auth, 'twitter')
        .then((isLoggedIn) => {
          isLoggedIn
            ? toastSuccess('Successfully logged in to Twitter ')
            : toastError('You did not grant auth for Twitter ');
        })
        .catch((e) => console.error('Problem logging in', e));
    }
    if (!gitHubUserData) {
      loginAndCheck(auth, 'github')
        .then((isLoggedIn) => {
          isLoggedIn
            ? toastSuccess('Successfully logged in to GitHub ')
            : toastError('You did not grant auth for GitHub ');
        })
        .catch((e) => console.error('Problem logging in', e));
    }
  }, [loggedInServiceData]);

  React.useEffect(() => {
    let date = new Date();
    let today = getWeekDay(date);

    if (today === 'Friday') {
      dispatch({ type: 'isFriday', payload: true });
    }
  }, []);

  // React.useEffect(() => {
  //   auth
  //     .login('twitter')
  //     .then(() => {
  //       auth.isLoggedIn('twitter').then((isLoggedIn) => {
  //         if (isLoggedIn) {
  //           toast.success('Successfully logged in to Twitter ', {
  //             position: toast.POSITION.BOTTOM_CENTER,
  //           });
  //         } else {
  //           toast.error('You did not grant auth for Twitter ', {
  //             position: toast.POSITION.BOTTOM_CENTER,
  //           });
  //         }
  //       });
  //     })
  //     .catch((e) => console.error('Problem logging in', e));
  // }, []);

  // React.useEffect(() => {
  //   if (
  //     loggedInServiceData &&
  //     loggedInServiceData.me.serviceMetadata.loggedInServices.length &&
  //     !loggedInServiceData.me.serviceMetadata.loggedInServices[0].isLoggedIn &&
  //     loggedInServiceData.me.serviceMetadata.loggedInServices[0].service === 'GITHUB'
  //   ) {
  //     console.log('loggedInServiceData - GitHub: ', loggedInServiceData)
  //     auth
  //       .login('github')
  //       .then(() => {
  //         auth.isLoggedIn('github').then((isLoggedIn) => {
  //           if (isLoggedIn) {
  //             toast.success('Successfully logged in to GitHub ', {
  //               position: toast.POSITION.BOTTOM_CENTER,
  //             });
  //           } else {
  //             toast.error('You did not grant auth for GitHub ', {
  //               position: toast.POSITION.BOTTOM_CENTER,
  //             });
  //           }
  //         });
  //       })
  //       .catch((e) => console.error('Problem logging in', e));
  //   }
  // }, []);

  React.useEffect(() => {
    console.log(userData, error, loading);
    if (!error && !loading) {
      if (userData && userData.me) {
        dispatch({ type: 'name', payload: userData.me.twitter.name });
        dispatch({ type: 'email', payload: userData.me.github.email });
        dispatch({ type: 'description', payload: userData.me.twitter.description });
        dispatch({ type: 'location', payload: userData.me.twitter.location });
        dispatch({ type: 'website', payload: userData.me.github.websiteUrl.slice(12) });
      }
    }
  }, [userData, error, loading]);

  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
  }, []);

  const updateGitHub = () => {
    if (githubError) {
      console.log({ githubError });
    }

    return github({
      variables: {
        name: state.name !== '' ? state.name : null,
        location: state.location !== '' ? state.location : null,
        email: state.email !== '' ? state.email : null,
        bio: state.description !== '' ? state.description : null,
      },
    }).then((res) => {
      if (res) {
        toast.success('Updated GitHub profile info!', { position: toast.POSITION.BOTTOM_CENTER });
      }
    });
  };

  const updateTwitterUserProfileImage = (image) => {
    if (image !== '') {
      uploadTwitterMedia({
        variables: {
          imageData: image.split(',')[1],
        },
      })
        .then((res) => {
          dispatch({
            type: 'profileMediaId',
            payload: res.data.twitter.uploadBase64EncodedMedia.mediaResponse.mediaId,
          });
          toast.success('Successfully uploaded Twitter profile media ', {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        })
        .catch((error) => {
          toast.error(`This went wrong uploading the profile image: ${error.message}`, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });

      if (state.profileMediaId !== '') {
        updateTwitterProfileImage({
          variables: {
            mediaId: state.profileMediaId.toString(),
          },
        })
          .then((res) => {
            if (!res.data) {
              toast.error(`Nope, this shit is not working`, { position: toast.POSITION.BOTTOM_CENTER });
            } else {
              toast.success('Successfully updated Twitter profile image ', {
                position: toast.POSITION.BOTTOM_CENTER,
              });
            }
          })
          .catch((error) => {
            toast.error(`This went wrong uploading the initial profile media: ${error.message}`, {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          });
      }
    }
  };

  const updateTwitterUserCoverImage = (image) => {
    if (image !== '') {
      uploadTwitterMedia({
        variables: {
          imageData: image.split(',')[1],
        },
      })
        .then((res) => {
          dispatch({
            type: 'coverMediaId',
            payload: res.data.twitter.uploadBase64EncodedMedia.mediaResponse.mediaId,
          });
          toast.success('Successfully uploaded Twitter cover media ', {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        })
        .catch((error) => {
          toast.error(`This went wrong uploading the cover image: ${error.message}`, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });

      if (state.coverMediaId !== '') {
        updateTwitterCoverImage({
          variables: {
            mediaId: state.coverMediaId.toString(),
          },
        })
          .then((res) => {
            if (!res.data) {
              toast.error(`Nope, this shit is not working`, { position: toast.POSITION.BOTTOM_CENTER });
            } else {
              toast.success('Successfully updated Twitter cover image ', {
                position: toast.POSITION.BOTTOM_CENTER,
              });
            }
          })
          .catch((error) => {
            toast.error(`This went wrong uploading the initial cover media: ${error.message}`, {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          });
      }
    }
  };

  const updateTwitterProfile = () => {
    const query = [
      ['url', state.website],
      ['location', state.location],
      ['description', state.description],
      ['name', state.name],
    ].filter((row) => Boolean(row[1]));
    return twitter({
      variables: {
        query: query,
      },
    }).then((res) => {
      if (res.data.twitter.makeRestCall.post.jsonBody.errors) {
        toast.error("Boo! It didn't work", { position: toast.POSITION.BOTTOM_CENTER });
      } else if (res.data.twitter.makeRestCall.post.response.statusCode === 200) {
        toast.success('Updated profile info!', { position: toast.POSITION.BOTTOM_CENTER });
      }
    });
  };

  const updateInfo = () => {
    const needsLoginService = auth.findMissingAuthServices(
      errorTwitterMedia || errorTwitterProfileImage || errorTwitterCoverImage || githubError
    )[0];
    console.log('update info needLoginService: ', needsLoginService);
    if (state.checkboxGitHub && state.pushContent) {
      console.log('github checked');
      if (!needsLoginService) {
        updateGitHub();
      } else {
        auth.login(needsLoginService);
        const loginSuccess = auth.isLoggedIn(needsLoginService);
        if (loginSuccess) {
          toast.success('Successfully logged into ' + needsLoginService, { position: toast.POSITION.BOTTOM_CENTER });
          updateGitHub();
        }
      }
    }
    if (state.checkboxTwitter) {
      if (!needsLoginService) {
        if (state.pushContent) {
          updateTwitterProfile();
        }
        if (state.pushProfileImage) {
          updateTwitterUserProfileImage(state.profileBase64Image);
        }
        if (state.pushCoverImage) {
          updateTwitterUserCoverImage(state.coverBase64Image);
        }
      }
    } else {
      if (needsLoginService !== undefined) {
        console.log({ needsLoginService });
        auth.login(needsLoginService);
        const loginSuccess = auth.isLoggedIn(needsLoginService);
        if (loginSuccess) {
          toast.success('Successfully logged into ' + needsLoginService, { position: toast.POSITION.BOTTOM_CENTER });
          if (state.pushContent) {
            updateTwitterProfile();
          }
          if (state.pushProfileImage) {
            updateTwitterUserProfileImage(state.profileBase64Image);
          }
          if (state.pushCoverImage) {
            updateTwitterUserCoverImage(state.coverBase64Image);
          }
        }
      }
    }
  };

  const handleOnNameChange = (e) => {
    dispatch({ type: 'name', payload: e.target.value });
  };

  const handleOnEmailChange = (e) => {
    dispatch({ type: 'email', payload: e.target.value });
  };

  const handleOnBioChange = (e) => {
    dispatch({ type: 'description', payload: e.target.value });
  };

  const handleOnLocationChange = (e) => {
    dispatch({ type: 'location', payload: e.target.value });
  };

  const handleOnWebsiteChange = (e) => {
    dispatch({ type: 'website', payload: e.target.value });
  };

  const loadData = () => {
    getUserDetails();
    // if (!needsLoginService) {
    //   console.log('Load data needsLoginService: ', needsLoginService);
    //   getUserDetails();
    // } else {
    //   await auth.login(needsLoginService);
    //   const loginSuccess = await auth.isLoggedIn(needsLoginService);
    //   if (loginSuccess) {
    //     console.log('Successfully logged into ' + needsLoginService);
    //     getUserDetails();
    //   } else {
    //     console.log('You did not grant auth to ' + needsLoginService);
    //   }
    // }
  };

  return (
    <section
      sx={{
        maxWidth: 1440,
        marginBottom: 1,
        backgroundColor: 'accent',
        margin: '0 auto',
        p: 2,
        my: 5,
      }}
      className="devCard"
    >
      <AuthHeader
        auth={auth}
        userName={state.name}
        loadBtn={loading ? <Loading /> : <Button text="Load Profile Data" onClick={() => getUserDetails()} />}
      />
      <div
        sx={{
          backgroundColor: 'background',
          border: 'solid 3px',
          boxShadow: 0,
          display: 'grid',
          gap: 4,
          gridTemplateAreas: [
            `
            'authHeader'
            'fileInfo'
            'profileDropzone'
            'savedProfile'
            'coverDropzone'
            'savedCover'
            'preview'
            'form'
            'checkboxes'
            'push'
            `,
            `
            'authHeader authHeader'
            'fileInfo preview'
            'authService .'
            'profileDropzone savedProfile'
            'coverDropzone savedCover'
            'form checkboxes'
            'form checkboxes'
            'push push'
          `,
          ],
          gridAutoColumns: ['1fr', '1fr 1fr'],
          gridAutoRows: 'auto',
          p: 4,
        }}
      >
        <FileInfo />
        <ProfileCard />
        <SavedProfileImages />
        <SavedCoverImages />
        <ProfileDropzone />
        <CoverDropzone />
        <AuthService />
        {/* <TestGetUserData/> */}
        <div
          sx={{
            gridArea: 'form',
            maxHeight: 700,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 4,
            backgroundColor: 'secondary',
            m: 3,
            border: 'solid 3px',
            maxWidth: 600,
            width: '100%',
            justifySelf: 'center',
          }}
          className="form"
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h2
              sx={{
                fontFamily: 'heading',
                color: 'text',
                fontWeight: 400,
              }}
            >
              Tell the world about yourself...
            </h2>
          </div>

          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <Label forAttribute="name">
              <LabelText>
                What should people call you? <Emoji ariaLabel="Two hands shaking" symbol="🤝🏽" />
              </LabelText>
              <Input
                id="name"
                type="text"
                name="name"
                handleChange={handleOnNameChange}
                value={state.name}
                ariaLabel="Your name"
                placeholder="Your Name..."
              />
            </Label>
            <Label forAttribute="location">
              <LabelText>
                Where do you live? <Emoji ariaLabel="Planet earth" symbol="🌎" />
              </LabelText>
              <Input
                type="text"
                name="location"
                handleChange={handleOnLocationChange}
                value={state.location}
                ariaLabel="Your location"
                placeholder="Your Location..."
                id="location"
              />
            </Label>
            <Label forAttribute="website">
              <LabelText>
                Got a personal site? Drop it here <Emoji ariaLabel="A floppy disk" symbol="💾" />
              </LabelText>
              <Input
                type="text"
                name="website"
                handleChange={handleOnWebsiteChange}
                value={state.website}
                ariaLabel="Your website"
                placeholder="Your Website..."
                id="website"
              />
            </Label>
            <Label forAttribute="email">
              <LabelText>
                Your preferred email <Emoji ariaLabel="Email" symbol="📧" />
              </LabelText>
              <Input
                type="text"
                name="email"
                handleChange={handleOnEmailChange}
                value={state.email}
                ariaLabel="Your email"
                placeholder="Your email..."
                id="email"
              />
            </Label>
          </div>

          <Label forAttribute="description">
            <LabelText>
              Who are you? Be creative, this short blurb could be first contact! <Emoji ariaLabel="A UFO" symbol="🛸" />
            </LabelText>
            <TextArea
              type="text"
              name="description"
              handleChange={handleOnBioChange}
              value={state.description}
              ariaLabel="Your bio"
              placeholder="Your Bio..."
              id="description"
            />
          </Label>
        </div>

        <aside
          sx={{
            gridArea: 'checkboxes',
            height: 'auto',
            display: 'flex',
            flexDirection: ['column'],
            justifyContent: 'space-evenly',
            alignItems: 'center',
            placeSelf: 'center',
            p: 4,
            border: 'solid 2px',
            width: 'max-content',
            backgroundColor: 'secondary',
          }}
          className="platforms"
        >
          <Label>
            <LabelText>Select Items to update</LabelText>
          </Label>

          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              my: 3,
              width: '100%',
            }}
          >
            <Checkbox
              type="Profile image"
              checked={state.pushProfileImage}
              disabled={state.checkboxGitHub}
              onCheckboxChange={() => dispatch({ type: 'pushProfileImage', payload: !state.pushProfileImage })}
            />
            <Checkbox
              type="Cover image"
              checked={state.pushCoverImage}
              disabled={state.checkboxGitHub}
              onCheckboxChange={() => dispatch({ type: 'pushCoverImage', payload: !state.pushCoverImage })}
            />
            <Checkbox
              type="Profile content"
              checked={state.pushContent}
              onCheckboxChange={() => dispatch({ type: 'pushContent', payload: !state.pushContent })}
            />
          </div>
          <Label>
            <LabelText>Select Platform(s) to update</LabelText>
          </Label>

          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              my: 3,
              width: '100%',
            }}
          >
            <Checkbox
              type="GitHub"
              checked={state.checkboxGitHub}
              onCheckboxChange={() => dispatch({ type: 'checkboxGitHub', payload: !state.checkboxGitHub })}
            />
            <Checkbox
              type="Twitter"
              checked={state.checkboxTwitter}
              onCheckboxChange={() => dispatch({ type: 'checkboxTwitter', payload: !state.checkboxTwitter })}
            />

            <Checkbox
              comingSoon
              type="DEV"
              onCheckboxChange={() => dispatch({ type: 'checkboxTwitter', payload: !state.checkboxTwitter })}
              disabled
            />
            <Checkbox
              comingSoon
              type="CodePen"
              onCheckboxChange={() => dispatch({ type: 'checkboxTwitter', payload: !state.checkboxTwitter })}
              disabled
            />
            <Checkbox
              comingSoon
              type="LinkedIn"
              onCheckboxChange={() => dispatch({ type: 'checkboxTwitter', payload: !state.checkboxTwitter })}
              disabled
            />
          </div>
        </aside>

        <aside
          sx={{
            gridArea: 'push',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            m: 3,
          }}
        >
          <PushButton
            className="push"
            loading={githubUpdateLoading || twitterUpdateLoading}
            // disabled={checkboxGithub || checkboxTwitter ? false : true}
            onClick={updateInfo}
            text={`${state.isFriday ? 'Want to push on a friday?' : 'Push to production'}`}
          />
        </aside>
      </div>
    </section>
  );
};

// DevCardHub.tabsRole = 'TabPanel';

export default DevCardHub;
