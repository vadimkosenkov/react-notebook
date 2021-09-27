import React from 'react'

import NoteList from './components/NoteList/NoteList.jsx';
import TagList from './components/TagList/TagList.jsx';
import { notes, tags } from './data/data.js';

function App() {


  return (
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
        <NoteList notes={notes}/>
          <div className='add-wrap'>
          <div className='add-logo'>+</div>
          </div>
        </div>
        </div>
      </main>
      </div>
      </div>
  );
}

export default App;
