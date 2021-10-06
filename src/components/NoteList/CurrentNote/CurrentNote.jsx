import React, { useState, useEffect, useRef } from "react";
import CurrentTag from "../../TagList/CurrentTag/CurrentTag";
import "./CurrentNote.scss";

const CurrentNote = ({
  modalValue,
  tagsState,
  updateNote,
  createNote,
  setModalActive,
  setTagsState,
}) => {
  const [currentNote, setCurrentNote] = useState({ ...modalValue });
  const [currentTag, setCurrentTag] = useState([]);
  const textareaRef = useRef();

  useEffect(() => textareaRef.current.focus());

  useEffect(() => {
    setCurrentNote(modalValue);
  }, [modalValue]);

  useEffect(() => {
    checkTags();
  }, [currentNote]);

  const saveNote = () => {
    setModalActive(false);
    if (currentNote.id) {
      updateNote(currentNote);
    } else {
      createNote({ ...currentNote, id: Date.now() });
    }
  };

  const checkTags = () => {
    const noteArr = currentNote?.value?.split(" ");
    const resultTags = [];
    for (let i = 0; i < noteArr?.length; i++) {
      for (let j = 0; j < tagsState?.length; j++) {
        if (noteArr[i] === tagsState[j]) {
          resultTags.push(noteArr[i]);
        }
      }
    }
    setCurrentTag(resultTags);
  };

  return (
    <div className="current-note-wrap">
      <div className="exit-btn">
        <button
          onClick={() => {
            setModalActive(false);
            setCurrentNote(modalValue);
            setCurrentTag([]);
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
      <CurrentTag currentTag={currentTag} />
      <div className="save-btn">
        <button disabled={!currentNote?.value} onClick={saveNote}>
          save
        </button>
      </div>
    </div>
  );
};
export default CurrentNote;

//TODO move styles to the required components
