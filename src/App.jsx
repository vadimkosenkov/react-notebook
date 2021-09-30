import React, { useState } from "react";
import Modal from "./components/Modal/Modal.jsx";
import CurrentNote from "./components/NoteList/CurrentNote/CurrentNote.jsx";

import NoteList from "./components/NoteList/NoteList.jsx";
import TagList from "./components/TagList/TagList.jsx";
import Context from "./context.js";
import { notes, tags } from "./data/data.js";

function App() {
  const [modalActive, setModalActive] = useState();
  const [modalValue, setModalValue] = useState();
  const [notesState, setNotesState] = useState([...notes]);

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
                  <TagList tags={tags} />
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
                    setModalActive={setModalActive}
                    setModalValue={setModalValue}
                    updateNote={updateNote}
                    createNote={createNote}
                    modalValue={modalValue}
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
