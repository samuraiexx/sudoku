import React from "react";
import SketchContainer from "../containers/SketchContainer";
import SquareContainer from "../containers/SquareContainer";

export const createBoard = () => {
  let board = [];
  for(let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++){
      row.push(
        <td key={j}>
          <div>
            <SquareContainer row={i} column={j}/>
            <SketchContainer row={i} column={j}/>
          </div>
        </td>
      );
    }
    board.push(<tr key={i}>{row}</tr>)
  }

  return board;
};


const Board = () => (
  <table className="board">
    <tbody>
    {createBoard(SquareContainer)}
    </tbody>
  </table>
);

export default Board;