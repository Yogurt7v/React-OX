import { useState } from 'react';
import './App.css';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	let isGameEnded = false;
	let isDraw = false;

	return (
		<>
			<div className="App">
				<div className="App-container">
					<header className="App-header">Крестики - Нолики</header>
					<Information gameStatus={(isGameEnded, isDraw)}></Information>
					<Field></Field>
					<button className="App-restart">Restart</button>
				</div>
			</div>
		</>
	);
};
