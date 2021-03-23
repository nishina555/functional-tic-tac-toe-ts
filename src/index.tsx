import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

/* ------------------------------
Square
------------------------------ */
type SquareType = "O" | "X" | null;

type SquareProps = {
  value: SquareType;
  onClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={() => onClick()}>
      {value}
    </button>
  );
};

/* ------------------------------
Board
------------------------------ */
const Board: React.FC = () => {
  const [squares, setSquares] = useState<Array<SquareType>>(
    Array(9).fill(null)
  );

  const handleClick = (i: number) => {
    const _squares = squares.slice();
    _squares[i] = "X";
    setSquares(_squares);
  };

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const status = "Next player: X";
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

/* ------------------------------
Game
------------------------------ */
const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
