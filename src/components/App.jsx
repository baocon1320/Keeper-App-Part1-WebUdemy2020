import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

// import note db from node.js file
import noteData from "../notes";


function App() {
    return (
        <div>
            <Header />
            {noteData.map(noteEntry =>
                (<Note
                    key={noteEntry.key}
                    noteTitle={noteEntry.title}
                    noteContent={noteEntry.content}
                />)
            )}
            <Footer />
        </div>
    );
}

export default App;