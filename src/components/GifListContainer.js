import React from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer({ props }) {

  return (
    <div>
      <GifList />
      <GifSearch />
    </div>
  );
}

export default GifListContainer;