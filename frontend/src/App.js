import React, { useState } from 'react';
import './App.css';

function App() {
  const [rightColumnContent, setRightColumnContent] = useState(null);
  const [dialogContent, setDialogContent] = useState(null);

  const handleClick = async (text) => {
    if (text === 'Criar Funcionário') {
      setRightColumnContent(
        <div>
          <h2>Criar Funcionário</h2>
          <p>Aqui você pode criar um novo funcionário.</p>
        </div>
      );
    } else if (text === 'Listar Funcionários') {
      try {
        const response = await fetch('http://0.0.0.0:8080/funcionario/?format=json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const funcionarios = await response.json();

        const cardsFuncionarios = funcionarios.map((funcionario) => (
          <div key={funcionario.cod} className="card" onClick={() => handleCardClick(funcionario)}>
            <img src={funcionario.image} alt={`Imagem de ${funcionario.nome}`} />
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
      } catch (error) {
        console.error('Fetch error:', error);
        setRightColumnContent(<p>Erro ao carregar funcionários.</p>);
      }
    } else {
      alert(`Você clicou em: ${text}`);
    }
  };

  const handleCardClick = (funcionario) => {
    setDialogContent(
      <div className="dialog">
        <h3>{funcionario.nome}</h3>
        <p><strong>Código:</strong> {funcionario.cod}</p>
        <p><strong>CPF:</strong> {funcionario.cpf}</p>
        <p><strong>Senha:</strong> {funcionario.senha}</p>
        <p><strong>RG:</strong> {funcionario.rg}</p>
        <p><strong>Email:</strong> {funcionario.email}</p>
        <p><strong>Telefone:</strong> {funcionario.telefone}</p>
        <p><strong>Endereço:</strong> {funcionario.endereco}</p>
        <button onClick={() => setDialogContent(null)}>Fechar</button>
      </div>
    );
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
      {dialogContent}
    </div>
  );
}

export default App;
