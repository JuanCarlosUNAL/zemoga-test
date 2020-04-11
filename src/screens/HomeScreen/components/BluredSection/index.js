import React from 'react';
import PropTypes from 'prop-types';
import { ThumbDown, ThumbUp } from '@material-ui/icons';

import useStyles from './styles';

const BluredSection = ({
  backgroundImage,
  description,
  personName,
  wikiLink,
}) => {
  const styles = useStyles({ backgroundImage });
  const name = `${personName}?`;
  return (
    <section className={styles.section}>
      <div className={styles.blurContainer}>
        <div className={styles.blur} />
      </div>
      <article className={styles.article}>
        <small id="your-opinion">What&apos;s your opinion on</small>
        <h2>{name}</h2>
        <p>{description}</p>

        <a id="more-info" href={wikiLink}>
          <img alt="wiki" src="https://upload.wikimedia.org/wikipedia/commons/1/10/Wikipedia-W-bold-in-square.svg" />
          More informnation
        </a>
        <h6>What&apos;s Your Veredict?</h6>
      </article>
      <div className={styles.buttonGroup}>
        <button type="button" id="up">
          <ThumbUp style={{ fontSize: '1.9rem', color: 'white' }} />
        </button>
        <button type="button" id="down">
          <ThumbDown style={{ fontSize: '1.9rem', color: 'white' }} />
        </button>
      </div>
    </section>
  );
};

BluredSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  wikiLink: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

BluredSection.defaultProps = {};

export default BluredSection;
