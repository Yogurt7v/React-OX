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
	let [message, setMessage] = useState('');
	let [win, setWin] = useState('');

	function restart() {
		setArr(['', '', '', '', '', '', '', '', '']);
		setTurnCount(1);
		setCurrentPlayer('X');
		setIsDraw(false);
		// setIsGameEnded(false);
		setMessage(`Ходит игрок ${currentPlayer}`);
		setWin('');
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
						win={win}
						setIsGameEnded={setIsGameEnded}
					></Information>
					<Field
						arr={arr}
						turnCount={turnCount}
						setTurnCount={setTurnCount}
						symbol={currentPlayer}
						setSymbol={setCurrentPlayer}
						restart={restart}
						setIsDraw={setIsDraw}
						win={win}
						setWin={setWin}
						isGameEnded={isGameEnded}
					></Field>
					<button onClick={() => restart()} className="App-restart">
						Новая игра
					</button>
				</div>
			</div>
		</>
	);
};
