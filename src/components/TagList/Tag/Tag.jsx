import React from 'react'

const Tag = ({tag})=>{
    return <li>{`#${tag.text}`}</li>
}

export default Tag
