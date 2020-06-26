import React from "react";
import "./App.css";
import Home from "./components";
import Cv from "./components/Cv";

import { Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/cv" component={Cv} />
    </div>
  );
}

export default App;
