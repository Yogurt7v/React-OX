import { useState } from 'react';
import './App.css';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information';

export const App = () => {
	let [currentPlayer, setCurrentPlayer] = useState('X'); // 'X' or 'O'
	let [turnCount, setTurnCount] = useState(1);
	let [arr, setArr] = useState(['', '', '', '', '', '', '', '', '']);
	// let [isGameEnded, setIsGameEnded] = useState(false);
	let [isDraw, setIsDraw] = useState(false);
	let [message, setMessage] = useState('');

	function restart() {
		setArr(['', '', '', '', '', '', '', '', '']);
		setTurnCount(1);
		setCurrentPlayer('X');
		setIsDraw(false);
		setMessage(`Ходит игрок ${currentPlayer}`);
	}

	return (
		<>
			<div className="App">
				<div className="App-container">
					<header className="App-header">Крестики - Нолики</header>
					<Information
						message={message}
						setMessage={setMessage}
						currentPlayer={currentPlayer}
						isDraw={isDraw}
					></Information>
					<Field
						arr={arr}
						setArr={setArr}
						turnCount={turnCount}
						setTurnCount={setTurnCount}
						symbol={currentPlayer}
						setSymbol={setCurrentPlayer}
						restart={restart}
						setIsDraw={setIsDraw}
					></Field>
					<button onClick={() => restart()} className="App-restart">
						Новая игра
					</button>
				</div>
			</div>
		</>
	);
};
