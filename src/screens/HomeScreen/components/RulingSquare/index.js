import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ThumbDown, ThumbUp } from '@material-ui/icons';

import BgSmallIcon from '../../../../components/BgSmallIcon';

import useStyles from './styles';

const RulingSquare = ({
  backgroundImage,
  category,
  description,
  id,
  likePercentage,
  personName,
  voteNegative,
  votePositive,
}) => {
  const like = useMemo(() => likePercentage.toFixed(2), [likePercentage]);
  const dislike = useMemo(() => (1 - likePercentage).toFixed(2), [likePercentage]);
  const textLikePercentage = useMemo(() => `${like * 100}%`, [like]);
  const textDilikePercentage = useMemo(() => `${dislike * 100}%`, [dislike]);
  const styles = useStyles({ backgroundImage, textLikePercentage, textDilikePercentage });
  const categoryName = useMemo(() => `in ${category}`, [category]);

  const [voteSelected, setVoteSelected] = useState(null);
  const [votePerformed, setVotePerformed] = useState(false);
  const onVote = useCallback(() => {
    switch (voteSelected) {
      case 'positive': votePositive(); break;
      case 'negative': voteNegative(); break;
      default: return;
    }
    setVotePerformed(true);
    setVoteSelected(null);
  }, [voteSelected, votePositive, voteNegative]);

  const onChangeSelection = useCallback((event) => setVoteSelected(event.target.value), []);
  const buttonGroup = useCallback(() => {
    if (!votePerformed) {
      return (
        <>
          <label htmlFor={`${id}-thumb-up`} className={`${voteSelected === 'positive' ? 'selected' : 'unselected'} ${styles.radio}`}>
            <input id={`${id}-thumb-up`} name="vote" type="radio" onChange={onChangeSelection} value="positive" />
            <BgSmallIcon hadnUp styles={styles} />
          </label>
          <label htmlFor={`${id}-thumb-down`} className={`${voteSelected === 'negative' ? 'selected' : 'unselected'} ${styles.radio}`}>
            <input id={`${id}-thumb-down`} name="vote" type="radio" onChange={onChangeSelection} value="negative" />
            <BgSmallIcon styles={styles} />
          </label>
          <button type="button" onClick={onVote}>Vote now</button>
        </>
      );
    }
    return (
      <button type="button" onClick={() => setVotePerformed(false)}>Vote again</button>
    );
  }, [voteSelected, votePerformed, onVote]);

  return (
    <article className={styles.rule}>
      <div className={styles.gradient} />
      <div className={styles.description}>
        <h3>
          <BgSmallIcon hadnUp={likePercentage > 0.5} styles={styles} />
          {personName}
        </h3>
        <small>
          <span className="font-bold">1 month ago&nbsp;</span>
          {categoryName}
        </small>
        <p>{description}</p>
        <div className={styles.voteGroup}>
          {buttonGroup()}
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
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  likePercentage: PropTypes.number.isRequired,
  personName: PropTypes.string.isRequired,
  voteNegative: PropTypes.func.isRequired,
  votePositive: PropTypes.func.isRequired,
};

RulingSquare.defaultProps = {};

export default RulingSquare;
