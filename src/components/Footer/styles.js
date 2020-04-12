import { createUseStyles } from 'react-jss';

export default createUseStyles({
  container: {
    flexDirection: 'column',
    margin: '0rem var(--margin-horizontal)',
    '& hr': {
      margin: '2rem 0rem 1.5rem 0rem',
      borderTop: '1px dotted black',
    },
  },
  add: {
    height: '4rem',
    position: 'relative',
    width: '100%',
    backgroundImage: 'url("https://drive.google.com/uc?export=download&id=1mZzCXck4HgM5TSxSdaNhY9gFp-VjKTd_")',
    backgroundPosition: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& a, & h4': {
      margin: '0rem 1.5rem',
      zIndex: 2,
    },
    '& h4': {
      fontSize: '1.5rem',
    },
    '& a': {
      border: '2px solid black',
      padding: '0.75rem 1.9rem',
      color: 'black',
      textDecoration: 'none',
    },
  },
  filter: {
    backgroundColor: 'white',
    opacity: 0.8,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  links: {
    justifyContent: 'space-between',
    marginBottom: '2rem',
    '& a, p': {
      textDecoration: 'none',
      color: 'black',
      fontSize: '0.6rem',
    },
    '& svg': {
      marginLeft: '1.1rem',
      marginTop: '-0.3rem',
    },
    '& nav:first-child': {
      width: '14.5rem',
      justifyContent: 'space-between',
    },
  },
});
