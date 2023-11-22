import style from './field.module.css';

export const Field = (props) => {
	let a = props.arr;
	let s = props.symbol;
	let t = props.turnCount;

	function setArr(index) {
		if (!t % 2 === 0) {
			s = 'X';
			t++;
		} else {
			s = 'O';
			t++;
		}
		a[index] = `${s}`;
		console.log(a);
	}
	return (
		<div className={style.AppField}>
			{props.arr.map((item, index) => (
				<div
					onClick={() => setArr(index)}
					key={index}
					index={index}
					className={style.AppFieldCell}
				></div>
			))}
		</div>
	);
};
