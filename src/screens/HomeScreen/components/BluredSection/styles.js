import { createUseStyles } from 'react-jss';

const blurKernel = '1.5rem';

export default createUseStyles({
  buttonGroup: {
    '& button': {
      alignItems: 'center',
      height: '4rem',
      justifyContent: 'center',
      width: '100%',
      border: 'none',
      opacity: 0.95,
      outline: 0,
      '&:hover': {
        opacity: 1,
        filter: 'contrast(120%)',
      },
      '&:active': {
        opacity: 1,
        filter: 'contrast(140%)',
      },
    },
    '& #down': {
      backgroundColor: '#1cbbb4',
    },
    '& #up': {
      backgroundColor: '#ffad1d',
    },
  },
  article: {
    color: 'white',
    flexDirection: 'column',
    padding: '1.7rem 1.7rem 1.5rem 1.7rem',
    zIndex: 50,
    '& #your-opinion': {
      fontSize: '0.8rem',
    },
    '& h2': {
      fontSize: '3rem',
      fontWeight: 400,
      marginBottom: '0.7rem',
    },
    '& p': {
      fontSize: '1.05rem',
    },
    '& img': {
      filter: 'invert(100%)',
      height: '0.8rem',
      marginRight: '0.25rem',
      marginTop: '0.05rem',
      width: '0.8rem',
    },
    '& #more-info': {
      fontSize: '0.7rem',
      marginBottom: '2rem',
      marginTop: '1rem',
      textDecoration: 'underline',
    },
    '& h6': {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
  },
  section: {
    paddingLeft: 'var(--margin-horizontal)',
    position: 'relative',
    flexDirection: 'column',
    height: '22.5rem',
    marginTop: '3.5rem',
    width: '25rem',
  },
  blurContainer: {
    height: '18.7rem',
    overflow: 'hidden',
    position: 'absolute',
    width: '25rem',
  },
  blur: {
    backgroundImage: ({ backgroundImage }) => `url("${backgroundImage}")`,
    backgroundPosition: `calc( ${blurKernel} - var(--margin-horizontal) ) calc( -1 * (var(--navbar-height) + 3.5rem - ${blurKernel}))`,
    filter: `blur(${blurKernel}) brightness(0.7)`,
    height: `calc(20rem + 2*${blurKernel})`,
    left: `-${blurKernel}`,
    position: 'absolute',
    top: `-${blurKernel}`,
    width: `calc(100% + 2*${blurKernel})`,
    zIndex: 2,
  },
});
