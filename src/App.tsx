import { ArticleEditor } from './components';

import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div>Редактор статей</div>
      <ArticleEditor />
    </div>
  );
}

export default App;
