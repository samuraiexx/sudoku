import { connect } from "react-redux"
import Square from "../component/Square"
import { changeValue } from "../actions"

const mapDispatchToProps = dispatch => {
  return {
    handleChange: (row, column, value) => dispatch(changeValue(row, column, value))
  }
};

const mapStateToProps = (state, props) => {
  const history = state.history;
  const value = history[history.length - 1][props.row][props.column];
  if(value) return value;
  else return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
