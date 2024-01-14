import style from './field.module.css';
import { store } from '../../store';


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

export const Field = ({
	data,
}) => {

	function handleClick(index) {

		let arrX = [];
		let arrO = [];
		if (data.turnCount < 9 && data.isGameEnded === false) {
			if (data.arr[index] === '') {
				store.dispatch({type:"ADD_INDEX_TO_ARRAY", payload: index})
				data.arr[index] = `${data.currentPlayer}`;
				console.log(data);

			} else {
				alert('Эта ячейка уже занята');
			}
			data.arr.filter((item, index) => (item === 'X' ? arrX.push(index) : null));
			data.arr.filter((item, index) => (item === 'O' ? arrO.push(index) : null));

		if (data.win === '')
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
		<div className={style.AppField}>
			{data.arr.map((item, index) => (
				<div
					onClick={() => handleClick(index)}
					key={index}
					index={index}
					className={`${style.AppFieldCell} `}
				>
					{data.arr[index]}
				</div>
			))}
		</div>
	);
};
