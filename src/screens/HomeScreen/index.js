import React from 'react';

import useStyles from './styles';
import RemainTime from './components/RemainTime';
import BluredSection from './components/BluredSection';
import BeCounted from './components/BeCounted';
import RulingSquare from './components/RulingSquare';

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
        <h2 className="font-light">Previous Rulings</h2>

        <RulingSquare
          backgroundImage="https://drive.google.com/uc?export=download&id=1eBePPuHVExaR_vYujZOIcr8eBHbsQ78c"
          category="Entertainment"
          personName="Kanye West"
          description="Excepteur non reprehenderit tempor qui ut aliqua deserunt adipisicing Lorem cillum tempor ipsum do."
        />
        <RulingSquare
          backgroundImage="https://drive.google.com/uc?export=download&id=1P_fI959GepoPL4uB_VLeBKCAK2pAXRn_"
          category="Business"
          personName="Mark Zuckerberg"
          description="Aliqua fugiat proident veniam eu pariatur cillum minim."
        />
        <RulingSquare
          backgroundImage="https://drive.google.com/uc?export=download&id=16Nuc7NCt0oSs5620yvq-ZCKke-BrviaJ"
          category="Politics"
          personName="Kristina Fernándes de Kirchner"
          description="Consequat duis quis dolore mollit est laborum cupidatat consectetur eiusmod sunt et."
        />
        <RulingSquare
          backgroundImage="https://drive.google.com/uc?export=download&id=1pb12cHstFRiL81ZUTXj35UUlvuS2e9yR"
          category="Entertainment"
          personName="Malala Yousafzai"
          description="Sint consequat est nostrud nulla eiusmod nostrud amet."
        />
      </section>
    </main>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
