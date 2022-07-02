import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const [click, setClick] = useState("");

  function handleChange(event) {
    setClick(false);
    console.log(
      event.target.placeholder +
        " :" +
        event.target.value +
        " type:" +
        event.target.type
    );
    setName(event.target.value);
  }

  function handleClick(event) {
    setClick(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {click}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
