import React from 'react';
import './App.css';

function App() {
  // Função que será chamada ao clicar no texto
  const handleClick = (text) => {
    alert(`Você clicou em: ${text}`);
    // Você pode executar qualquer função aqui
  };

  return (
    <div className="App">
      <header className="header">Header Fixo</header>
      <div className="container">
        <div className="column column-left">
          <p onClick={() => handleClick('Texto 1')}>Texto 1</p>
          <p onClick={() => handleClick('Texto 2')}>Texto 2</p>
          <p onClick={() => handleClick('Texto 3')}>Texto 3</p>
          {/* Adicione mais textos clicáveis conforme necessário */}
        </div>
        <div className="column column-right"></div>
      </div>
    </div>
  );
}

export default App;
