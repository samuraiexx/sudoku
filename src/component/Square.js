import React from "react";
import PropTypes from "prop-types";

const Square = props => (
    <input className="square" style={ { color: props.color}} type="text" value={props.value} onChange= { (event) => {
      return props.handleChange(props.row, props.column, event.target.value);
    } }/>
);

Square.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Square;