import React from "react";
import Board from "./Board";
import HistoryContainer from "../containers/HistoryContainer";
import PropTypes from "prop-types";

const Game = (props) => {
  return <div
    className="game">
    <div>
      <Board/>
      <input type='button' value={ props.writeMode } onClick={ (event) => {
        event.preventDefault();
        props.swapPen();
      }} />
    </div>
    <HistoryContainer />
  </div>
};

Game.propTypes = {
  writeMode: PropTypes.string.isRequired,
  swapPen: PropTypes.func.isRequired
};

export default Game;