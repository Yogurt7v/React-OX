import style from './field.module.css';
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
	arr,
	turnCount,
	setTurnCount,
	symbol,
	setSymbol,
	restart,
	setIsDraw,
	win,
	setWin,
	isGameEnded,
}) => {
	function checkWin(arrX, arrO) {
		if (win === '')
			WIN_PATTERNS.forEach((item) => {
				if (isEqual(arrX, item)) {
					setWin('Победили крестики');
				} else if (isEqual(arrO, item)) {
					setWin('Победили нолики');
				}
			});
	}
	function handleClick(index) {
		let arrX = [];
		let arrO = [];
		if (turnCount < 9 && isGameEnded === false) {
			if (arr[index] === '') {
				arr[index] = `${symbol}`;
				setTurnCount(turnCount + 1);
				if (turnCount % 2 === 0) {
					setSymbol('X');
					setTurnCount(turnCount + 1);
				} else {
					setSymbol('O');
					setTurnCount(turnCount + 1);
				}
			} else {
				alert('Эта ячейка уже занята');
			}
			arr.filter((item, index) => (item === 'X' ? arrX.push(index) : null));
			arr.filter((item, index) => (item === 'O' ? arrO.push(index) : null));

			checkWin(arrX, arrO);
		} else {
			setIsDraw(true);
			setTimeout(() => {
				restart();
			}, 3000);
		}
	}

	return (
		<div className={style.AppField}>
			{arr.map((item, index) => (
				<div
					onClick={() => handleClick(index)}
					key={index}
					index={index}
					className={`${style.AppFieldCell} `}
				>
					{arr[index]}
				</div>
			))}
		</div>
	);
};
