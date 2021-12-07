
import './App.css';
import Loading from './pages/loading/Loading';
import {Routes, Route} from "react-router-dom"
import Menu from './pages/menu/Menu';
import GameMath from './pages/gameMath/GameMath';
import GameMathAnswer from './pages/gameMathAnswer/GameMathAnswer';
import Congratulation from './pages/congratulation/Congratulation';
import ContinueTheGame from './pages/continueTheGame/ContinueTheGame';


function App() {
  return (
    <Routes> 
      <Route path="/*" element={<Menu />}/>
     
      <Route path="/menu" element={<Menu />}/>
      <Route path="/gameMath" element={<GameMath/>}/>
      <Route path="/gameMathAnswer" element={<GameMathAnswer/>}/>
      <Route path="/congratulation" element={<Congratulation/>}/>
      <Route path="/continue" element={<ContinueTheGame/>}/>
    
    </Routes>
  );
}

export default App;
