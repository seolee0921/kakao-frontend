import React, { ChangeEvent, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./TODO";

const App = (): JSX.Element => {
  useEffect(() => {
    alert("hello");
  }, []);

  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
};

export default App;
