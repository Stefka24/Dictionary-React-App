import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [wordInput, setWordInput] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${wordInput}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleWordInputChange(event) {
    setWordInput(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-form"
            placeholder="Type a word or a phrase"
            onChange={handleWordInputChange}
          />
          <input type="submit" className="search-button" value="search" />
        </form>
        <div className="source">
          <a href="https://github.com/Stefka24/Dictionary-React-App">
            Open source
          </a>{" "}
          by Stefka Bodurova
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
