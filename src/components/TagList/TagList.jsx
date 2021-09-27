import React from 'react'
import Tag from './Tag/Tag'

const NoteList = ({tags})=>{
    return(
     <div className='tag-list'>
         <ul>
         {tags.map(tag=>{ return <Tag key={tag.id} tag={tag}/>})}
         </ul>
     </div> 

    )
}

export default NoteList
