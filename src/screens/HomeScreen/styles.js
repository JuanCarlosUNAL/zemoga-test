import { createUseStyles } from 'react-jss';

export default createUseStyles({
  mainRuling: {
    backgroundImage: ({ backgroundImage }) => `url("${backgroundImage}")`,
    flexDirection: 'column',
    height: 'calc(37rem - var(--navbar-height))',
    paddingTop: 'var(--navbar-height)',
    width: '100%',
  },
  previusRules: {
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    marginTop: '1.5rem',
    padding: '0rem var(--margin-horizontal) 1.5rem var(--margin-horizontal)',
    '& h2': {
      fontSize: '2rem',
      marginBottom: '1rem',
      width: '100%',
    },
  },
});
