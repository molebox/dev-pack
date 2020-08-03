import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/auth/private-route';
import Login from './../components/home/login';
import Hub from './../components/hub/hub';

const App = () => {
  return (
    <Router>
      <PrivateRoute
        path="app/hub"
        component={Hub}
        // isLoggedIn={currentUser.isGithubLoggedIn || currentUser.isTwitterLoggedIn}
      />
      <Login path="/app/login" />
    </Router>
  );
};

export default App;
