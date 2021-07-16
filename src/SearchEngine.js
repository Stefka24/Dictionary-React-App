import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [wordInput, setWordInput] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${wordInput}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001e6372cd9a28c4693beb3334dec66d7e6";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${wordInput}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
        <Results results={results} />
        <Photos photos={photos} />
        <div className="source">
          <a
            href="https://github.com/Stefka24/Dictionary-React-App"
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>{" "}
          by Stefka Bodurova
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
