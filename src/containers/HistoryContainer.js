import { connect } from "react-redux"
import { backInHistory} from "../actions";
import History from "../component/History"

const mapDispatchToProps = dispatch => {
  return {
    backInHistory : (index) => dispatch(backInHistory(index))
  }
};

const mapStateToProps = (state) => {
  return { history : state.history.map((board, index) => 'Go back to ' + (index ? index : 'begin')) };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
