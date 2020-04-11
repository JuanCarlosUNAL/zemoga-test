import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Navbar from '../components/Navbar';
import HomeScreen from '../screens/HomeScreen';

import Routes from './Routes';


const Navigation = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path={Routes.HOME_SCREEN}>
        <HomeScreen />
      </Route>
    </Switch>
  </Router>
);

export default Navigation;
