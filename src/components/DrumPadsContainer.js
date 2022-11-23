import React from "react";
import DrumPad from "./DrumPad";

const firstRowPads = [
  {
    key: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater-1",
  },
  {
    key: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater-2",
  },
  {
    key: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater-3",
  },
];
const secondRowPads = [
  {
    key: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater-4",
  },
  {
    key: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Clap",
  },
  {
    key: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Open-HH",
  },
];
const thirdRowPads = [
  {
    key: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick-n-Hat",
  },
  {
    key: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Kick",
  },
  {
    key: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Closed-HH",
  },
];

const DrumPadsContainer = (props) => {
  const firstRowPadsDisplay = firstRowPads.map((pad) => {
    return (
      <DrumPad pad={pad} key={pad.key} playAudio={props.playAudio}></DrumPad>
    );
  });

  const secondRowPadsDisplay = secondRowPads.map((pad) => {
    return (
      <DrumPad pad={pad} key={pad.key} playAudio={props.playAudio}></DrumPad>
    );
  });

  const thirdRowPadsDisplay = thirdRowPads.map((pad) => {
    return (
      <DrumPad pad={pad} key={pad.key} playAudio={props.playAudio}></DrumPad>
    );
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
