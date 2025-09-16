import React, { useEffect, useState } from 'react';
import './index.css';

const TicTocToe = () => {
  const [squareValues, setSquareValues] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [state, setState] = useState('');

  // 0 1 2;  3 4 5;  6 7 8
  function calculateWinner() {
    const winnerPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerPatterns.length; i++) {
      const [x, y, z] = winnerPatterns[i];
      if (
        squareValues[x] &&
        squareValues[x] === squareValues[y] &&
        squareValues[x] === squareValues[z]
      ) {
        setState(`Winner is ${squareValues[x]}!`);
        return squareValues[x];
      }
    }
    if (squareValues.every((value) => value))
      setState(`This time is a draw. Please restart the game!`);
    else {
      setState(`Next player is ${isXTurn ? 'X' : 'O'}`);
    }
  }

  useEffect(() => {
    calculateWinner();
  }, [squareValues]);

  function handelRestart() {
    setIsXTurn(true);
    setSquareValues(Array(9).fill(''));
  }

  function Square({ value, handleClick }) {
    return (
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    );
  }
  function handleBtnClick(squareIndex) {
    const copySquareValues = [...squareValues];
    if (state.includes('Winner') || copySquareValues[squareIndex]) return;
    // if (calculateWinner() || copySquareValues[squareIndex]) return;
    copySquareValues[squareIndex] = isXTurn ? 'X' : 'O';
    setSquareValues(copySquareValues);
    setIsXTurn(!isXTurn);
  }

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squareValues[0]} handleClick={() => handleBtnClick(0)} />
        <Square value={squareValues[1]} handleClick={() => handleBtnClick(1)} />
        <Square value={squareValues[2]} handleClick={() => handleBtnClick(2)} />
      </div>
      <div className="row">
        <Square value={squareValues[3]} handleClick={() => handleBtnClick(3)} />
        <Square value={squareValues[4]} handleClick={() => handleBtnClick(4)} />
        <Square value={squareValues[5]} handleClick={() => handleBtnClick(5)} />
      </div>
      <div className="row">
        <Square value={squareValues[6]} handleClick={() => handleBtnClick(6)} />
        <Square value={squareValues[7]} handleClick={() => handleBtnClick(7)} />
        <Square value={squareValues[8]} handleClick={() => handleBtnClick(8)} />
      </div>

      <h2>{state}</h2>
      <button onClick={handelRestart}>Restart</button>
    </div>
  );
};

export default TicTocToe;
