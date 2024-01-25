import React, {Component} from 'react';
import { store } from '../../store';
import { connect } from 'react-redux';


const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

function isEqual(a, b) {
	if (a instanceof Array && b instanceof Array) {
		if (a.length !== b.length) {
			return false;
		}
		for (var i = 0; i < a.length; i++) {
			if (!isEqual(a[i], b[i])) {
				return false;
			}
		}
		return true;
	}
	return a === b;
}

const getFromState = (state) => {
	return {
		turnCount: state.turnCount,
		isGameEnded: state.isGameEnded,
		arr: state.arr,
		currentPlayer: state.currentPlayer,
		win: state.win

	  };
}

class Field extends Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	  }

	handleClick(index) {

		let arrX = [];
		let arrO = [];
		if (this.props.turnCount < 9 && this.props.isGameEnded === false) {
			if (this.props.arr[index] === '') {
				store.dispatch({type:"ADD_INDEX_TO_ARRAY", payload: index})
				this.props.arr[index] = `${this.props.currentPlayer}`;

			} else {
				alert('Эта ячейка уже занята');
			}
			this.props.arr.filter((item, index) => (item === 'X' ? arrX.push(index) : null));
			this.props.arr.filter((item, index) => (item === 'O' ? arrO.push(index) : null));

		if (this.props.win === '')
			WIN_PATTERNS.forEach((item) => {
				if (isEqual(arrX, item)) {
					store.dispatch({ type: 'WIN', payload: { message: "Победили крестики" } });
				} else if (isEqual(arrO, item)) {
					store.dispatch({ type: 'WIN', payload:{ message: "Победили нолики"} });
				}
			});
		} else {
			alert('Игра окончена');
			store.dispatch({ type: 'DRAW' });

		}

	}
	render(){
		const { handleClick } = this;
		return (
			<div className="AppField">
			{this.props.arr.map((item, index) => (
				<div
					onClick={() => handleClick(index)}
					key={index}
					index={index}
					className={"AppFieldCell"}
				>
					{this.props.arr[index]}
				</div>
			))}
			</div>
		)
	}
}

export default connect(getFromState)(Field);
