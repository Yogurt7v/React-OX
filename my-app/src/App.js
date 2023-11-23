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

	// setIsDraw(() => {
	// 	if (turnCount === 9) {
	// 		setIsDraw(true);
	// 		setIsGameEnded(true);
	// 	}
	// });

	// if (isDraw === false && isGameEnded === true) {
	// 	return `Победа ${currentPlayer}`;
	// }
	// if (isDraw === false && isGameEnded === false) {
	// 	return `Ходит ${currentPlayer}`;
	// }
	function restart() {
		setArr(['', '', '', '', '', '', '', '', '']);
		setTurnCount(1);
		setCurrentPlayer('X');
	}

	return (
		<>
			<div className="App">
				<div className="App-container">
					<header className="App-header">Крестики - Нолики</header>
					<Information isDraw={isDraw}></Information>
					<Field
						arr={arr}
						setArr={setArr}
						turnCount={turnCount}
						setTurnCount={setTurnCount}
						symbol={currentPlayer}
						setSymbol={setCurrentPlayer}
						restart={restart}
					></Field>
					<button onClick={() => restart()} className="App-restart">
						Restart
					</button>
				</div>
			</div>
		</>
	);
};
