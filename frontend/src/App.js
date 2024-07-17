import React, { useState } from 'react';
import './App.css';

function App() {
  const [rightColumnContent, setRightColumnContent] = useState(null);

  const handleClick = (text) => {
    if (text === 'Criar Funcionário') {
      setRightColumnContent(
        <div>
          <h2>Criar Funcionário</h2>
          <p>Aqui você pode criar um novo funcionário.</p>
        </div>
      );
    } else if (text === 'Listar Funcionários') {
      setRightColumnContent(
        <div>
          <h2>Listar Funcionários</h2>
          <p>Aqui você pode ver a lista de todos os funcionários.</p>
        </div>
      );
    } else {
      alert(`Você clicou em: ${text}`);
    }
  };

  return (
    <div className="App">
      <header className="header">Header Fixo</header>
      <div className="container">
        <div className="column column-left">
          <p onClick={() => handleClick('Criar Funcionário')}>Criar Funcionário</p>
          <p onClick={() => handleClick('Listar Funcionários')}>Listar Funcionários</p>
          <p onClick={() => handleClick('Texto 3')}>Texto 3</p>
          {/* Adicione mais textos clicáveis conforme necessário */}
        </div>
        <div className="column column-right">
          {rightColumnContent}
        </div>
      </div>
    </div>
  );
}

export default App;
