import Game from "../component/Game";
import { connect } from "react-redux"
import { swapPen} from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    swapPen: () => dispatch(swapPen())
  }
};

const mapStateToProps = (state) => {
  return { writeMode: state.writeMode}
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);