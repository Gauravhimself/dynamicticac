import React, { useEffect } from 'react'
import useTictac from '../Hooks/useTictac'


function Tictactoe({boardSize}) {
    //console.log(boardSize, " compnent");
    const {board,handleClick,calculateWinner,getStatusMessage,resetGame} = useTictac(boardSize)
        function renderBoard(board,handleClick){
        return board.map((b,index)=>{
                return <button className='tile' key={index}
                onClick={()=>handleClick(index)}
                disabled={b!==null}>
                {b}</button>
              })
          }
          useEffect(()=>{
            renderBoard(board,handleClick)
          },[board])
  return (
    <div className='game' style={{maxWidth: `calc(${boardSize} * 100px)`}}>

      <div className='status '>
        <button className='message'>{getStatusMessage()}</button> 
        <button className=' p-2 px-3' onClick={()=>resetGame()}>Reset Game</button>
      </div>
      
      <div className='board' style={{gridTemplateColumns: `repeat(${boardSize},1fr)`}}>
        {renderBoard(board, handleClick)}
      </div>
    </div>
  )
}

export default Tictactoe