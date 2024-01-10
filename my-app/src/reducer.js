import { useEffect } from "react";

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
	WIN_PATTERNS : [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	],
}


export const appReducer = (state = initialState, action) => {

	const { type, payload } = action;

	switch (type) {
		case "NEXT_TURN":{
			console.log("NEXT_TURN", payload);
			return "NEXT_TURN";
		}
		case "RESTART":{
			console.log("restart");
			return { ...state,
				arrX : [],
				arrO : [],
				arr :['', '', '', '', '', '', '', '', ''],
				turnCount : 1 ,
				currentPlayer :  'X',
				isDraw : false,
				isGameEnded : false,
				message : "Ходит игрок X",
				win : '',
				textColor : 'black',
			}
		}
		default: {
			return state;
		}

	}
}
