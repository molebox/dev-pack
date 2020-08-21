/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import gsap from 'gsap';
import Input from './input';
import Button from '../../common/button';
import Label from './label';
import LabelText from './../../common/label-text';

const SignupForm = () => {
  const [response, setResponse] = React.useState(null);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    gsap.fromTo(
      '.signup-form',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
        delay: 1.8,
      }
    );
  }, []);

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email, { FNAME: name })
      .then(({ msg, result }) => {
        if (result !== 'success') {
          if (msg.includes('not valid')) {
            setResponse('Huh, looks like your emails not valid!');
            clearForm();
          }
          setResponse('Oh no! Something went wrong');
          clearForm();
        }

        if (msg.includes('is already subscribed to list devpack')) {
          setResponse('You are already subscribed!');
          clearForm();
        } else if (msg.includes('not valid')) {
          setResponse('Huh, looks like your emails not valid!');
          clearForm();
        } else if (msg.includes('too many recent signup requests')) {
          setResponse('You only need to signup once!');
          clearForm();
        } else if (msg.includes('This email cannot be added to this list')) {
          setResponse('Huh, looks like your emails not valid!');
          clearForm();
        } else {
          setResponse('Thank you for subscribing!');
          clearForm();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      sx={{
        my: 4,
        padding: [2, 4],
        boxShadow: 0,
        border: 'solid 3px',
        maxWidth: 700,
      }}
      className="signup-form"
    >
      <h3
        sx={{
          fontFamily: 'heading',
          color: 'text',
          fontWeight: 400,
          fontSize: ['1em', '1.2em', '1.6em'],
          width: '100%',
          padding: 2,
          textAlign: 'center',
        }}
      >
        Signup for updates on progress and launch
      </h3>
      <form
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'space-evenly',
          alignItems: 'center',
          minHeight: [120, 100],
        }}
        onSubmit={handleSubmit}
      >
        <Label forAttribute="name">
          <LabelText>Your name</LabelText>
          <Input
            type="text"
            name="name"
            handleChange={handleOnNameChange}
            value={name}
            ariaLabel="Name input"
            placeholder="What do we call you?"
            id="name"
          />
        </Label>

        <Label forAttribute="email">
          <LabelText>Your email</LabelText>
          <Input
            type="email"
            name="email"
            handleChange={handleOnEmailChange}
            value={email}
            ariaLabel="Email input"
            placeholder="Your fav email"
            id="email"
          />
        </Label>

        <div
          sx={{
            width: 'auto',
            height: 30,
            alignSelf: [null, 'flex-end'],
            mb: 3,
            mt: [5, null],
          }}
        >
          <Button type="submit" text="Signup" />
        </div>
      </form>
      <p
        sx={{
          fontFamily: 'heading',
          fontWeight: 400,
          textAlign: 'center',
          padding: 2,
          mt: 3,
        }}
      >
        Follow on Twitter{' '}
        <a
          sx={{
            fontFamily: 'heading',
            color: 'text',
            ':hover': {
              color: 'accent',
            },
          }}
          href="https://twitter.com/dev_pack"
        >
          @dev_pack
        </a>{' '}
      </p>

      {response ? (
        <div
          sx={{
            width: '100%',
            textAlign: 'center',
            mt: 2,
          }}
        >
          <p
            sx={{
              fontFamily: 'heading',
              margin: 10,
              ':after': {
                content: "''",
                display: 'block',
                paddingTop: 1,
                width: 'auto',
                borderBottom: `2px solid #e45858`,
              },
            }}
          >
            {response}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default SignupForm;
