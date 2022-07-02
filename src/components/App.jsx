import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(
      event.target.placeholder +
        " :" +
        event.target.value +
        " type:" +
        event.target.type
    );
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
