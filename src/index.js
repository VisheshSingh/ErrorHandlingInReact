import React from "react";
import ReactDOM from "react-dom";
import BuggyCounter from "./BuggyCounter";
import Shield from "./Shield";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Shield>
        <BuggyCounter />
        <BuggyCounter />
      </Shield>
      <br />
      <Shield>
        <BuggyCounter />
      </Shield>
      <Shield>
        <BuggyCounter />
      </Shield>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
