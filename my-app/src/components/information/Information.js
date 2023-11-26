import style from './information.module.css';

export const Information = ({
	message,
	setMessage,
	currentPlayer,
	isDraw,
	win,
	setIsGameEnded,
}) => {
	setMessage(`Ходит игрок ${currentPlayer}`);
	if (isDraw === true) {
		setIsGameEnded(true);
		setMessage(`Ничья`);
	}
	if (win !== '') {
		setMessage(`${win}`);
		setIsGameEnded(true);
	}

	return <div className={style.Information}> {message}</div>;
};
