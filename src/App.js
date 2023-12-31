import './App.css';
import Dice from './Dice';
import PlayGame from './PlayGame';
import {useState} from 'react';

function App() {
  const [GameStarted, setGameStarted]=useState(true);
  const SetToggle=()=>{
    setGameStarted((prev)=> !prev);
  }
  return (
    <div className="App">
        {GameStarted ? <Dice Toggle={SetToggle} /> : <PlayGame /> }    
    </div>
  );
}

export default App;
