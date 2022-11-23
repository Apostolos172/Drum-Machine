import React from "react";
// css will be added through style file

const DisplayContainer = (props) => {
  return (
    <div className="display-container row col-sm-4">
      <div className="" id="display">{props.displayText}</div>
    </div>
  );
};

export default DisplayContainer;
