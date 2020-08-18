import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    // handle list of notes
    const [notes, setNotes] = useState([]);


    // Add new note
    function addNewNote(newNote){
        
        setNotes((preValue) => {
            return [... preValue, newNote];
        })

    }

    // Remove a note
    function removeANote(rmIndex){
        setNotes((preValue) => {
            return preValue.filter((value, index) => index != rmIndex);
        })
    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
      {notes.map((note, index) => {
          return (<Note key={index} title={note.title} content={note.content} index={index} onDelete={removeANote} />);
      })}
      <Footer />
    </div>
  );
}

export default App;
