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
      // Simulação de dados de funcionários (pode ser substituído por dados reais)
      const funcionarios = [
        { id: 1, nome: 'João', imagem: 'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg' },
        { id: 2, nome: 'Maria', imagem: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg' },
        { id: 3, nome: 'Pedro', imagem: 'https://i.pinimg.com/236x/2c/80/fa/2c80fa1128ae7769a9362596346ba9d8.jpg' }
      ];

      // Renderização dos cards dos funcionários
      const cardsFuncionarios = funcionarios.map((funcionario) => (
        <div key={funcionario.id} className="card">
          <img src={funcionario.imagem} alt={`Imagem de ${funcionario.nome}`} />
          <p>{funcionario.nome}</p>
        </div>
      ));

      setRightColumnContent(
        <div>
          <h2>Listar Funcionários</h2>
          <div className="card-container">
            {cardsFuncionarios}
          </div>
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
