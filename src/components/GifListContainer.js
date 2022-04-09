import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const API = (query) => `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=mJNUkkfAMiBim7KnebfO7FcQmJTFxCUI&limit=3`

function GifListContainer() {

  const [gifs, setGifs] = useState([]);

  console.log("Gifs:", gifs)

  function handleSearch(searchTerm) {
    fetch(API(searchTerm))
    .then(r => r.json())
    .then(data => {setGifs(data.data)
    console.log("Data:", data.data)})
  }

  return (
    <div>
      <GifList gifs={gifs} />
      <GifSearch onSearch={handleSearch} />
    </div>
  );
}

export default GifListContainer;