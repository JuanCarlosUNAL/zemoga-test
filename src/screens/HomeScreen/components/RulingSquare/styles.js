import { createUseStyles } from 'react-jss';

export default createUseStyles({
  rule: {
    marginBottom: '2rem',
    position: 'relative',
    flexFlow: 'column',
    justifyContent: 'flex-end',
    height: '27.5rem',
    width: '25.3rem',
    backgroundImage: ({ backgroundImage }) => `url(${backgroundImage})`,
    backgroundSize: 'cover',
    '& *': {
      zIndex: 2,
    },
  },
  percentage: {
    color: 'white',
    height: '2.5rem',
    '& div': {
      alignItems: 'center',
      opacity: '0.8',
      fontWeight: 100,
    },
    '& div:first-child': {
      '& span': {
        padding: '0 0.1rem 0 0.5rem',
      },
      width: ({ textLikePercentage }) => textLikePercentage,
      backgroundColor: 'var(--positive-color)',
    },
    '& div:nth-child(2)': {
      justifyContent: 'flex-end',
      '& span': {
        padding: '0 0.5rem 0 0.1rem',
      },
      width: ({ textDilikePercentage }) => textDilikePercentage,
      backgroundColor: 'var(--negative-color)',
    },
  },
  description: {
    flexDirection: 'column',
    margin: '0rem 1.5rem',
    color: 'white',
    '& h3': {
      position: 'relative',
      fontSize: '2.25rem',
      '& svg': {
        left: '-1.5rem', // margin
        bottom: '0.6rem',
        position: 'absolute',
      },
    },
  },
  voteGroup: {
    margin: '1.5rem 0rem',
    alignItems: 'center',

    '& button': {
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      color: 'white',
      border: '1px solid white',
      backgroundColor: 'transparent',
      outline: 'none',
      fontSize: '0.7rem',
    },
  },
  gradient: {
    position: 'absolute',
    background: 'linear-gradient(to bottom, rgb(255,255,255,0), rgb(0,0,0,0.7) )',
    width: '100%',
    height: '100%',
  },
  radio: {
    border: '2px solid transparernt',
    marginRight: '0.5rem',

    '& input': {
      display: 'none',
    },
    '&.selected': {
      border: '2px solid white',
    },
  },
});
