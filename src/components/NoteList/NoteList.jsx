import React from "react";
import Note from "./Note/Note";

const NoteList = ({ notes, setModalActive, setModalValue }) => {
  return (
    <div className="note-list">
      {notes.map((note) => {
        return <Note key={note.id} note={note} setModalValue={setModalValue} setModalActive={setModalActive} />;
      })}
    </div>
  );
};

export default NoteList;
