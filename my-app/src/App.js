import { useEffect, useState } from 'react';
import './App.css';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information';
import { store } from './store';

export const App = () => {

	let [data, setData] = useState(store.getState());

	useEffect(()=>{
		let subscribe = store.subscribe(()=> {
			setData(store.getState())
		})
		return ()=> subscribe
	},[])


	function restart() {
		store.dispatch({ type: 'RESTART' });
	}

	return (
		<>
			<div className="App">
				<div className="App-container">
					<header className="App-header">Крестики - Нолики</header>
					<Information
						data={data}
					></Information>
					<Field
						data={data}
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
