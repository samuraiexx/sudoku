import { connect } from "react-redux"
import Sketch from "../component/Sketch"

const mapStateToProps = (state, props) => {
  const history = state.history;
  if(history[history.length - 1][props.row][props.column].value)
    return {};

  const square = state.sketch[props.row][props.column];
  let value = '';
  for(let i = 1; i <= 9; i++)
    if(square[i]) value += ' ' + i;
  return {value}
};

export default connect(mapStateToProps)(Sketch);
