import sketch, {sketchInitialState} from "./sketch"
import history, {historyInitialState} from "./history"
import writeMode, {writeModeInitialState} from "./writeMode"
import {WriteModes} from "../constants"

export const initialState = {
  history: historyInitialState,
  writeMode: writeModeInitialState,
  sketch: sketchInitialState
};

const combinedReducers = (state = initialState, action) => {
  return ({
    history: history(state.history, action, state.writeMode),
    writeMode: writeMode(state.writeMode, action),
    sketch: state.writeMode === WriteModes.PENCIL ? sketch(state.sketch, action) : state.sketch,
  });
};

export default combinedReducers;
