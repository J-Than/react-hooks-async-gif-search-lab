import React, { useState } from "react";

function GifSearch({ onSearch }) {

  const [formText, setFormText] = useState("");

  function handleText(e) {
    setFormText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(formText);
    setFormText("");
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type="text" placeholder="Find a gif!" value={formText} onChange={handleText} ></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;