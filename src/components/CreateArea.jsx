import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);
  const [notes, setNote] = useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const {name, value}=event.target;
    let obj = {...notes};
    if(name==="title") obj.title=value;
    else if(name==="content") obj.content=value;
    setNote(obj);
  }

  function submitNote(event){
    props.onAdd(notes);
    setNote({title:"",content:""})
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form>
      {
        isExpanded && 
      <input name="title" placeholder="Title" onChange={handleChange} value={notes.title}/>
      }
        
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={notes.content}
          onChange={handleChange}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
        <button onClick={submitNote}><AddIcon/></button>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
