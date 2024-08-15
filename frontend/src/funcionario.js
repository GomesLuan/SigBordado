import React, { useState, useEffect } from 'react';
import './funcionario.css';
import {
  fetchFuncionarios,
  createFuncionario,
  updateFuncionario,
  deleteFuncionario,
} from './funcionarioService';
import { FormularioGenerico } from './formulario';
function App() {
  const [rightColumnContent, setRightColumnContent] = useState(null);
  const [dialogContent, setDialogContent] = useState(null);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [funcionarios, setFuncionarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const modeloFuncionario = {
    campos: [
      { name: 'nome', label: 'Nome', type: 'text', readOnly: false },
      { name: 'cpf', label: 'CPF', type: 'text', readOnly: false },
      { name: 'senha', label: 'Senha', type: 'password', readOnly: false },
      { name: 'rg', label: 'RG', type: 'text', readOnly: false },
      { name: 'email', label: 'Email', type: 'email', readOnly: false },
      { name: 'telefone', label: 'Telefone', type: 'text', readOnly: false },
      { name: 'endereco', label: 'Endereço', type: 'text', readOnly: false },
    ],
  };
  useEffect(() => {
    // Função para carregar a lista de funcionários ao montar o componente
    const loadFuncionarios = async () => {
      try {
        const funcionariosData = await fetchFuncionarios();
        setFuncionarios(funcionariosData);
      } catch (error) {
        setRightColumnContent(<p>Erro ao carregar funcionários.</p>);
      }
    };

    loadFuncionarios();
  }, []); // Executa apenas uma vez ao montar o componente

  const handleClick = async (text) => {
    if (text === 'Criar Funcionário') {
      setFuncionarioSelecionado(null); // Limpa o funcionário selecionado ao criar novo
      setRightColumnContent(
        <div>
          <h2>Criar Funcionário</h2>
          <FormularioGenerico 
          modeloClasse={modeloFuncionario} 
          handleSubmitCallback={createFuncionario}
          />
        </div>
      );
    } else if (text === 'Listar Funcionários') {
      renderizarFuncionarios(funcionarios); // Renderiza a lista completa de funcionários
    } else {
      alert(`Você clicou em: ${text}`);
    }
  };

  const renderizarFuncionarios = (funcionariosParaRenderizar) => {
    // Renderiza os cartões de funcionários com base na lista fornecida
    const cardsFuncionarios = funcionariosParaRenderizar.map((funcionario) => (
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
  };

  const handleCardClick = (funcionario) => {
    const campos = modeloFuncionario.campos.map((campo) => (
      <p key={campo.name}>
        <strong>{campo.label}:</strong> {funcionario[campo.name]}
      </p>
    ));
  
    setFuncionarioSelecionado(funcionario); // Armazena o funcionário selecionado
    setDialogContent(
      <div className="dialog">
        <h3>{funcionario.nome}</h3>
        {campos}
        <button className='close' onClick={() => setDialogContent(null)}>Fechar</button>
        <button className='edit' onClick={() => handleEditClick(funcionario)}>Editar</button>
        <button className='delete' onClick={() => handleDeleteClick(funcionario.cod)}>Deletar</button>
      </div>
    );
  };

  const handleEditClick = (funcionario) => {
    setDialogContent(null); // Fecha o diálogo
    setRightColumnContent(
      <div>
        <h2>Editar Funcionário</h2>
        <FormularioGenerico 
        modeloClasse={modeloFuncionario}
        dadosIniciais={funcionario}
        handleSubmitCallback={updateFuncionario}
        />
      </div>
    );
  };

  const handleDeleteClick = async (codigoFuncionario) => {
    const confirmDelete = window.confirm('Tem certeza que deseja deletar este funcionário?');
    if (!confirmDelete) {
      return;
    }

    try {
      await deleteFuncionario(codigoFuncionario);

      console.log('Funcionário deletado com sucesso');
      alert('Funcionário deletado com sucesso!');

      setDialogContent(null);

      // Atualiza a lista de funcionários após a exclusão
      const updatedFuncionarios = funcionarios.filter(
        (funcionario) => funcionario.cod !== codigoFuncionario
      );
      setFuncionarios(updatedFuncionarios);
      renderizarFuncionarios(updatedFuncionarios);
    } catch (error) {
      console.error('Erro ao deletar funcionário:', error);
      alert('Erro ao deletar funcionário');
    }
  };

  const handleSearchChange = (event) => {
    // Atualiza o termo de pesquisa e filtra a lista de funcionários
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredFuncionarios = funcionarios.filter((funcionario) =>
      Object.values(funcionario).some((value) =>
        String(value).toLowerCase().includes(term)
      )
    );
    renderizarFuncionarios(filteredFuncionarios);
  };



  return (
    <div className="App">
      <header className="header">
        <h1>Funcionários</h1>
        <input
          type="text"
          placeholder="Buscar funcionário..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </header>
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
