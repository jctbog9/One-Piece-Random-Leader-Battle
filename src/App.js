import { useState, useEffect } from 'react'

import './App.css';

import { CardContainer } from './CardContainer.jsx'
import { randomizePlayerLeaders } from './helpers/randomizer.js'

function App() {
  const [isRandomized, setIsRandomized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [player1Data, setPlayer1Data] = useState({ imgSrc: '' })
  const [player2Data, setPlayer2Data] = useState({ imgSrc: '' })
  const [player1Name, setPlayer1Name] = useState("Player 1")
  const [player2Name, setPlayer2Name] = useState("Player 2")

  const randomizeMatchup = () => {
    setIsLoading(true)
    const result = randomizePlayerLeaders()
    console.log(result[0])
    setPlayer1Data({
      playerName: player1Name,
      cardName: result[0].cardName,
      cardNumber: result[0].cardNumber,
      imgSrc: result[0].imgSrc,
    })
    setPlayer2Data({
      playerName: player2Name,
      cardName: result[1].cardName,
      cardNumber: result[1].cardNumber,
      imgSrc: result[1].imgSrc,
    })
    setTimeout(() => {
      setIsRandomized(true)
      setIsLoading(false)
    }, 1500)
  };

  const handlePlayer1Change = (event) => {
    setPlayer1Name(event.target.value)
  }
 
  const handlePlayer2Change = (event) => {
    setPlayer2Name(event.target.value)
  }

  return (
    <div className="App">
      {
        // In-Between Loading State
        isLoading ? (
          <div class="button-container">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="spinner-border text-primary custom-spinner" role="status">
                <span class="sr-only"></span>
              </div>
              <h3>Randomizing...</h3>
            </div>
          </div>
        ) : (
          // Completed State
          isRandomized ? (
            <div>
              <div className="leader-display-row">
                <CardContainer leader={player1Data}></CardContainer>
                <h1 style={{ margin: "32px" }}>VS!!</h1>
                <CardContainer leader={player2Data}></CardContainer>
              </div>
              <div className="leader-display-row">
                <button className="btn btn-info" onClick={randomizeMatchup}>Spin Again!</button>
              </div>
            </div>
          ) : (
            // Default State
            <div class="button-container">
              <div>
                <div class="form-group mb-3">
                  <label for="player1Name" class="mb-3">Player 1 Name:</label>
                  <input type="text" class="form-control" id="player1Name" placeholder="Enter Player 1 Name" onChange={handlePlayer1Change}></input>
                </div>
                <div class="form-group mb-3">
                  <label for="player2Name" class="mb-3">Player 2 Name:</label>
                  <input type="text" class="form-control" id="player2Name" placeholder="Enter Player 2 Name" onChange={handlePlayer2Change}></input>
                </div>
                <div>
                  <button className="btn btn-info" onClick={randomizeMatchup}>Randomize Matchup!</button>
                </div>
              </div>
            </div>
          )
        )
      }
    </div>
  );
}

export default App;
