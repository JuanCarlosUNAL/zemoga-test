import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const RemainTime = ({ remainTime }) => {
  const styles = useStyles();
  const days = remainTime > 1 ? 'days' : 'day';
  return (
    <div className={styles.remainTime}>
      <div className={`font-regular ${styles.gradient}`}>
        <h6>CLOSING IN</h6>
      </div>
      <div className={styles.light}>
        <h5 className="font-light">
          <strong>
            {remainTime}
          </strong>
          &nbsp;
          {days}
        </h5>
      </div>
    </div>
  );
};

RemainTime.propTypes = {
  remainTime: PropTypes.number.isRequired,
};

RemainTime.defaultProps = {};

export default RemainTime;
