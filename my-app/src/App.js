import { useState } from 'react';
import './App.css';
import { Field } from './components/field/Field';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	let isGameEnded = false;
	let isDraw = false;
	return (
		<>
			<div className="App">
				<div className="App-container">
					<div>Information</div>
					{/* <Information></Information> */}
					<div>Field</div>
					<Field></Field>
					<button className="App-restart">Restart</button>
				</div>
			</div>
		</>
	);
};
