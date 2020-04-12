import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeScreen from '../screens/HomeScreen';
import PastTrialsScreen from '../screens/PastTrialsScreen';
import HowWorksScreen from '../screens/HowWorksScreen';
import LogInScreen from '../screens/LogInScreen';
import SearchScreen from '../screens/SearchScreen';

import Routes from './Routes';


const Navigation = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path={Routes.HOME}>
        <HomeScreen />
      </Route>
      <Route path={Routes.PAST_TRIALS}>
        <PastTrialsScreen />
      </Route>
      <Route path={Routes.HOW_WORKS}>
        <HowWorksScreen />
      </Route>
      <Route path={Routes.LOG_IN}>
        <LogInScreen />
      </Route>
      <Route path={Routes.SEARCH}>
        <SearchScreen />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default Navigation;
