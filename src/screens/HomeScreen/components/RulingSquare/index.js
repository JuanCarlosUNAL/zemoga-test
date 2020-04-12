import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThumbDown, ThumbUp } from '@material-ui/icons';

import useStyles from './styles';

const RulingSquare = ({
  backgroundImage,
  description,
  personName,
  category,
  likePercentage,
  votePositive,
  voteNegative,
}) => {
  const like = likePercentage.toFixed(2);
  const dislike = (1 - likePercentage).toFixed(2);
  const textLikePercentage = `${like * 100}%`;
  const textDilikePercentage = `${dislike * 100}%`;
  const styles = useStyles({ backgroundImage, textLikePercentage, textDilikePercentage });
  const categoryName = `in ${category}`;

  const [voteSelected, setVoteSelected] = useState(null);
  const [votePerformed, setVotePerformed] = useState(false);
  const onVote = () => {
    switch (voteSelected) {
      case 'positive': votePositive(); break;
      case 'negative': voteNegative(); break;
      default: return;
    }
    setVotePerformed(true);
  };

  const buttonGroup = () => {
    if (!votePerformed) {
      return (
        <>
          <button type="button" onClick={() => setVoteSelected('positive')}>
            <ThumbUp>Positive</ThumbUp>
          </button>
          <button type="button" onClick={() => setVoteSelected('negative')}>
            <ThumbDown>Negative</ThumbDown>
          </button>
          <button type="button" onClick={onVote}>Vote now</button>
        </>
      );
    }
    return (
      <button type="button" onClick={() => setVotePerformed(false)}>Vote again</button>
    );
  };

  return (
    <article className={styles.rule}>
      <div className={styles.gradient} />
      <div className={styles.description}>
        <h3>{personName}</h3>
        <p>{description}</p>
        <div className={styles.fullReport}>
          {buttonGroup()}
          <p>
            <span className="font-bold">1 month ago</span>
            {categoryName}
          </p>
        </div>
      </div>
      <div className={styles.percentage}>
        <div>
          <span><ThumbUp /></span>
          <h3>{textLikePercentage}</h3>
        </div>
        <div>
          <h3>{textDilikePercentage}</h3>
          <span>
            <ThumbDown />
          </span>
        </div>
      </div>
    </article>
  );
};

RulingSquare.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likePercentage: PropTypes.number.isRequired,
  votePositive: PropTypes.func.isRequired,
  voteNegative: PropTypes.func.isRequired,
};

RulingSquare.defaultProps = {};

export default RulingSquare;
