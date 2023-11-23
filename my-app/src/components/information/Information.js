import style from './information.module.css';

export const Information = (props) => {
	return <div className={style.Information}>{String(props.isDraw)}</div>;
};
