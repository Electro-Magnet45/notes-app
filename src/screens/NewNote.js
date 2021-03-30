import React, { useState } from "react";
import "./css/NewNote.css";
import Header from "../components/Header";

import { TextareaAutosize, Button } from "@material-ui/core";

const NewNote = () => {
  //
  const [newNote, setNewNote] = useState("");

  const submitNote = () => {
    const previousNotes = JSON.parse(localStorage.getItem("notes"));
    if (previousNotes) {
      const newNotes = { _id: Math.random(), title: newNote, body: newNote };
      const noteToAdd = [
        newNotes,
        ...JSON.parse(localStorage.getItem("notes")),
      ];
      localStorage.setItem("notes", JSON.stringify(noteToAdd));
    } else {
      const newNotes = [{ _id: Math.random(), title: newNote, body: newNote }];
      localStorage.setItem("notes", JSON.stringify(newNotes));
    }
    setNewNote("");
  };

  return (
    <div className="newNote">
      <Header />
      <div className="newNote__container">
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="New Note"
          value={newNote}
          onInput={(e) => setNewNote(e.target.value)}
        />
        <div className="newNote_buttton">
          <Button variant="contained" onClick={submitNote}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
