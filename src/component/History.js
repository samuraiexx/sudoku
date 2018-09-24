import React from "react";
import PropTypes from "prop-types";

const handleClick = (index, props, event) => {
  event.preventDefault();
  props.backInHistory(index);
};

const History = (props) => {
  return (
    <div className="history">
      { props.history.map((value, index) => (
        <span key={index}>
          <a onClick={(event) => handleClick(index, props, event)}>{value}</a><br/>
        </span>
      ))}
    </div>
  )
};

History.propTypes = {
  history: PropTypes.array.isRequired,
  backInHistory: PropTypes.func.isRequired
};

export default History;