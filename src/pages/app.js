import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/auth/private-route';
import Login from './../components/home/login';
import Hub from './../components/hub/hub';
import { DevCardStateContext } from './../context/devcard-context';

const App = () => {
  const state = React.useContext(DevCardStateContext);
  return (
    <Router>
      <PrivateRoute path="app/hub" component={Hub} isLoggedIn={state.isLoggedIn} />
      <Login path="/app/login" />
    </Router>
  );
};

export default App;
