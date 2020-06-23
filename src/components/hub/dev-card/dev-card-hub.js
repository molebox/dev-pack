/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { TabPanel } from 'react-tabs';
import { UserContext } from '../../../context/user-context';
import ProfileCard from './profile-card';
import Input from '../../home/signup/input';
import TextArea from '../../common/textarea';
import Label from '../../home/signup/label';

const DevCardHub = ({ user, ...rest }) => {
  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [website, setWebsite] = React.useState('');

  const handleOnNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleOnBioChange = (e) => {
    console.log(e.target.value);
    setBio(e.target.value);
  };

  const handleOnLocationChange = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
  };

  const handleOnWebsiteChange = (e) => {
    console.log(e.target.value);
    setWebsite(e.target.value);
  };

  return (
    <TabPanel {...rest}>
      <h1
        sx={{
          fontFamily: 'heading',
          color: 'text',
          fontWeight: 400,
          width: '100%',
          fontSize: ['1.4em', '1.7em', '2em'],
          marginBottom: 20,
          padding: 10,
          textAlign: 'center',
        }}
      >
        {user}'s Dev Card
      </h1>
      <section
        sx={{
          maxWidth: 1440,
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          gap: '3em',
          gridAutoRows: 'auto',
        }}
      >
        <div
          sx={{
            width: '100%',
            height: '100%',
            maxHeight: 700,
            border: 'solid 3px',
            borderColor: 'text',
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
              What should people call you? 🤝🏽
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
              Where do you live? 🌎
              <Input
                type="text"
                name="name"
                handleChange={handleOnLocationChange}
                value={location}
                ariaLabel="Your location"
                placeholder="Your Location..."
              />
            </Label>
            <Label>
              Got a personal site? Drop it here 💾
              <Input
                type="text"
                name="name"
                handleChange={handleOnWebsiteChange}
                value={website}
                ariaLabel="Your website"
                placeholder="Your Website..."
              />
            </Label>
          </div>

          <Label>
            Who are you? Be creative, this short blurb could be first contact! 🛸
            <TextArea
              type="text"
              name="name"
              handleChange={handleOnBioChange}
              value={bio}
              ariaLabel="Your bio"
              placeholder="Your Bio..."
            />
          </Label>
        </div>
        <ProfileCard name={name} bio={bio} />
      </section>
      <section
        sx={{
          maxWidth: 1440,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 50,
        }}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            maxWidth: 800,
            width: '100%',
          }}
        >
          <button>Push to Twitter</button>
          <button>Push to Github</button>
        </div>
      </section>
    </TabPanel>
  );
};

DevCardHub.tabsRole = 'TabPanel';

export default DevCardHub;
