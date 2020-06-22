/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Label from './label';
import Input from './input';

const SignupForm = () => {
  const [response, setResponse] = React.useState(null);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleOnNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleOnEmailChange = (e) => {
    console.log(e.target.value);
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
          console.log(msg);
          setResponse('Thank you for subscribing!');
          clearForm();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <section
      sx={{
        backgroundColor: 'secondary',
        padding: 2,
        borderRadius: 3,
        marginTop: 50,
        width: [320, 500],
      }}
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
          flexDirection: ['column', 'row'],
          justifyContent: 'space-evenly',
          alignItems: 'center',
          maxWidth: 500,
          backgroundColor: 'secondary',
          margin: '0 auto',
          minHeight: 120,
        }}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          name="name"
          handleChange={handleOnNameChange}
          value={name}
          ariaLabel="Name input"
          placeholder="What do we call you?"
        />

        <Input
          type="email"
          name="email"
          handleChange={handleOnEmailChange}
          value={email}
          ariaLabel="Email input"
          placeholder="Your fav email"
        />

        <button
          sx={{
            fontFamily: 'heading',
            letterSpacing: 2,
            fontWeight: 500,
            border: '1px solid',
            borderRadius: 3,
            padding: 1,
            borderColor: 'text',
            backgroundColor: 'primary',
            color: 'background',
            cursor: 'pointer',
            textTransform: 'uppercase',
            height: '2em',
            // alignSelf: ['center', 'flex-end'],
            minWidth: 100,
            // marginTop: [30, null],
            '&:hover': {
              color: 'accent',
              backgroundColor: 'background',
              fontWeight: 'bold',
            },
            '&:active': {
              boxShadow: '-1px 1px #00001F',
            },
          }}
          type="submit"
        >
          Signup
        </button>
      </form>

      {response ? (
        <div
          sx={{
            width: '100%',
            textAlign: 'center',
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
    </section>
  );
};

export default SignupForm;
