import { Field } from './components/field/Field';
import { Information } from './components/information/Information';
import { store } from './store';

export const App = () => {


	function restart() {
		store.dispatch({ type: 'RESTART' });
	}

	return (
		<>
			<div>
				<div >
					<header className="text-center text-5xl">Крестики - Нолики</header>
					<Information></Information>
					<Field
						restart={restart}
					></Field>
					<button onClick={() => restart()} className="flex mx-auto justify-center items-center h-12 w-96 text-black text-2xl tracking-wider bg-white border border-gray-500  shadow-gray-500 shadow-md" >
						Новая игра
					</button>
				</div>
			</div>
		</>
	);
};
