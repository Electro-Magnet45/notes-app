import React from "react";
import "./Note.css";

const Note = ({ title, colour }) => {
  return (
    <div className="note">
      <div className="note__container" style={{ backgroundColor: colour }}>
        <div className="note_container__title">
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Note;
