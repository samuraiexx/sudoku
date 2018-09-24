import {CHANGE_VALUE} from "../constants";
import {create2dArray, isValid} from "../utils";

export const sketchInitialState = create2dArray(9, 9, []);

const sketch = (state = sketchInitialState, action) => {
  switch(action.type) {
    case CHANGE_VALUE:
      if(!isValid(action.value)) return state;
      const newState = [...state];

      newState[action.row] = [...state[action.row]];
      newState[action.row][action.column] = [...state[action.row][action.column]];
      newState[action.row][action.column][action.value] = !state[action.row][action.column][action.value];

      return newState;
    default:
      return state;
  }
};

export default sketch;
