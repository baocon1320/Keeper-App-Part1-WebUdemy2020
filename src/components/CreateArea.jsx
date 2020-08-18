import React, {useState} from "react";

function CreateArea(props) {

  // Keep track of title and content
  //const [title, setTitle] = useState("");
  //const [content, setContent] = useState("");

  const [note, setNote] = useState({
      title: "",
      content: ""
  });

  function handleChange(event){
      const {name, value} = event.target;

      setNote((preValue => {
          return {
              ... preValue,
              [name]: value
          }
      }))
  }
  /*
  function handleTitleChange(event){
      const newTitle = event.target.value;
      setTitle(newTitle);
  }

  function handleContentChange(event){
    const newContent = event.target.value;
    setContent(newContent);
  }
  */

  function addNote(event){
    props.onAdd(note);
    //setTitle("");
    //setContent("");
    setNote({
        title: "",
        content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />
        <button>Add</button>          
      </form>
    </div>
  );
}

export default CreateArea;
