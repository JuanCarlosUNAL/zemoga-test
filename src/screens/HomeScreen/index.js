import React from 'react';
// import PropTypes from 'prop-types';
import { ThumbDown, ThumbUp } from '@material-ui/icons';

import useStyles from './styles';

const 

const HomeScreen = () => {
  const styles = useStyles();

  return (
    <main>
      <div className={styles.mainRuling}>
        <section className={styles.section}>
          <div className={styles.blurContainer}>
            <div className={styles.blur} />
          </div>
          <article className={styles.article}>
            <small id="your-opinion">What's your opinion on</small>
            <h2> Pope Francis? </h2>
            <p>He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>

            <a id="more-info" href="https://es.wikipedia.org/wiki/Francisco_(papa)">
              <img alt="wiki" src="https://upload.wikimedia.org/wikipedia/commons/1/10/Wikipedia-W-bold-in-square.svg" />
              More informnation
            </a>
            <h6>What's Your Veredict?</h6>
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
      </div>
    </main>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
