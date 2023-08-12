import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

  function removeNote(event){
    console.log(props.id);
    props.onDelete(props.id);
    event.preventDefault();
  }

  function editNote(event){
    props.onUpdate(props.id);
    event.preventDefault();
  }
  return (
    
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={removeNote}><DeleteIcon/></button>
    </div>
  );
}

export default Note;