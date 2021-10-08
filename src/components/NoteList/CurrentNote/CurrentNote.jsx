import React, { useState, useEffect } from "react";
import CurrentTag from "../../TagList/CurrentTag/CurrentTag";
import NoteContent from "../NoteContent/NoteContent";
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

  const regExp = new RegExp(" |&nbsp;");

  useEffect(() => {
    setCurrentNote({ ...modalValue });
  }, [modalValue]);

  useEffect(() => {
    checkTags();
  }, [currentNote.value]);

  const reCheckTags = () => {
    const matches = currentNote?.value?.match(/#\w+/g) || [];
    setTagsState([...tagsState, ...matches.map((e) => e.slice(1))]);
  };

  const saveNote = () => {
    setModalActive(false);

    const editNote = {
      ...currentNote,
      value: currentNote.value
        .split(" ")
        .map((e) => (e[0] === "#" ? e.slice(1) : e))
        .join(" "),
    };

    if (editNote.id) {
      updateNote(editNote);
    } else {
      createNote({ ...editNote, id: Date.now() });
    }
    reCheckTags();
  };

  const checkTags = () => {
    const noteArr = currentNote?.value?.split(regExp);

    const resultTags = [];
    for (let i = 0; i < noteArr?.length; i++) {
      for (let j = 0; j < tagsState?.length; j++) {
        if (noteArr[i].trim() === tagsState[j]) {
          resultTags.push(noteArr[i].toLowerCase().trim());
        }
      }
    }
    const resultNote = noteArr
      ?.map((e) =>
        resultTags.indexOf(e.toLowerCase().trim()) !== -1
          ? `<span style="color:#2f8b98; font-weight:700">${e}</span>`
          : e
      )
      .join(" ");
    setCurrentTag(Array.from(new Set(resultTags)));
    setCurrentNote({ ...currentNote, value1: resultNote });
  };

  return (
    <div className="current-note-wrap">
      <div className="exit-btn">
        <button
          onClick={() => {
            setModalActive(false);
            setCurrentNote({ ...currentNote, value: currentNote.value1 });
            setCurrentTag([]);
          }}
        >
          +
        </button>
      </div>
      <NoteContent currentNote={currentNote} setCurrentNote={setCurrentNote} />
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
