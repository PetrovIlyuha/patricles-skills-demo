import React from "react";
import "./App.css";
import Home from "./components";
import Cv from "./components/Cv";
import Contacts from "./components/Contacts";

import { Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/cv" component={Cv} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/portfolio" component={Projects} />
    </div>
  );
}

export default App;
