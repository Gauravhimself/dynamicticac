import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tictactoe from './Components/Tictactoe'

function App() {

 
  return (
    <Tictactoe  boardSize={3}/>
  )
}

export default App