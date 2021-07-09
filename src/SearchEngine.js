import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [wordInput, setWordInput] = useState("");
  const [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${wordInput}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordInputChange(event) {
    setWordInput(event.target.value);
  }
  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <input
          type="search"
          className="search-form"
          placeholder="Type a word or a phrase"
          onChange={handleWordInputChange}
        />
        <input type="submit" className="search-button" value="search" />
      </form>
      <Results results={results} />
    </div>
  );
}
