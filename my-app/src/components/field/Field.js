import style from './field.module.css';

export const Field = () => {
	let arr = ['', '', '', '', '', '', '', '', ''];
	return (
		<div className={style.AppField}>
			{arr.map((item, index) => (
				<div key={index} index={index} className={style.AppFieldCell}></div>
			))}
		</div>
	);
};
