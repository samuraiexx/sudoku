import {CHANGE_VALUE} from "../constants";
import {create2dArray, isValid} from "../utils";

const hasConflict = (row, column, board) => {
  const value = board[row][column].value;
  if(!value) return false;

  for (let j = 0; j < 9; j++)
    if (j !== column && board[row][j].value === value) return true;

  for (let i = 0; i < 9; i++)
    if (i !== row && board[i][column].value === value) return true;

  const groupRow = Math.floor(row/3);
  const groupColumn = Math.floor(column/3);
  for(let i = groupRow*3; i < (groupRow + 1)*3; i++){
    for(let j = groupColumn*3; j < (groupColumn + 1)*3; j++) {
      if((i !== row || j !== column) && board[i][j].value === value) return true;
    }
  }

  return false;
};

export const boardInitialState = create2dArray(9, 9, {value: '', color: 'black'});

const board = (state = boardInitialState, action) => {
  switch(action.type) {
    case CHANGE_VALUE:
      if(!isValid(action.value)) return state;

      const newState = JSON.parse(JSON.stringify(state));

      newState[action.row][action.column].value = action.value;

      for(let i = 0; i < 9; i++)
        for(let j = 0; j < 9; j++)
          newState[i][j].color = hasConflict(i, j, newState) ? 'red' : 'black';

      return newState;
    default:
      return state;
  }
};

export default board;