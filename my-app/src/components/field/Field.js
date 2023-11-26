import style from './field.module.css';

export const Field = ({
	arr,
	setArr,
	turnCount,
	setTurnCount,
	symbol,
	setSymbol,
	restart,
	setIsDraw,
}) => {
	function handleClick(index) {
		if (turnCount < 9) {
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
		} else {
			setIsDraw(true);
			setTimeout(() => {
				restart();
			}, 3000);
		}
		console.log(arr);
		console.log(turnCount);
	}
	return (
		<div className={style.AppField}>
			{arr.map((item, index, currentPlayer) => (
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
