import { createUseStyles } from 'react-jss';

export default createUseStyles({
  floatingMenu: {},

  button: {
    margin: 0,
    marginRight: 5,
    backgroundColor: '#fff',
    outline: 'none',
    border: '1px solid #000',
    borderRadius: 5,

    '&:last-child': {
      marginRight: 0,
    },
  },

  activeButton: {
    backgroundColor: '#000',
    color: '#fff',
  },
});
