import React from "react";
import DrumPad from "./DrumPad";

const firstRowPads = ["Q", "W", "E"];
const secondRowPads = ["A", "S", "D"];
const thirdRowPads = ["Z", "X", "C"];

const DrumPadsContainer = (props) => {
  const firstRowPadsDisplay = firstRowPads.map((letter) => {
    return <DrumPad letter={letter} key={letter}></DrumPad>;
  });

  const secondRowPadsDisplay = secondRowPads.map((letter) => {
    return <DrumPad letter={letter} key={letter}></DrumPad>;
  });

  const thirdRowPadsDisplay = thirdRowPads.map((letter) => {
    return <DrumPad letter={letter} key={letter}></DrumPad>;
  });

  return (
    <div className="drum-pads-container container col-sm-8">
      <div className="row">{firstRowPadsDisplay}</div>
      <div className="row">{secondRowPadsDisplay}</div>
      <div className="row">{thirdRowPadsDisplay}</div>
    </div>
  );
};

export default DrumPadsContainer;
