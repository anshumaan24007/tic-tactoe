import "./styles.css";
import {useState} from "react";
export default function App() {


    const [board, setBoard] = useState(Array(9).fill(null));
    const [isTurn,setIsTurn] = useState(true);
    const winner = checkWinner(board);
  

  function handleClick(index){
    if(board[index]||winner) return;

    const newBoard = [...board];
    newBoard[index] = isTurn?"X":"O";
    setBoard(newBoard);
    setIsTurn(!isTurn);
  }

  function resetGame(){
    setBoard(Array(9).fill(null));
    setIsTurn(true);
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {
          board.map((val,index)=>(
            <button key={index} onClick={()=>handleClick(index)} className="cell">
              {val}</button>
          ))}
          </div>
          {winner && <h2> Winner:{winner}</h2>}
          {!winner && !board.includes(null) && <h2>Draw</h2>}
          <button onClick={resetGame} className="reset">Reset Game</button>
      </div>
  );


}

function checkWinner(board){
  const winningPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ]

  for(let pattern of winningPatterns){
    const[a,b,c] = pattern;
    if(board[a] && board[b] === board[a]&& board[b] === board[c]){
      return board[a];
    }
  }
  return null;
}


