import React from 'react';
import SupportNotes from './SupportNotes';
import { NotesProvider } from './NotesContext';

function App() {
  return (
    <NotesProvider>
      {}
      <div>
        <h2>Pergunta do Cliente</h2>
        <p>Esta é a pergunta do cliente.</p>
      </div>

      <div>
        <h2>Resposta do Suporte</h2>
        <p>Esta é a resposta do suporte.</p>
      </div>

      {/* Adicione a caixa de anotações de suporte */}
      <SupportNotes />
    </NotesProvider>
  );
}

export default App;

