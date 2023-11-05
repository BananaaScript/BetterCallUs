import React, { useState, useEffect } from 'react';

const Notes: React.FC = () => {
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedNote = event.target.value;
    setNote(updatedNote);
    localStorage.setItem('note', updatedNote);
  };

  return (
    <div>
      <h2>Meu Bloco de Notas</h2>
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Digite suas notas aqui..."
      />
    </div>
  );
};

export default Notes;
