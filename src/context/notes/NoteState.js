import React from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    // const s1 ={
    //     // eslint-disable-next-line
    //     "name":"Aryan",
    //     "class":"12 A"
    // }

  return (
    <NoteContext.Provider>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState