import {SWAP_PEN, WriteModes} from "../constants";

export const writeModeInitialState = WriteModes.PEN;

const sketch = (state = writeModeInitialState, action) => {
  switch(action.type) {
    case SWAP_PEN:
      return state === WriteModes.PEN ? WriteModes.PENCIL : WriteModes.PEN;
    default:
      return state;
  }
}

export default sketch;
