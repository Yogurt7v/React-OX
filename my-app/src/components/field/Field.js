import style from './field.module.css';

export const Field = () => {
	let arr = ['', '', '', '', '', '', '', '', ''];

	function setSymbol(item, index) {
		arr[index] = 'X';
		console.log(arr);
	}
	return (
		<div className={style.AppField}>
			{arr.map((item, index) => (
				<div
					onClick={() => setSymbol(item, index)}
					key={index}
					index={index}
					className={style.AppFieldCell}
				></div>
			))}
		</div>
	);
};
