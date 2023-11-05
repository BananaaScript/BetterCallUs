import React, { createContext, useContext, useState } from 'react';

const NotesContext = createContext();

export function useNotes() {
  return useContext(NotesContext);
}

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState('');

  const saveNotes = (newNotes) => {
    setNotes(newNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, saveNotes }}>
      {children}
    </NotesContext.Provider>
  );
}
