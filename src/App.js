import logo from "./images/logo.png";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <img src={logo} className="logo" alt="logo" />
          Dictionary
        </h1>
      </header>
    </div>
  );
}
