import style from './information.module.css';
import { store } from '../../store';

export const Information = ({
	message,
	setMessage,
	currentPlayer,
	isDraw,
	win,
	setIsGameEnded,
	texrColor,
	setTextColor,
}) => {
	setMessage(`Ходит игрок ${store.currentPlayer}`);
	if (isDraw === true) {
		setIsGameEnded(true);
		setTextColor('green');
		setMessage(`Ничья`);
	}
	if (win !== '') {
		setTextColor('red');
		setMessage(`${win}`);
		setIsGameEnded(true);
	}

	return (
		<div className={style.Information} style={{ color: texrColor }}>
			{message}
		</div>
	);
};
