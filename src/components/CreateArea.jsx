import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });

  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();

  }



  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <Fab onClick={submitNote}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
