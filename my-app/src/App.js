// import { useEffect, useState } from 'react';
import './App.css';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information';
import { store } from './store';

export const App = () => {


	function restart() {
		store.dispatch({ type: 'RESTART' });
	}

	return (
		<>
			<div className="App">
				<div className="App-container">
					<header className="App-header">Крестики - Нолики</header>
					<Information></Information>
					<Field
						restart={restart}
					></Field>
					<button onClick={() => restart()} className="App-restart">
						Новая игра
					</button>
				</div>
			</div>
		</>
	);
};
