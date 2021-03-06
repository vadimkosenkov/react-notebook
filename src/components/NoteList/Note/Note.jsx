import React, { useContext } from "react";
import Context from "../../../context";
import "./Note.scss";

const Note = ({ note, setModalActive, setModalValue }) => {
  const { deleteNote } = useContext(Context);

  return (
    <div className="note-wrap">
      <div
        className="note"
        onClick={() => {
          setModalActive(true);
          setModalValue(note);
        }}
      >
        {note?.value}
      </div>
      <div
        className="delete-btn"
        onClick={() => {
          deleteNote(note.id);
        }}
      >
        <button>+</button>
      </div>
    </div>
  );
};

export default Note;
