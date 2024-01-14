import style from './information.module.css';
import { store } from '../../store';

export const Information = ({
	data,
}) => {

	if (data.isDraw === true) {
		store.dispatch({ type: 'DRAW' });
	}

	return (
		<div className={style.Information} style={{ color: data.texrColor }}>
			{data.message}
		</div>
	);
};
