import React from "react";
import "./App.css";
import Home from "./screens/Home";
import NewNote from "./screens/NewNote";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/note/new">
            <NewNote />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
