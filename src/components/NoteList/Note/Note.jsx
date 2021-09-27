import React from 'react'
import './Note.scss'

const Note = ({note, setModalActive, setModalValue})=>{

    return(
        <div className = 'note-wrap'>
            <div className='note' 
                onClick={() => {
                setModalActive(true);
                setModalValue(note)
                }}>
             {note?.text}
             </div>
            <div className = 'delete-btn'><button>+</button></div>
        </div>
    )
}

export default Note
