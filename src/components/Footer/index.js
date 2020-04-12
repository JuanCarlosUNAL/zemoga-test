import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Facebook, Twitter } from '@material-ui/icons';

import useStyles from './styles';

const Footer = () => {
  const styles = useStyles();
  return (
    <footer className={styles.container}>
      <div className={styles.add}>
        <div className={styles.filter} />
        <h4 className="font-light">Is there anyone else you would want us to add?</h4>
        <Link to="add-name">
          Submit a Name
        </Link>
      </div>
      <hr />
      <div className={styles.links}>
        <nav>
          <Link to="/terms-conditions">Terms and Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <nav>
          <p>Follow Us</p>
          <a href="facebook"><Facebook>Facebook</Facebook></a>
          <a href="tweter"><Twitter>Twitter</Twitter></a>
        </nav>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
