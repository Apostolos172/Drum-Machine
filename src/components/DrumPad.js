import React from "react";

const DrumPad = (props) => {
  return (
    // <div className="drum-pad-container drum-pad col-sm-4">
    <button className="drum-pad col-sm-4" id={props.letter}>
      {props.letter}
      <audio
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        className="clip"
        id={props.letter}
      ></audio>
    </button>
    // </div>
  );
};

export default DrumPad;
