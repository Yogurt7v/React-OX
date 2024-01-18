import { useSelector } from 'react-redux';
import style from './information.module.css';


export const Information = () => {

	const message = useSelector((state) => state.message);
	const color = useSelector((state) => state.textColor);

	return (
		<div className={style.Information} style={{ color: color }}>
			{message}
		</div>
	);
};
