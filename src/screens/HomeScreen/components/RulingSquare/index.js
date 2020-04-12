/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { ThumbDown, ThumbUp } from '@material-ui/icons';

import { Link } from 'react-router-dom';
import useStyles from './styles';

const RulingSquare = ({
  rulingId,
  backgroundImage,
  description,
  personName,
  category,
}) => {
  const styles = useStyles({ backgroundImage });
  const categoryName = `in ${category}`;
  return (
    <article className={styles.rule}>
      <div className={styles.gradient} />
      <div className={styles.description}>
        <h3>{personName}</h3>
        <p>{description}</p>
        <div className={styles.fullReport}>
          <Link to={`view-rule/${rulingId}`}>View Full report</Link>
          <p>
            <span className="font-bold">1 month ago</span>
            {categoryName}
          </p>
        </div>
      </div>
      <div className={styles.percentage}>
        <div>
          <span><ThumbUp /></span>
          <h3>64%</h3>
        </div>
        <div>
          <h3>64%</h3>
          <span>
            <ThumbDown />
          </span>
        </div>
      </div>
    </article>
  );
};

RulingSquare.propTypes = {};

RulingSquare.defaultProps = {};

export default RulingSquare;
