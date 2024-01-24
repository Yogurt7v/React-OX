// import style from './field.module.css';
import { store } from '../../store';
import { useSelector } from 'react-redux';


const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

function isEqual(a, b) {
	if (a instanceof Array && b instanceof Array) {
		if (a.length !== b.length) {
			return false;
		}
		for (var i = 0; i < a.length; i++) {
			if (!isEqual(a[i], b[i])) {
				return false;
			}
		}
		return true;
	}
	return a === b;
}

export const Field = ({ restart }) => {

	const turnCount = useSelector((state) => state.turnCount);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const arr = useSelector((state) => state.arr);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const win = useSelector((state) => state.win);

	function handleClick(index) {

		let arrX = [];
		let arrO = [];
		if (turnCount < 9 && isGameEnded === false) {
			if (arr[index] === '') {
				store.dispatch({type:"ADD_INDEX_TO_ARRAY", payload: index})
				arr[index] = `${currentPlayer}`;

			} else {
				alert('Эта ячейка уже занята');
			}
			arr.filter((item, index) => (item === 'X' ? arrX.push(index) : null));
			arr.filter((item, index) => (item === 'O' ? arrO.push(index) : null));

		if (win === '')
			WIN_PATTERNS.forEach((item) => {
				if (isEqual(arrX, item)) {
					store.dispatch({ type: 'WIN', payload: { message: "Победили крестики" } });
				} else if (isEqual(arrO, item)) {
					store.dispatch({ type: 'WIN', payload:{ message: "Победили нолики"} });
				}
			});
		} else {
			alert('Игра окончена');
			store.dispatch({ type: 'DRAW' });

		}

	}

	return (
		<div className="AppField">
			{arr.map((item, index) => (
				<div
					onClick={() => handleClick(index)}
					key={index}
					index={index}
					className={"AppFieldCell"}
				>
					{arr[index]}
				</div>
			))}
		</div>
	);
};
