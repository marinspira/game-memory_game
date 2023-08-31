import './styles/settings/colors.css'
import './styles/generic/reset.css'
import './styles/elements/base.css'
import BoardGame from './objects/BoardGame';
import ScoreBoard from './objects/ScoreBoard';

function App() {
  return (
    <div className="App">
      {ScoreBoard()}
      {BoardGame()}
    </div>
  );
}

export default App;
