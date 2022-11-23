// import logo from "./logo.svg";
import "./App.css";
import "./css/style.css";
import DrumPadsContainer from './components/DrumPadsContainer';
import DisplayContainer from "./components/DisplayContainer";
import { useState } from "react";

function App() {

  const [displayText, setDisplayText] = useState("");
  const playAudio = (event) => {
    console.log(event.target.id);
    let audio = document.querySelector("#"+event.target.id+" > audio");
    console.log(audio);
    audio.play();
    setDisplayText(audio.id);
    console.log(audio.id);
  }

  return (
    <div className="App container">
      <div className="row" id="drum-machine">
        <DrumPadsContainer playAudio={playAudio}></DrumPadsContainer>
        <DisplayContainer></DisplayContainer>
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
