import React from 'react';
import PropTypes from 'prop-types';
import { ThumbDown, ThumbUp } from '@material-ui/icons';

import useStyles from './styles';

const BgSmallIcon = ({ hadnUp }) => {
  const styles = useStyles();
  const icon = hadnUp
    ? <ThumbUp className="bg-positive-color" />
    : <ThumbDown className="bg-negative-color" />;

  return (
    <div className={styles.svg}>
      {icon}
    </div>
  );
};

BgSmallIcon.propTypes = {
  hadnUp: PropTypes.bool,
};

BgSmallIcon.defaultProps = {
  hadnUp: false,
};

export default BgSmallIcon;
