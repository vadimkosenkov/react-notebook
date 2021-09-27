import React, {useState} from 'react'
import Modal from '../Modal/Modal';
import CurrentNote from './CurrentNote/CurrentNote';
import Note from './Note/Note'

const NoteList = ({notes})=>{
const [modalActive, setModalActive] = useState();
const [modalValue, setModalValue ] = useState();

    return(
     <div className='note-list'>
         {notes.map(note=>{ return <Note key={note.id} note={note} setModalValue={setModalValue} setModalActive={setModalActive}/>})}
         <Modal modalActive={modalActive} setModalActive={setModalActive}>
             <CurrentNote setModalActive = {setModalActive} modalValue={modalValue}/>
         </Modal>
     </div> 

    )
}

export default NoteList
