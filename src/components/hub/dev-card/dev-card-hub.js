/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
// import { TabPanel } from 'react-tabs';
// import ProfileCard from './profile-card';
import Input from '../../home/signup/input';
import TextArea from '../../common/textarea';
import Label from '../../home/signup/label';
import Checkbox from './../../home/social-checkboxes/checkbox';
import { useMutation, useQuery } from '@apollo/client';
import Button from '../../common/button';
import Emoji from '../../common/emoji';
import LabelText from './../../common/label-text';
import { UserContext } from './../../../context/user-context';
// import TwitterLogin from '../../auth/twitter-login';
// import DevToLogin from './../../auth/dev-to-login';
// import CodePenLogin from './../../auth/codepen-login';
// import LinkedInLogin from './../../auth/linkedIn-login';
import gsap from 'gsap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileUpload from '../../common/profile-upload';
import OneGraphAuth from 'onegraph-auth';
import {
  APP_ID,
  UPDATE_GITHUB_USER,
  UPDATE_TWITTER_USER,
  GET_PROFILE_INFO,
  UPDATE_TWITTER_PROFILE_IMAGE,
  UPLOAD_TWITTER_MEDIA,
} from '../../../butler';
import jwt_decode from 'jwt-decode';
import { PushButton } from './../../common/push-button';
import GitHubLogin from './../../auth/github-login';
import AuthHeader from './../auth-header';
import Loading from './../../svg/loading';

toast.configure();

const DevCardHub = ({ user }) => {
  const [github, { data: githubData }] = useMutation(UPDATE_GITHUB_USER);
  const [twitter, { data: twitterData }] = useMutation(UPDATE_TWITTER_USER);
  const [uploadTwitterMedia, { data: twitterProfileData, loadingTwitterMedia, errorTwitterMedia }] = useMutation(
    UPLOAD_TWITTER_MEDIA
  );
  const [
    updateTwitterProfileImage,
    { data: twitterProfileImage, loadingTwitterProfileIMage, errorTwitterProfileImage },
  ] = useMutation(UPDATE_TWITTER_PROFILE_IMAGE);
  const { loading, error, data: userData, refetch } = useQuery(GET_PROFILE_INFO);
  const { currentUser, updateUser } = React.useContext(UserContext);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [checkboxGithub, setCheckboxGithub] = React.useState(false);
  const [checkboxTwitter, setCheckboxTwitter] = React.useState(false);
  const [base64Image, setBase64Image] = React.useState('');
  const [mediaId, setMediaId] = React.useState('');

  const auth =
    typeof window !== 'undefined'
      ? new OneGraphAuth({
          appId: APP_ID,
        })
      : null;

  const needsLoginService = auth.findMissingAuthServices(error)[0];

  const fetchUserData = () => {
    console.log({ needsLoginService });
    if (!needsLoginService) {
      refetch();
      console.log('logged in: ', userData);
      console.log({ error });
      if (userData) {
        !loading && !error && setWebsite(userData.me.github.websiteUrl.slice(12));
        !loading && !error && setEmail(userData.me.github.email);
        !loading && !error && setLocation(userData.me.twitter.location);
        !loading && !error && setDescription(userData.me.twitter.description);
        !loading && !error && setName(userData.me.twitter.name);
        updateUser({ displayName: userData.me.twitter.name });
      }
    } else {
      auth.login(needsLoginService);
      const loginSuccess = auth.isLoggedIn(needsLoginService);
      if (loginSuccess) {
        refetch();
        console.log('NEW logged in: ', userData);
        if (userData) {
          !loading && !error && setWebsite(userData.me.github.websiteUrl.slice(12));
          !loading && !error && setEmail(userData.me.github.email);
          !loading && !error && setLocation(userData.me.twitter.location);
          !loading && !error && setDescription(userData.me.twitter.description);
          !loading && !error && setName(userData.me.twitter.name);
          updateUser({ displayName: userData.me.twitter.name });
        }
      }
    }
  };

  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
  }, []);

  React.useEffect(() => {
    console.log({ base64Image });
  }, [base64Image]);

  const updateGitHub = () =>
    github({
      variables: {
        name: name !== '' ? name : null,
        location: location !== '' ? location : null,
        email: email !== '' ? email : null,
        bio: description !== '' ? description : null,
      },
    });

  const updateTwitterUserProfileImage = (image) => {
    if (image !== '') {
      console.log('the base64 string: ', image.split(',')[1]);

      uploadTwitterMedia({
        variables: {
          imageData: image.split(',')[1],
        },
      })
        .then((res) => {
          setMediaId(res.data.twitter.uploadBase64EncodedMedia.mediaResponse.mediaId);
          toast.success('Successfully uploaded Twitter media ', {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        })
        .catch((error) => {
          toast.error(`This went wrong uploading initial media: ${error.message}`, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });
      console.log('THE MEDIA ID: ', mediaId);

      const query = [['media_id', mediaId.toString()]];

      updateTwitterProfileImage({
        variables: {
          query: query,
        },
      })
        .then((res) => {
          console.log('media upload: ', res);
          if (res.data.twitter.makeRestCall.post.jsonBody.errors) {
            toast.error(`Nope, this shit is not working`, { position: toast.POSITION.BOTTOM_CENTER });
          } else if (res.data.twitter.makeRestCall.post.response.statusCode === 200) {
            toast.success('Successfully updated Twitter profile image ', {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          }
        })
        .catch((error) => {
          toast.error(`This went wrong uploading profile image: ${error.message}`, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });
    }
  };

  const updateTwitterProfile = () => {
    const query = [
      ['url', website],
      ['location', location],
      ['description', description],
      ['name', name],
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
    const needsLoginService = auth.findMissingAuthServices(error || errorTwitterMedia || errorTwitterProfileImage)[0];
    if (checkboxGithub) {
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
    if (checkboxTwitter) {
      if (!needsLoginService) {
        updateTwitterProfile();
        updateTwitterUserProfileImage(base64Image);
      }
    } else {
      auth.login(needsLoginService);
      const loginSuccess = auth.isLoggedIn(needsLoginService);
      if (loginSuccess) {
        toast.success('Successfully logged into ' + needsLoginService, { position: toast.POSITION.BOTTOM_CENTER });
        updateTwitterProfile();
        updateTwitterUserProfileImage(base64Image);
      }
    }
  };

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnBioChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOnLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleOnWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const getBase64Image = (image) => {
    if (image !== '') {
      setBase64Image(image);
    }
  };

  return (
    <section
      sx={{
        marginBottom: 1,
        backgroundColor: 'accent',
        margin: '0 auto',
        p: 4,
        // width: '100%',
        display: 'grid',
        gap: 3,
        gridTemplateAreas: [
          `
            'authHeader'
            'form'
            'selections'
            `,
          `
            'authHeader authHeader'
            'form selections'
            'form selections'
            'form selections'
          `,
        ],
        gridAutoColumns: ['1fr', '1fr 1fr'],
        // gridAutoColumns: ['1fr', 'minmax(auto, 250px) 1fr minmax(auto, 300px)'],
        gridAutoRows: 'auto',
        my: 2,
      }}
      className="devCard"
    >
      <AuthHeader userName={name} />

      {loading ? (
        <div
          sx={{
            gridArea: 'form',
            my: 3,
            border: 'solid 3px',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'background',
          }}
        >
          <Loading />
        </div>
      ) : (
        <div
          sx={{
            gridArea: 'form',
            height: '100%',
            maxHeight: 900,
            boxShadow: 0,
            border: 'solid 3px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 4,
            backgroundColor: 'background',
            m: 3,
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
            <div
              sx={{
                height: 30,
              }}
            >
              <Button text="Fetch Data" onClick={fetchUserData} />
            </div>
          </div>

          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <Label>
              <LabelText>
                What should people call you? <Emoji ariaLabel="Two hands shaking">🤝🏽</Emoji>
              </LabelText>
              <Input
                type="text"
                name="name"
                handleChange={handleOnNameChange}
                value={name}
                ariaLabel="Your name"
                placeholder="Your Name..."
              />
            </Label>
            <Label>
              <LabelText>
                Where do you live? <Emoji ariaLabel="Planet earth">🌎</Emoji>
              </LabelText>
              <Input
                type="text"
                name="location"
                handleChange={handleOnLocationChange}
                value={location}
                ariaLabel="Your location"
                placeholder="Your Location..."
              />
            </Label>
            <Label>
              <LabelText>
                Got a personal site? Drop it here <Emoji ariaLabel="A floppy disk">💾</Emoji>
              </LabelText>
              <Input
                type="text"
                name="website"
                handleChange={handleOnWebsiteChange}
                value={website}
                ariaLabel="Your website"
                placeholder="Your Website..."
              />
            </Label>
            <Label>
              <LabelText>
                Your preferred email <Emoji ariaLabel="Email">📧</Emoji>
              </LabelText>
              <Input
                type="text"
                name="email"
                handleChange={handleOnEmailChange}
                value={email}
                ariaLabel="Your email"
                placeholder="Your email..."
              />
            </Label>
          </div>

          <Label>
            <LabelText>
              Who are you? Be creative, this short blurb could be first contact! <Emoji ariaLabel="A UFO">🛸</Emoji>
            </LabelText>
            <TextArea
              type="text"
              name="name"
              handleChange={handleOnBioChange}
              value={description}
              ariaLabel="Your bio"
              placeholder="Your Bio..."
            />
          </Label>
        </div>
      )}

      <section
        sx={{
          gridArea: 'selections',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <aside
          sx={{
            // gridArea: 'imageUpload',
            textAlign: 'center',
            display: 'flex',
            flexDirection: ['column', 'row'],
            justifyContent: 'space-evenly',
            flexGrow: 'grow',
            height: 250,
          }}
          className="imageUpload"
        >
          <ProfileUpload userName={name} getBase64Image={getBase64Image} />
        </aside>

        <aside
          sx={{
            // gridArea: 'checkboxes',
            minHeight: 50,
            height: 150,
            boxShadow: 0,
            border: 'solid 3px',
            display: 'flex',
            flexDirection: ['column'],
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'background',
            p: 3,
            m: 3,
          }}
          className="platforms"
        >
          <h3
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontWeight: 400,
            }}
          >
            Select Platform(s) to update
          </h3>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <Checkbox type="Github" onCheckboxChange={() => setCheckboxGithub((prev) => !prev)} />
            <Checkbox type="Twitter" onCheckboxChange={() => setCheckboxTwitter((prev) => !prev)} />

            <Checkbox comingSoon type="dev.to" onCheckboxChange={() => setCheckboxTwitter((prev) => !prev)} disabled />
            <Checkbox comingSoon type="CodePen" onCheckboxChange={() => setCheckboxTwitter((prev) => !prev)} disabled />
            <Checkbox
              comingSoon
              type="LinkedIn"
              onCheckboxChange={() => setCheckboxTwitter((prev) => !prev)}
              disabled
            />
          </div>
        </aside>

        <aside
          sx={{
            // gridArea: 'push',
            minWidth: [300, 500],
            m: 3,
            pt: 5,
            display: 'flex',
            alignItems: 'flex-end',
            height: 30,
          }}
        >
          <PushButton
            className="push"
            // disabled={checkboxGithub || checkboxTwitter ? false : true}
            onClick={updateInfo}
            text="Push to production"
          />
        </aside>
      </section>

      {/* <aside
        sx={{
          gridArea: 'auth',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          m: 1,
          minHeight: 50,
        }}
      >
        <GitHubLogin />
        <TwitterLogin needsLogin={needsLoginService} />
      </aside> */}
    </section>
  );
};

// DevCardHub.tabsRole = 'TabPanel';

export default DevCardHub;
