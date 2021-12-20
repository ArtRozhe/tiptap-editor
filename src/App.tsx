import { ArticleEditor } from './components';

import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div>Приложение для разработки редактора статей</div>
      <ArticleEditor />
    </div>
  );
}

export default App;
