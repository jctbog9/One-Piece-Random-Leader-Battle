import { useState } from 'react'
import './App.css';
import strawHatImage from './assets/images/strawhat.png'
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
    }, 1000)
  };

  const handlePlayer1Change = (event) => {
    setPlayer1Name(event.target.value)
  }
 
  const handlePlayer2Change = (event) => {
    setPlayer2Name(event.target.value)
  }

  return (
    <div className="App one-piece-theme">
      {
        // In-Between Loading State
        isLoading ? (
          <div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="spinner-border text-primary custom-spinner" role="status">
                <span className="sr-only"></span>
              </div>
              <h3>Randomizing...</h3>
            </div>
          </div>
        ) : (
          // Completed State
          isRandomized ? (
            <div className="leader-container">
              <div className="leader-display-row">
                <CardContainer leader={player1Data}></CardContainer>
                <h1>VS!!</h1>
                <CardContainer leader={player2Data}></CardContainer>
              </div>
              <div className="leader-display-row">
                <button className="btn btn-info one-piece-btn" onClick={randomizeMatchup}>Spin Again!</button>
              </div>
            </div>
          ) : (
            // Default State
            <div className="button-container">
              <h1 className="mb-3">Welcome to One Piece Leader Matchup generator!</h1>
              <img alt="strawhat pirate logo" src={strawHatImage} className="strawhat-image mb-3"></img>
              <h2 className="mb-3">Enter player info below to get started</h2>
              <div className="input-div">
                <div className="form-group mb-3 input-container">
                  <label htmlFor="player1Name" className="input-label">Player 1 Name:</label>
                  <input type="text" className="form-control" id="player1Name" placeholder="Enter Player 1 Name" onChange={handlePlayer1Change}></input>
                </div>
                <div className="form-group mb-3 input-container">
                  <label htmlFor="player2Name" className="input-label">Player 2 Name:</label>
                  <input type="text" className="form-control" id="player2Name" placeholder="Enter Player 2 Name" onChange={handlePlayer2Change}></input>
                </div>
              </div>
              <div>
                <button className="btn btn-info one-piece-btn" onClick={randomizeMatchup}>Randomize Matchup!</button>
              </div>
            </div>
          )
        )
      }
    </div>
  );
}

export default App;
