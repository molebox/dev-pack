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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name });
    console.log({ email });
    addToMailchimp(email, { FNAME: name })
      .then(({ msg, result }) => {
        if (result !== 'success') {
          setResponse(msg);
        }
        setResponse(msg);
        console.log('success! ', msg);
      })
      .catch((error) => setResponse(error));
  };

  return (
    <section
      sx={{
        backgroundColor: 'secondary',
        padding: 4,
        borderRadius: 3,
        marginTop: 50,
        marginBottom: [50, null],
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
          marginBottom: 30,
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
          // maxWidth: 1000,
          maxWidth: 500,
          backgroundColor: 'secondary',
          margin: '0 auto',
        }}
        onSubmit={handleSubmit}
      >
        <Label>
          Chosen Name: <Input type="text" name="name" handleChange={handleOnNameChange} />
        </Label>

        <Label>
          Email: <Input type="email" name="email" handleChange={handleOnEmailChange} />
        </Label>

        <button
          sx={{
            fontFamily: 'heading',
            fontWeight: 500,
            letterSpacing: 'text',
            border: '1px solid',
            borderRadius: 3,
            padding: '0.35em 1.2em',
            borderColor: 'primary',
            backgroundColor: 'primary',
            color: 'background',
            cursor: 'pointer',
            textTransform: 'uppercase',
            height: '2.5em',
            alignSelf: ['center', 'flex-end'],
            marginTop: [30, null],
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
      {response && response ? (
        <p
          sx={{
            fontFamily: 'heading',
            margin: 10,
          }}
        >
          {response}
        </p>
      ) : null}
    </section>
  );
};

export default SignupForm;
