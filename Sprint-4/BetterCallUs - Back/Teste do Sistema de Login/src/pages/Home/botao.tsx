// Em Botao.tsx
import React, { useState, ReactNode } from 'react';

interface BotaoProps {
  conteudo: ReactNode;
  textoBotao: string;
}

const Botao: React.FC<BotaoProps> = ({ conteudo, textoBotao }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };



  
  return (
    <>
      <button className="quadrado" onClick={toggleContent}>
        {textoBotao}
      </button>
      <div className={isContentVisible ? '' : 'conteudo-escondido'} id="conteudo">
        {conteudo}
      </div>
    </>
  );
};

export default Botao;
