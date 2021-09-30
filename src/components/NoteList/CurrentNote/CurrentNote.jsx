import React, { useState, useEffect, useRef } from "react";
import "./CurrentNote.scss";

const CurrentNote = ({
  modalValue,
  setModalActive,
  updateNote,
  createNote,
}) => {
  const [currentNote, setCurrentNote] = useState(modalValue);
  const textareaRef = useRef();

  useEffect(() => textareaRef.current.focus());

  useEffect(() => {
    setCurrentNote(modalValue);
  }, [modalValue]);

  const saveNote = () => {
    setModalActive(false);

    if (currentNote.id) {
      updateNote(currentNote);
    } else {
      createNote({ ...currentNote, id: Date.now() });
    }
  };

  return (
    <div className="current-note-wrap">
      <div className="exit-btn">
        <button
          onClick={() => {
            setModalActive(false);
            setCurrentNote(modalValue);
          }}
        >
          +
        </button>
      </div>
      <div className="content-wrap">
        <textarea
          ref={textareaRef}
          className="content"
          placeholder="New note..."
          value={currentNote?.value}
          onChange={(e) =>
            setCurrentNote({ ...currentNote, value: e.target.value })
          }
        />
      </div>
      <div className="tags-wrap">
        <div className="tags">#Текущие #теги</div>
      </div>
      <div className="save-btn">
        <button disabled={!currentNote?.value} onClick={saveNote}>
          save
        </button>
      </div>
    </div>
  );
};
export default CurrentNote;

//TODO disabled save button
