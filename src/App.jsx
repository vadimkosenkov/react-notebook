import React, { useState } from 'react'
import Modal from './components/Modal/Modal.jsx';
import CurrentNote from './components/NoteList/CurrentNote/CurrentNote.jsx';

import NoteList from './components/NoteList/NoteList.jsx';
import TagList from './components/TagList/TagList.jsx';
import Context from './context.js';
import { notes, tags } from './data/data.js';

function App() {
  const [modalActive, setModalActive] = useState();
  const [modalValue, setModalValue ] = useState();
  const [notesState, setNotesTemp] = useState([...notes])

    const deleteNotes = (id)=> {
      setNotesTemp(notesState.filter(item=>item.id !== id))
    }

    const updateNote = (note)=> {
      setNotesTemp(notesState.map(item=>item.id === note.id ? note : item))
    }

    const addNotes=(value)=> {
      const newNote = {id: Date.now(), value: value};

      notesState.push(newNote)
      setModalValue(newNote)
      setNotesTemp(notesState)
    }

  return (
    <Context.Provider value={{deleteNotes}}>

    <div className="app">
      <div className='wrap'>
      <header className='header'>Notepad</header>
      <main className='main'>
        <div className='tag-list-wrap'>
          <div className='title'>Tag list</div> 
          <div className='tag-list'>
            <ul>
            <TagList tags={tags}/>
            </ul>
            </div> 
         </div>
        <div className='note-list-wrap'>
        <div className='title'>Note list</div> 
        <div className='note-list-container'>
        <NoteList notes={notesState} setModalActive={setModalActive} setModalValue={setModalValue}/>
        <Modal modalActive={modalActive} setModalActive={setModalActive}>
             <CurrentNote setModalActive = {setModalActive} setModalValue={setModalValue} updateNote={updateNote} modalValue={modalValue}/>
         </Modal>
          <div className='add-wrap'>
            <div className='add-logo' onClick={()=>{
              setModalActive(true)
              addNotes('')
            }}>+</div>
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
