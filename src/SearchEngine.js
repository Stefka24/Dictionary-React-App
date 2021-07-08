import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [wordInput, setWordInput] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Loading definitions for ${wordInput}`);
  }
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
