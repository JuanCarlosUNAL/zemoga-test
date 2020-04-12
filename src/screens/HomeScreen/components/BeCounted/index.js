/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';

import useStyles from './styles';

const BeCounted = () => {
  const styles = useStyles();
  const [hidden, setHidden] = useState('');

  return (
    <div className={`${styles.container} ${hidden}`}>
      <div className={styles.beCounted}>
        <h3 className="font-bold">
          <small className="font-light">Speak out. Be heard</small>
          Be counted
        </h3>
        <p>
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone
          can speak out and speak freely. It’s easy: You share your opinion, we analyze and
          put the data in a public report.
        </p>
        <button type="button" onClick={() => setHidden('hidden')}>
          <Close style={{ fontSize: 20 }} />
        </button>
      </div>
    </div>
  );
};

BeCounted.propTypes = {};

BeCounted.defaultProps = {};

export default BeCounted;
