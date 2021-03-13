import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Sidebar from './sidebar';
import Main from './Main';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((notes) => {
      if (notes.id === activeNote) {
        return updatedNote;
      }
      return notes;
    });
    setNotes(updatedNotesArray);
  };
  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((notes) => notes.id !== idToDelete));
  };
  const getActiveNote = () => {
    return notes.find((notes) => notes.id === activeNote);
  };
  return (
    <div className='App'>
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
