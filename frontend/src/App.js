import React, { useState } from 'react';
import './App.css';

function App() {
  const [rightColumnContent, setRightColumnContent] = useState(null);
  const [dialogContent, setDialogContent] = useState(null);

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
        { 
          image: 'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg',
          cod: 1,
          nome: 'João',
          cpf: '123.456.789-00',
          senha: 'senha123',
          rg: '987654321',
          email: 'joao@example.com',
          telefone: '(11) 99999-9999',
          endereco: 'Rua Principal, 123'
        },
        {
          image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg',
          cod: 2,
          nome: 'Maria',
          cpf: '987.654.321-00',
          senha: 'senha456',
          rg: '123456789',
          email: 'maria@example.com',
          telefone: '(11) 88888-8888',
          endereco: 'Avenida Secundária, 456'
        }
      ];

      // Renderização dos cards dos funcionários
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
