import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import { AnimatePresence } from "framer-motion";

ReactDOM.render(
  <Router>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();
