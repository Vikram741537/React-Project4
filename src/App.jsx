import GamePlay from "./Components/GamePlay";
import StartGame from "./Components/StartGame"
import { useState } from "react"
import './App.css'

function App() {
 const [isGameStarted , setisGameStarted] = useState(false);
 const toggleGamePlay = () =>{
  setisGameStarted((prev) => !prev);
 }

  return (
    <>
    {
      isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay}/>}
    </>
  )
}

export default App
