import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";
import { useState } from "react";

export default function App(){

  const [notes, setNotes] = useState([]);

  function addNote(note){
   setNotes([...notes,note]);
  }

  function deleteNote(id){
    setNotes(notes.filter((note,idx)=>{
      return idx!=id;
    }))
  }

  return <div>
    <Header/>
    <CreateArea
      onAdd={addNote}
    />
    <div id="note-container">
    {notes.map((note,index)=>{

      return (<Note id={index} title={note.title} content={note.content} onDelete={deleteNote}/>)
    })}
    </div>
    <Footer/>
  </div>;
}