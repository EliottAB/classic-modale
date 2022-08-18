import React from 'react';
import { render } from "react-dom";
import { Modale } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <Modale backgroundShadow/>
  </div>
);

render(<App />, document.getElementById("root"));
