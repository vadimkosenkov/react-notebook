import React from 'react'
import './CurrentNote.scss'


const CurrentNote = ({modalValue, setModalActive})=>{
return (
    <div className='current-note-wrap'>
        <div className='exit-btn'>
            <button 
            onClick={()=>{
                setModalActive(false)
                }}>+</button>
        </div>
        <div className='content-wrap'>
            <textarea className='content' defaultValue={modalValue?.text}/>
            {/* <div className='content' contentEditable>{modalValue?.text}</div> */}
        </div>
        <div className='tags-wrap'>
            <div className='tags'>#Текущие #теги</div>
        </div>
        <div className='save-btn'>
            <button 
            onClick={()=>{
                setModalActive(false)
                } }>save</button>
        </div>
 
    </div>
)
}
export default CurrentNote