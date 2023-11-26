import style from './information.module.css';

export const Information = ({ message, setMessage, currentPlayer, isDraw }) => {
	// if (isDraw === false && isGameEnded === true) {
	// 	return <div className={style.Information}>Победа {player}</div>;
	// }
	// if (isDraw === false && isGameEnded === false) {
	// 	return <div className={style.Information}>Ходит {player}</div>;
	// }
	setMessage(`Ходит игрок ${currentPlayer}`);
	if (isDraw === true) {
		setMessage(`Ничья`);
	}

	return <div className={style.Information}> {message}</div>;
};
