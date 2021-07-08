import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [wordInput, setWordInput] = useState(null);
  function search(event) {
    event.preventDefault();
  }
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${wordInput}`;
  axios.get(apiUrl).then(handleResponse);

  function handleWordInputChange(event) {
    event.preventDefault();
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
    </div>
  );
}
