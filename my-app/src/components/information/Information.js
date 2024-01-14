import style from './information.module.css';
import { store } from '../../store';

export const Information = ({
	data,
}) => {


	return (
		<div className={style.Information} style={{ color: data.texrColor }}>
			{data.message}
		</div>
	);
};
