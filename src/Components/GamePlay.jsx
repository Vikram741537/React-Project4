
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from 'styled-components'
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
  const [Score, setScore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [Error, setError] = useState("");
  const [ShowRules, setShowRules] = useState(false);

  const GenerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

const roleDice = () =>{
  if(!selectedNumber){
    setError("You have not selected any number");
    return;
  }
  setError("")
    const randomNumber = GenerateRandomNumber(1,7)
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber==randomNumber){
      setScore((prev)=> prev + randomNumber)
    }else{
      setScore((prev) => prev -2)
    }

    setselectedNumber(undefined)
}
const resetScore = () =>{
  setScore(0)
}
  return (
    
        <MainContainer>
            <div className="top_section">
              <TotalScore Score={Score} />
              <NumberSelector Error={Error}
              setError={setError}
              selectedNumber={selectedNumber}
              setselectedNumber={setselectedNumber} />
            </div>
            <RoleDice CurrentDice={CurrentDice} roleDice={roleDice} />
            <div className="btns">
              <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
              <Button onClick={()=> setShowRules((prev)=> !prev)}>{ShowRules? "Hide" : "Show"} Rules</Button>
            </div>
            {ShowRules && <Rules />}
        </MainContainer>
    
  )
}

export default GamePlay;

const MainContainer = styled.main`
   padding-top: 40px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      align-items: center;
      margin-top: 20px;
    }
`