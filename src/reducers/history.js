import {BACK_IN_HISTORY, CHANGE_VALUE, WriteModes} from "../constants";
import board, {boardInitialState} from "./board"

export const historyInitialState = [ boardInitialState ];

const history = (state = historyInitialState, action, writeMode) => {
  switch(action.type) {
    case BACK_IN_HISTORY:
      return state.slice(0, action.index + 1);

    case CHANGE_VALUE:
      if(writeMode !== WriteModes.PEN) return state;
      const newState = [...state];
      const newBoard = board(state[state.length - 1], action);

      if(newBoard !== state[state.length - 1]) {
        newState.push(newBoard);
        return newState;
      } else return state;

    default:
      return state;
  }
};

export default history;
