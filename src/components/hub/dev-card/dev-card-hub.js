/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { TabPanel } from 'react-tabs';
import ProfileCard from './profile-card';
import Input from '../../home/signup/input';
import TextArea from '../../common/textarea';
import Label from '../../home/signup/label';
import Checkbox from './../../home/social-checkboxes/checkbox';
import { gql, useMutation, useQuery } from '@apollo/client';
import Logout from '../logout';
import Button from '../../common/button';
import Emoji from '../../common/emoji';
import LabelText from './../../common/label-text';
import { UserContext } from './../../../context/user-context';
import TwitterLogin from '../../auth/twitter-login';
import DevToLogin from './../../auth/dev-to-login';
import CodePenLogin from './../../auth/codepen-login';
import LinkedInLogin from './../../auth/linkedIn-login';

const UPDATE_GITHUB_USER = gql`
  mutation UpdateGitHubUserProfile($email: String, $bio: String, $location: String, $name: String) {
    gitHub {
      updateAuthenticatedUser_oneGraph(input: { name: $name, location: $location, email: $email, bio: $bio }) {
        updatedUser {
          bio
          name
          email
          location
        }
      }
    }
  }
`;

const GET_PROFILE_INFO = gql`
  query GetTwitterGithubProfileQuery {
    me {
      twitter {
        name
        description
        location
        screenName
      }
      github {
        email
        websiteUrl
      }
    }
  }
`;

const DevCardHub = ({ user, ...rest }) => {
  const [github, { data }] = useMutation(UPDATE_GITHUB_USER);
  const { loading, error, data: userData } = useQuery(GET_PROFILE_INFO);
  const { currentUser } = React.useContext(UserContext);

  const [name, setName] = React.useState(currentUser.displayName !== '' ? currentUser.displayName : '');
  const [twitterName, setTwitterName] = React.useState('');
  const [email, setEmail] = React.useState(currentUser.email !== '' ? currentUser.email : '');
  const [location, setLocation] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [website, setWebsite] = React.useState(currentUser.websiteUrl !== '' ? currentUser.websiteUrl : '');
  const [checkboxGithub, setCheckboxGithub] = React.useState(false);
  const [checkboxTwitter, setCheckboxTwitter] = React.useState(false);

  React.useEffect(() => {
    console.log({ error });
    console.log({ userData });
    !loading &&
      !error &&
      setWebsite(userData.me.github.websiteUrl.slice(12)) &&
      setLocation(userData.me.twitter.location) &&
      setBio(userData.me.twitter.description) &&
      setName(userData.me.twitter.name);
  }, [loading, error, userData]);

  React.useEffect(() => {
    console.log({ currentUser });
  }, [currentUser]);

  const updateInfo = () => {
    if (checkboxGithub) {
      github({
        variables: {
          name: name !== '' ? name : null,
          location: location !== '' ? location : null,
          email: email !== '' ? email : null,
          bio: bio !== '' ? bio : null,
        },
      });
    }
    if (checkboxTwitter) {
      fetch(`https://api.twitter.com/1.1/account/update_profile.json?name=${currentUser.twitterName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Authorization: `Basic ${currentUser.token}`,
        },
        body: JSON.stringify({
          name: name ? name : null,
          location: location ? location : null,
          description: bio ? bio : null,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log('Twitter Update: ', data))
        .catch((error) => console.log({ error }));
    }
  };

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleOnLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleOnWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  return (
    <TabPanel {...rest}>
      <section
        sx={{
          display: 'flex',
          width: 500,
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        <h1
          sx={{
            fontFamily: 'heading',
            color: 'text',
            fontWeight: 400,
            width: '100%',
            fontSize: ['1.4em', '1.7em', '2em'],
            // marginBottom: 20,
            padding: 10,
            textAlign: 'center',
          }}
        >
          {user.displayName}'s Dev Card
        </h1>
        <Logout />
      </section>

      <section
        sx={{
          maxWidth: 1440,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'space-evenly',
            maxWidth: 800,
            width: '100%',
          }}
        >
          <h4
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontSize: ['1.2em', '1.4em'],
              fontWeight: 400,
              marginBottom: 20,
            }}
          >
            Select your platforms
          </h4>
          <section
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              maxWidth: 500,
              alignSelf: 'center',
              marginBottom: 20,
            }}
          >
            <Checkbox type="Github" onCheckboxChange={() => setCheckboxGithub((prev) => !prev)} />
            <Checkbox type="Twitter" onCheckboxChange={() => setCheckboxTwitter((prev) => !prev)} />

            <Checkbox type="dev.to" onCheckboxChange={() => setCheckboxTwitter((prev) => !prev)} disabled />
            <Checkbox type="CodePen" onCheckboxChange={() => setCheckboxTwitter((prev) => !prev)} disabled />
            <Checkbox type="LinkedIn" onCheckboxChange={() => setCheckboxTwitter((prev) => !prev)} disabled />
          </section>
        </div>
      </section>
      <section
        sx={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'space-evenly',
          width: '100%',
          marginBottom: 20,
        }}
      >
        <TwitterLogin />
        <DevToLogin />
        <CodePenLogin />
        <LinkedInLogin />
      </section>
      <section
        sx={{
          maxWidth: 1440,
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          gap: '2.5em',
          gridAutoRows: 'auto',
        }}
      >
        <div
          sx={{
            width: '100%',
            height: '100%',
            maxHeight: 700,
            border: 'solid 2px',
            borderColor: 'primary',
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 4,
            backgroundColor: 'secondary',
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
              value={bio}
              ariaLabel="Your bio"
              placeholder="Your Bio..."
            />
          </Label>
          <div
            sx={{
              marginTop: 20,
              textAlign: 'center',
            }}
          >
            <Button onClick={updateInfo} text="Push" />
          </div>
        </div>
        <ProfileCard name={name} bio={bio} location={location} website={website} email={email} />
      </section>
    </TabPanel>
  );
};

DevCardHub.tabsRole = 'TabPanel';

export default DevCardHub;
