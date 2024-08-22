import React, { useState, useEffect } from 'react';
import './funcionario.css';
import {
  fetchFuncionarios,
  createFuncionario,
  updateFuncionario,
  deleteFuncionario,
} from './funcionarioService';
import {
  fetchClientes,
  createCliente,
  updateCliente,
  deleteCliente,
} from './clienteService';
import {
  fetchProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
} from './produtoService'; // Serviços para produtos
import { FormularioGenerico } from './formulario';

function App() {
  const [rightColumnContent, setRightColumnContent] = useState(null);
  const [dialogContent, setDialogContent] = useState(null);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [itens, setItens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [crudAtivo, setCrudAtivo] = useState('funcionario'); // Define se o CRUD é de funcionário, cliente ou produto

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

  const modeloCliente = {
    campos: [
      { name: 'nome', label: 'Nome', type: 'text', readOnly: false },
      { name: 'cpfCnpj', label: 'CPF/CNPJ', type: 'text', readOnly: false },
      { name: 'email', label: 'Email', type: 'email', readOnly: false },
      { name: 'telefone', label: 'Telefone', type: 'text', readOnly: false },
      { name: 'endereco', label: 'Endereço', type: 'text', readOnly: false },
    ],
  };

  const modeloProduto = {
    campos: [
      { name: 'descricao', label: 'Descrição', type: 'text', readOnly: false },
      { name: 'valor', label: 'Valor Unitário', type: 'number', readOnly: false },
    ],
  };

  const functionsMap = {
    funcionario: {
      fetch: fetchFuncionarios,
      create: createFuncionario,
      update: updateFuncionario,
      delete: deleteFuncionario,
      modelo: modeloFuncionario,
    },
    cliente: {
      fetch: fetchClientes,
      create: createCliente,
      update: updateCliente,
      delete: deleteCliente,
      modelo: modeloCliente,
    },
    produto: {
      fetch: fetchProdutos,
      create: createProduto,
      update: updateProduto,
      delete: deleteProduto,
      modelo: modeloProduto,
    },
  };

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await functionsMap[crudAtivo].fetch();
        setItens(data);
        renderizarItens(data);
      } catch (error) {
        setRightColumnContent(<p>Erro ao carregar {crudAtivo}s.</p>);
      }
    };

    loadItems();
  }, [crudAtivo]);

  const handleClick = (text) => {
    if (text === 'Criar') {
      setItemSelecionado(null);
      setRightColumnContent(
        <div>
          <h2>Criar {crudAtivo}</h2>
          <FormularioGenerico 
            modeloClasse={functionsMap[crudAtivo].modelo} 
            handleSubmitCallback={functionsMap[crudAtivo].create}
          />
        </div>
      );
    } else if (text === `Listar ${crudAtivo}s`) {
      renderizarItens(itens);
    } else if (text === 'Mudar para Cliente') {
      setCrudAtivo('cliente');
    } else if (text === 'Mudar para Funcionário') {
      setCrudAtivo('funcionario');
    } else if (text === 'Mudar para Produto') {
      setCrudAtivo('produto');
    } else {
      alert(`Você clicou em: ${text}`);
    }
  };

  const renderizarItens = (itensParaRenderizar) => {
    const cards = itensParaRenderizar.map((item) => (
      <div key={item.cod} className="card" onClick={() => handleCardClick(item)}>
        <p>{item.nome || item.descricao}</p>
      </div>
    ));

    setRightColumnContent(
      <div>
        <h2>Listar {crudAtivo}s</h2>
        <div className="card-container">
          {cards}
        </div>
      </div>
    );
  };

  const handleCardClick = (item) => {
    const campos = functionsMap[crudAtivo].modelo.campos.map((campo) => (
      <p key={campo.name}>
        <strong>{campo.label}:</strong> {item[campo.name]}
      </p>
    ));

    setItemSelecionado(item);
    setDialogContent(
      <div className="dialog">
        <h3>{item.nome || item.descricao}</h3>
        {campos}
        <button className='close' onClick={() => setDialogContent(null)}>Fechar</button>
        <button className='edit' onClick={() => handleEditClick(item)}>Editar</button>
        <button className='delete' onClick={() => handleDeleteClick(item.cod)}>Deletar</button>
      </div>
    );
  };

  const handleEditClick = (item) => {
    setDialogContent(null);
    setRightColumnContent(
      <div>
        <h2>Editar {crudAtivo}</h2>
        <FormularioGenerico 
          modeloClasse={functionsMap[crudAtivo].modelo}
          dadosIniciais={item}
          handleSubmitCallback={functionsMap[crudAtivo].update}
        />
      </div>
    );
  };

  const handleDeleteClick = async (codigoItem) => {
    const confirmDelete = window.confirm('Tem certeza que deseja deletar este item?');
    if (!confirmDelete) {
      return;
    }

    try {
      await functionsMap[crudAtivo].delete(codigoItem);

      alert(`${crudAtivo.charAt(0).toUpperCase() + crudAtivo.slice(1)} deletado com sucesso!`);

      setDialogContent(null);

      const updatedItens = itens.filter((item) => item.cod !== codigoItem);
      setItens(updatedItens);
      renderizarItens(updatedItens);
    } catch (error) {
      alert(`Erro ao deletar ${crudAtivo}`);
    }
  };

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredItens = itens.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(term)
      )
    );
    renderizarItens(filteredItens);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>{crudAtivo.charAt(0).toUpperCase() + crudAtivo.slice(1)}s</h1>
        <input
          type="text"
          placeholder={`Buscar ${crudAtivo}...`}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </header>
      <div className="container">
        <div className="column column-left">
          <p onClick={() => handleClick('Criar')}>Criar {crudAtivo}</p>
          <p onClick={() => handleClick(`Listar ${crudAtivo}s`)}>Listar {crudAtivo}s</p>
          <p onClick={() => handleClick('Mudar para Cliente')}>Mudar para Cliente</p>
          <p onClick={() => handleClick('Mudar para Funcionário')}>Mudar para Funcionário</p>
          <p onClick={() => handleClick('Mudar para Produto')}>Mudar para Produto</p>
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
