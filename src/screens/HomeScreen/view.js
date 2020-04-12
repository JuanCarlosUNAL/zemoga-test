import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';
import RemainTime from './components/RemainTime';
import BluredSection from './components/BluredSection';
import BeCounted from './components/BeCounted';
import RulingSquare from './components/RulingSquare';

const HomeScreen = ({ mainRule, oldRules, votePositive, voteNegative }) => {
  const backgroundImages = 'https://drive.google.com/uc?export=download&id=1mfdDNkoTUE140Q60G1izAP2Q4wA-1DQe';
  const styles = useStyles({ backgroundImage: backgroundImages });

  const generateRulingSquares = () => oldRules.map(({
    backgroundImage,
    category,
    description,
    id,
    likePercentage,
    personName,
  }) => (
    <RulingSquare
      backgroundImage={backgroundImage}
      category={category}
      description={description}
      key={id}
      likePercentage={likePercentage}
      personName={personName}
      voteNegative={() => voteNegative(id)}
      votePositive={() => votePositive(id)}
    />
  ));

  return (
    <main>
      <section className={styles.mainRuling}>
        <BluredSection
          styles={styles}
          personName="Pope Francis"
          description="He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)"
          wikiLink="https://es.wikipedia.org/wiki/Francisco_(papa)"
          backgroundImage={backgroundImages}
        />
        <RemainTime styles={styles} remainTime={22} />
      </section>
      <BeCounted />
      <section className={styles.previusRules}>
        <h2 className="font-light">Previous Rulings</h2>
        {generateRulingSquares()}
      </section>
    </main>
  );
};

HomeScreen.propTypes = {
  oldRules: PropTypes.array.isRequired,
  votePositive: PropTypes.func.isRequired,
};

HomeScreen.defaultProps = {};

export default HomeScreen;
