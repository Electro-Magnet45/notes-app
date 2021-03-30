import React from "react";
import "./Header.css";

import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const Header = () => {
  //
  var history = useHistory();

  return (
    <div className="header">
      <div className="header__title">
        <h2 onClick={() => history.push("/")}>Notes</h2>
      </div>

      <div className="header__account">
        <div className="headerAccount__newNoteBtn">
          <Button variant="contained" onClick={() => history.push("/note/new")}>
            New Note
          </Button>
        </div>

        <div className="headerAccount__loginBtn">
          <Button variant="contained">Log In</Button>
        </div>
        <div className="headerAccount__signinBtn">
          <Button variant="contained">Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
