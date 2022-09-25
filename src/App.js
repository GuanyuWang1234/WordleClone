 
import './App.css';
import Board from "./components/Board";
import Keyboard from './components/Keyboard';
import { createContext,useEffect,   useState} from 'react' ;
import { boardDefault, generateWordSet} from "./Words";
import GameOver from './components/GameOver';
 
export const AppContext = createContext();

function App() {
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})
  const [board, setBoard] = useState(boardDefault);
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])
  const [correctWord, setCorrectWord] = useState("")
  const [gameover, setGameOver] = useState({
    gameover: false,
    guessedWord: false 
  })


  useEffect(() => {
    generateWordSet().then((words) =>{
      setWordSet(words.wordSet)
      setCorrectWord(words.todaysWord[currentAttempt.attempt])
      
    })
  },[currentAttempt.attempt])

  const onSelectLetter = (keyVal) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal
    setBoard(newBoard)
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
  }
  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
            const newBoard = [...board];
            newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
            setBoard(newBoard)
            setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1})
  }
  const onEnter = () => {
    if (currentAttempt.letterPosition < 5) return;
    let currentWord = ""
    for (let i = 0; i < 5; i++){
      currentWord += board[currentAttempt.attempt][i]
    }
    setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPosition: 0 })

  if (currentWord.toLowerCase() === correctWord.toLowerCase()){
     setGameOver({gameover: true, guessedWord: true});
     
     return;
  }
  if(currentAttempt.attempt === 12){
    setGameOver({gameover: true, guessedWord: false});
    return;
  }
 
  }
  return (
    <div className="App">
      <nav><h1>Number Wordle</h1> 
      </nav>
   
    <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt, onDelete, onSelectLetter, onEnter, correctWord, setDisabledLetters, disabledLetters, setGameOver, gameover}}>
      <div className='game'>
      <Board />
      {gameover.gameover ? <GameOver /> : <Keyboard />}
      </div>
    </AppContext.Provider>
    
    </div>
     
  );
}

export default App;
