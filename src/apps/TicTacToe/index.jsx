import { useState, useEffect } from "react";
import "./styles.css";

export default function TicTacToe() {
	const [board, setBoard] = useState(Array(9).fill(""));
	const [Xturn, setXturn] = useState(true);
	const [winner, setWinner] = useState(null);

	useEffect(() => {
		setWinner(getWinner);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [board]);

	// eslint-disable-next-line react/prop-types
	function Square({ value, onClick }) {
		return (
			<button onClick={onClick} className={`square ${winner ? "fade" : ""}`}>
				{value}
			</button>
		);
	}

	function handleClick(index) {
		if (board[index] !== "" || winner) return;

		const boardcopy = [...board];

		boardcopy[index] = Xturn ? "X" : "O";

		setBoard(boardcopy);
		setXturn(!Xturn);
	}

	function getWinner() {
		const winningPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
			[0, 3, 6],
			[1, 4, 7],
		];

		console.log(board);
		for (let i = 0; i < winningPatterns.length; i++) {
			const [x, y, z] = winningPatterns[i];

			if (board[x] != "" && board[x] === board[y] && board[x] === board[z]) {
				return board[x];
			}
		}

		return null;
	}

	return (
		<div className="board">
			<div className="row">
				<Square
					value={board[0]}
					onClick={() => {
						handleClick(0);
					}}
				/>
				<Square
					value={board[1]}
					onClick={() => {
						handleClick(1);
					}}
				/>
				<Square
					value={board[2]}
					onClick={() => {
						handleClick(2);
					}}
				/>
			</div>
			<div className="row">
				<Square
					value={board[3]}
					onClick={() => {
						handleClick(3);
					}}
				/>
				<Square
					value={board[4]}
					onClick={() => {
						handleClick(4);
					}}
				/>
				<Square
					value={board[5]}
					onClick={() => {
						handleClick(5);
					}}
				/>
			</div>
			<div className="row">
				<Square
					value={board[6]}
					onClick={() => {
						handleClick(6);
					}}
				/>
				<Square
					value={board[7]}
					onClick={() => {
						handleClick(7);
					}}
				/>
				<Square
					value={board[8]}
					onClick={() => {
						handleClick(8);
					}}
				/>
			</div>
			{winner && <h1>{winner} wins!</h1>}
			{winner && <button className="restart" onClick={()=>{setBoard(Array(9).fill(""))}}>Restart</button>}
		
		</div>
	);
}
