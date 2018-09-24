import React from "react";
import PropTypes from "prop-types";

const Square = props => (
    <div className="sketch" type="text" value={props.value}>{props.value}</div>
);

Square.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default Square;