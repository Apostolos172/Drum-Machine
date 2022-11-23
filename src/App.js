// import logo from "./logo.svg";
import "./App.css";
import "./css/style.css";
import DrumPadsContainer from './components/DrumPadsContainer';
import DisplayContainer from "./components/DisplayContainer";

function App() {
  return (
    <div className="App container">
      <div className="row" id="drum-machine">
        <DrumPadsContainer></DrumPadsContainer>
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
