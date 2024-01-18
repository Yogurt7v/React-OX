
import { store } from "./store";

export const initialState = {
	arrX: [],
	arrO: [],
	arr : ['','','','','','','','',''],
	turnCount : 1,
	currentPlayer : 'X',
	isDraw : false,
	win : '',
	isGameEnded : false,
	textColor : 'black',
	message : "Ходит игрок X",

}


export const appReducer = (state = initialState, action) => {

	const { type, payload } = action;

	switch (type) {

		case "RESTART":{
			return {
				arrX: [],
				arrO: [],
				arr : ['','','','','','','','',''],
				turnCount : 1,
				currentPlayer : 'X',
				isDraw : false,
				win : '',
				isGameEnded : false,
				textColor : 'black',
				message : "Ходит игрок X",
			}
		}

		case "ADD_TURNCOUNT":{
			return {
				...state,
				turnCount : state.turnCount + 1
			}
		}

		case "ADD_INDEX_TO_ARRAY": {
			let newArr = [...state.arr];
			 newArr[payload] = state.currentPlayer
			let updetedCurrenUser = state.currentPlayer === "X" ? "O" : "X"

			return {
			  ...state,
				arr : newArr,
			  turnCount: state.turnCount + 1,
			  currentPlayer: updetedCurrenUser,
			  message : `Ходит игрок ${updetedCurrenUser}`,
			};
		  }
		case "WIN":{
			return {
				...state,
				message : payload.message,
				win : payload.win,
				isGameEnded : true,
				textColor : 'red',
			}
		}
		case "DRAW":{
			setTimeout(() => {
				store.dispatch({ type: 'RESTART' });
			},2000)
			return {
				...state,
				isDraw : true,
				textColor : 'green',
				message : "Ничья"
			}
		}
		default: {
			return state;
		}

	}
}
