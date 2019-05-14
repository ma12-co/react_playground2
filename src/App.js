import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card name="Marco" age="29" />
      <Card name="Giovanni" age="46" />
      <Card name="Luca" age="39" />
    </div>
  );
}

export default App;
