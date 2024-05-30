import React, { useEffect,useState } from 'react'
import useTictac from '../Hooks/useTictac'


//function Tictactoe({boardSize}) {
  function Tictactoe() {
    //console.log(boardSize, " compnent");
    const [boardSize, setBoardSize] = useState(3)
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

      <div className='status mt-5   '>
        <div className="relative h-10 w-full">
          <input onChange={(e)=>setBoardSize(Number(e.target.value))} placeholder='Enter Board size' 
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label
            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Board Size
          </label>
        </div>
        <button className=' p-2 px-3 mt-1' onClick={()=>resetGame()}>Reset Game</button>
        <p className='message'>{getStatusMessage()}</p>        
      </div>
      
      <div className='board' style={{gridTemplateColumns: `repeat(${boardSize},1fr)`}}>
        {renderBoard(board, handleClick)}
      </div>
    </div>
  )
}

export default Tictactoe