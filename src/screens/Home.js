import React, { useEffect, useState } from "react";
import "./css/Home.css";
import Header from "../components/Header";

/* import fakeData from "../fakeData"; */
import Note from "../components/Note";

const Home = () => {
  //
  const colours = [
    "#ffab91",
    "#ffcc80",
    "#e6ee9b",
    "#80deea",
    "#cf93d9",
    "#b80c09",
    "#0b4f6c",
    "#01baef",
    "#8075ff",
    "#648de5",
  ];

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")));
  }, []);

  return (
    <div className="home">
      <Header />

      <div className="home__container">
        <div className="home_notes__div">
          {notes &&
            notes.map((note) => {
              return (
                <Note
                  key={note._id}
                  title={note.title}
                  colour={colours[Math.floor(Math.random() * colours.length)]}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
