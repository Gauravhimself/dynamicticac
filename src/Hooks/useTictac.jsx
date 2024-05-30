import { useState } from 'react';
 
    

const useTictac = (boardSize)=>{
    const s= boardSize*boardSize;
    const initBoard=()=>Array(s).fill(null)
    const [board, setBoard] = useState(initBoard())
    //console.log(Array(boardSize*boardSize), " hook2");
    const [isXNext, setIsXNext] = useState(true)

    let size= boardSize; let WINNING_PATTERNS=[]

  for(let a = 0; a<(size*2)+2;a++){
    WINNING_PATTERNS.push(Array(size).fill(null))
  }

 let row=0;let col=0; 
  for(let i=0; i<WINNING_PATTERNS.length;i++){
    
    //Row 
    for(let c=0; i<size && c<size;c++){
      WINNING_PATTERNS[i][c]=row++
    }

    //Cols
    if(i>=size && i<(size*2)){
      let r=0;
      col =i-size
    do{
      WINNING_PATTERNS[i][r]=col
      col = col+size
      r++
    }while(r<size)
    }

    let d=0
    let dia=0;
    let dia2=size-1
    //Diagonals
    if(i>=size*2 && i<WINNING_PATTERNS.length){
      do{
        //console.log(WINNING_PATTERNS.length)
        if(i===WINNING_PATTERNS.length-1){
          WINNING_PATTERNS[i][d]=dia2
          dia2 = dia2+size-1
        }
        else
        {  
          //console.log(i)
          WINNING_PATTERNS[i][d]=dia
          dia = dia+size+1
          }
          d++
      }while(d<size)
    }
  }

    const calculateWinner = (currentBoard)=>{
    //     for (let i = 0; i < WINNING_PATTERNS.length; i++) {
    //         const [a,b,c] = WINNING_PATTERNS[i]
    //         if(currentBoard[a] && currentBoard[a]===currentBoard[b] && currentBoard[a]===currentBoard[c]){
    //             return currentBoard[a]
    //         }          
    //         else null;
    //     }

        for (let i = 0; i < WINNING_PATTERNS.length; i++) {
        const pattern = WINNING_PATTERNS[i];
        const firstIndex = pattern[0];
        
        if (currentBoard[firstIndex]) {
            let isWinningPattern = true;
            
            for (let j = 1; j < pattern.length; j++) {
                if (currentBoard[firstIndex] !== currentBoard[pattern[j]]) {
                    isWinningPattern = false;
                    break;
                }
            }

            if (isWinningPattern) {
                return currentBoard[firstIndex];
            }
        }
    }
    return null;
    }
    const handleClick = (index)=>{
        const winner = calculateWinner(board)
        if(winner || board[index]) return

        const newBoard = [...board]
        newBoard[index] = isXNext?"X":"O"
        setBoard(newBoard)
        setIsXNext(!isXNext)
    }
    const getStatusMessage = () =>{
        const winner = calculateWinner(board)
        if(winner) return `Player ${winner} wins!`
        if(!board.includes(null)) return `It's a draw!`
        return `Player ${isXNext?"X" : "O"} turn`
        
    }
    const resetGame = ()=>{
        setBoard(initBoard())
        setIsXNext(true)
    }

    return {board,handleClick,calculateWinner,getStatusMessage,resetGame,setBoard}
}
export default useTictac;