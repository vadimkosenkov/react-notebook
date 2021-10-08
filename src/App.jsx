import React, { useState } from "react";
import "./App.scss";
import Modal from "./components/Modal/Modal.jsx";
import CurrentNote from "./components/NoteList/CurrentNote/CurrentNote.jsx";

import NoteList from "./components/NoteList/NoteList.jsx";
import TagList from "./components/TagList/TagList.jsx";
import Context from "./context.js";
import data from "./data/data.json";

function App() {
  const [modalActive, setModalActive] = useState();
  const [modalValue, setModalValue] = useState();
  const [notesState, setNotesState] = useState([...data.notes]);
  const [tagsState, setTagsState] = useState([...data.tags]);

  const deleteNote = (id) => {
    setNotesState(notesState.filter((item) => item.id !== id));
  };

  const updateNote = (note) => {
    setNotesState(
      notesState.map((item) => (item.id === note.id ? note : item))
    );
  };

  const addNote = () => {
    const newNote = { id: null, value: "" };
    setModalValue(newNote);
    setModalActive(true);
  };

  const createNote = (note) => {
    setNotesState([...notesState, note]);
  };

  return (
    <Context.Provider value={{ deleteNote }}>
      <div className="app">
        <div className="wrap">
          <header className="header">Notepad</header>
          <main className="main">
            <div className="tag-list-wrap">
              <div className="title">Tag list</div>
              <div className="tag-list">
                <ul>
                  <TagList tags={tagsState} />
                </ul>
              </div>
            </div>
            <div className="note-list-wrap">
              <div className="title">Note list</div>
              <div className="note-list-container">
                <NoteList
                  notes={notesState}
                  setModalActive={setModalActive}
                  setModalValue={setModalValue}
                />
                <Modal modalActive={modalActive}>
                  <CurrentNote
                    modalValue={{ ...modalValue }}
                    createNote={createNote}
                    updateNote={updateNote}
                    tagsState={tagsState}
                    setModalActive={setModalActive}
                    setTagsState={setTagsState}
                  />
                </Modal>
                <div className="add-wrap">
                  <div className="add-logo" onClick={addNote}>
                    +
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
