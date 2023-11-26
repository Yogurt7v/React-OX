import style from './information.module.css';

export const Information = ({
	message,
	setMessage,
	currentPlayer,
	isDraw,
	win,
	setWin,
	setIsGameEnded,
}) => {
	setMessage(`Ходит игрок ${currentPlayer}`);
	if (isDraw === true) {
		setMessage(`Ничья`);
	}
	if (win !== '') {
		setMessage(`${win}`);
	}

	return <div className={style.Information}> {message}</div>;
};
