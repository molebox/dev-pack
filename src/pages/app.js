import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/auth/private-route';
import Login from '../components/auth/login';
import Hub from './../components/hub/hub';

const App = () => {
  return (
    <Router>
      <PrivateRoute path="app/hub" component={Hub} />
      <Login path="/app/login" />
    </Router>
  );
};

export default App;
