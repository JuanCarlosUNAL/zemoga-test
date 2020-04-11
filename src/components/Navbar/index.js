import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';

import Routes from '../../navigation/Routes';
import styles from './styles';

const Navbar = ({ classes }) => (
  <div className={classes.container}>
    <nav className={classes.nav}>
      <Link to={Routes.HOME}>
        <h1>Rule of Thumb</h1>
      </Link>
      <ul className={classes.ul}>
        <li><Link to={Routes.PAST_TRIALS}>Past Trials</Link></li>
        <li><Link to={Routes.HOW_WORKS}>How It Works</Link></li>
        <li><Link to={Routes.LOG_IN}>Log In/Sign up</Link></li>
        <li><Link to={Routes.SEARCH}><Search /></Link></li>
      </ul>
    </nav>
  </div>
);

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

Navbar.defaultProps = {};

export default styles(Navbar);
