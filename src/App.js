import logo from "./images/logo.png";
import SearchEngine from "./SearchEngine.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <img src={logo} className="logo" alt="logo" />
            Dictionary
          </h1>
        </header>
        <SearchEngine defaultKeyword="Hello" />
      </div>
    </div>
  );
}
