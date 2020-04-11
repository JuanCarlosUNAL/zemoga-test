/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';

import useStyles from './styles';
import RemainTime from './components/RemainTime';
import BluredSection from './components/BluredSection';
import BeCounted from './components/BeCounted';


const HomeScreen = () => {
  const backgroundImage = 'https://drive.google.com/uc?export=download&id=1mfdDNkoTUE140Q60G1izAP2Q4wA-1DQe';
  const styles = useStyles({ backgroundImage });

  return (
    <main>
      <section className={styles.mainRuling}>
        <BluredSection
          styles={styles}
          personName="Pope Francis"
          description="He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)"
          wikiLink="https://es.wikipedia.org/wiki/Francisco_(papa)"
          backgroundImage={backgroundImage}
        />
        <RemainTime styles={styles} remainTime={22} />
      </section>
      <BeCounted />
      <section className={styles.previusRules}>
        <article />
      </section>
    </main>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
