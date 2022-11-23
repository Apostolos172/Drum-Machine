import React from "react";

const DrumPad = (props) => {
  return (
    // <div className="drum-pad-container drum-pad col-sm-4">
    <button className="drum-pad col-sm-4" id={props.pad.name} onClick={props.playAudio}>
      {props.pad.key}
      <audio
        src={props.pad.src}
        className="clip"
        id={props.pad.key}
      ></audio>
    </button>
    // </div>
  );
};

export default DrumPad;
