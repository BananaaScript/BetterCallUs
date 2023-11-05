import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SupportNotes() {
  const [notes, setNotes] = useState('');

  // Recupere as anotações salvas no localStorage quando o componente é montado
  useEffect(() => {
    const savedNotes = localStorage.getItem('supportNotes');
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const handleNotesChange = (event) => {
    const newNotes = event.target.value;
    setNotes(newNotes);
  };

  const handleSaveNotes = () => {
    axios.post('sua_url_da_api', { notes })
      .then(response => {
        console.log('Anotações salvas no servidor:', response.data);

        localStorage.removeItem('supportNotes');
      })
      .catch(error => {
        console.error('Erro ao salvar as anotações no servidor:', error);
      });
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Anotações do suporte"
        value={notes}
        onChange={handleNotesChange}
      />
      <button onClick={handleSaveNotes}>Salvar Anotações</button>
    </div>
  );
}

export default SupportNotes;