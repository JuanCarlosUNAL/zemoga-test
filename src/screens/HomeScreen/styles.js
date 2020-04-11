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
    padding: '1.5rem var(--margin-horizontal)',
  },
});
