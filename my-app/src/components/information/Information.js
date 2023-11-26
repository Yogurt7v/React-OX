import style from './information.module.css';

export const Information = ({ message, currentPlayer, isDraw }) => {
	// if (isDraw === false && isGameEnded === true) {
	// 	return <div className={style.Information}>Победа {player}</div>;
	// }
	// if (isDraw === false && isGameEnded === false) {
	// 	return <div className={style.Information}>Ходит {player}</div>;
	// }
	if (isDraw === true) {
		return <div className={style.Information}>Ничья</div>;
	}
	// console.log(player);

	return <div className={style.Information}> Ходит игрок {currentPlayer}</div>;
};
