import { useState } from 'react';
import './App.css';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information';

export const App = () => {
	let [currentPlayer, setCurrentPlayer] = useState('X'); // 'X' or 'O'
	let [turnCount, setTurnCount] = useState(1);
	let [arr, setArr] = useState(['', '', '', '', '', '', '', '', '']);
	let [isGameEnded, setIsGameEnded] = useState(false);
	let [isDraw, setIsDraw] = useState(false);

	setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	setTurnCount(turnCount + 1);
	setIsGameEnded = () => {
		if (turnCount === 9) {
			setIsDraw(true);
			isGameEnded = true;
		}
	};

	// if (isDraw === false && isGameEnded === true) {
	// 	return `Победа ${currentPlayer}`;
	// }
	// if (isDraw === false && isGameEnded === false) {
	// 	return `Ходит ${currentPlayer}`;
	// }

	return (
		<>
			<div className="App">
				<div className="App-container">
					<header className="App-header">Крестики - Нолики</header>
					<Information gameStatus={(isGameEnded, isDraw)}></Information>
					<Field
						arr={arr}
						turnCount={turnCount}
						symbol1={setCurrentPlayer}
					></Field>
					<button
						onClick={() => setArr(['', '', '', '', '', '', '', '', ''])}
						className="App-restart"
					>
						Restart
					</button>
				</div>
			</div>
		</>
	);
};
