import { createUseStyles } from 'react-jss';

import { HIGHLIGHT_COLOR } from './constants';

export default createUseStyles({
  bubbleMenu: {
    display: 'flex',
  },

  button: {
    marginRight: 5,
    border: '1px solid #000',
    outline: 'none',
    backgroundColor: '#fff',
    borderRadius: 5,

    '&:last-child': {
      marginRight: 0,
    },
  },

  buttonHighlight: {
    width: 22.39,
    padding: 2,
    '&:before': {
      display: 'block',
      content: '""',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: HIGHLIGHT_COLOR,
    },
  },

  buttonActive: {
    backgroundColor: '#000',
    color: '#fff',
  },
});
