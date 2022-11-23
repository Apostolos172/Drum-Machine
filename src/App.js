// import logo from "./logo.svg";
import "./App.css";
import "./css/style.css";
import DrumPadsContainer from './components/DrumPadsContainer';
import DisplayContainer from "./components/DisplayContainer";
import { useState } from "react";

function App() {

  const [displayText, setDisplayText] = useState("Nothing important to display");
  const playAudio = (event) => {
    let id = event.target.id
    console.log(id);
    let audio = document.querySelector("#"+id+" > audio");
    console.log(audio);
    audio.play();
    setDisplayText(id);
    console.log(audio.id);
  }

  return (
    <div className="App container">
      <div className="row" id="drum-machine">
        <DrumPadsContainer playAudio={playAudio}></DrumPadsContainer>
        <DisplayContainer displayText={displayText}></DisplayContainer>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
