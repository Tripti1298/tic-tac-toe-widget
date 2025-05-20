import { useState } from "react";

function FloatingTicTacToe() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-chatbar">
      {/* Toggle Button */}
      <button className="floating-toggle-btn" onClick={() => setOpen((v) => !v)}>
        {open ? "×" : "🎲"}
      </button>
      {/* Board only visible when open */}
      {open && (
        <div className="floating-board-box">
          <Board />
        </div>
      )}
    </div>
  );
}
 function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = winner
    ? "Winner Winner Chicken Dinner: " + winner
    : "Next Player: " + (xIsNext ? "X" : "O");

  return (
    <div className="game-container">
      <div className="status">{status}</div>
      <div className="box">
        {squares.map((value, i) => (
          <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default FloatingTicTacToe;