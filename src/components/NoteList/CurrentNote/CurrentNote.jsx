import React, { useState, useEffect, useRef } from "react";
import "./CurrentNote.scss";

const CurrentNote = ({ modalValue, setModalActive, updateNote }) => {
  const [currentNote, setCurrentNote] = useState(modalValue);
  const textareaRef = useRef();

  useEffect(() => textareaRef.current.focus());

  useEffect(() => {
    setCurrentNote(modalValue);
  }, [modalValue]);

  return (
    <div className="current-note-wrap">
      <div className="exit-btn">
        <button
          onClick={() => {
            setModalActive(false);
            setCurrentNote(modalValue?.value);
          }}
        >
          +
        </button>
      </div>
      <div className="content-wrap">
        <textarea
          ref={textareaRef}
          className="content"
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
        <button
          onClick={() => {
            setModalActive(false);
            updateNote(currentNote);
          }}
        >
          save
        </button>
      </div>
    </div>
  );
};
export default CurrentNote;
