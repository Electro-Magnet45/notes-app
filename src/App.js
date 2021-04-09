import React, { useEffect } from "react";
import "./App.css";
import Home from "./screens/Home";
import NewNote from "./screens/NewNote";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import abcd from "./envTest";

function App() {
  //
  useEffect(() => {
    abcd();
    console.log(process.env.REACT_APP_NOT_SECRET_CODE);
  }, []);

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
