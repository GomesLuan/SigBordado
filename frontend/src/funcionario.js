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
} from './produtoService';
import {
  fetchPedidos,
  createPedido,
  updatePedido,
  deletePedido,
} from './pedidoService';
import { FormularioGenerico } from './formulario';

function App() {
  const [rightColumnContent, setRightColumnContent] = useState(null);
  const [dialogContent, setDialogContent] = useState(null);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [itens, setItens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [crudAtivo, setCrudAtivo] = useState('funcionario'); // Define se o CRUD é de funcionário, cliente, produto ou pedido

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
      { name: 'valor', label: 'Valor', type: 'number', readOnly: false },
      { name: 'descricao', label: 'Descrição', type: 'text', readOnly: false },
    ],
  };

  const modeloPedido = {
    campos: [
      { name: 'codCliente', label: 'Código do Cliente', type: 'number', readOnly: false },
      { name: 'codFuncionario', label: 'Código do Funcionário', type: 'number', readOnly: false },
      { name: 'forneceMaterial', label: 'Fornece Material', type: 'checkbox', readOnly: false },
      { name: 'observacoes', label: 'Observações', type: 'text', readOnly: false },
      { name: 'status', label: 'Status', type: 'text', readOnly: false },
      { name: 'valorAdicional', label: 'Valor Adicional', type: 'number', readOnly: false },
      { name: 'desconto', label: 'Desconto', type: 'number', readOnly: false },
      { name: 'formaPagamento', label: 'Forma de Pagamento', type: 'text', readOnly: false },
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
    pedido: {
      fetch: fetchPedidos,
      create: createPedido,
      update: updatePedido,
      delete: deletePedido,
      modelo: modeloPedido,
    },
  };

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await functionsMap[crudAtivo].fetch();
        setItens(data);
        renderizarItens(data); // Renderiza os itens após carregá-los
      } catch (error) {
        setRightColumnContent(<p>Erro ao carregar {crudAtivo}s.</p>);
      }
    };

    loadItems();
  }, [crudAtivo]); // Executa ao montar o componente e quando o CRUD ativo muda

  const handleClick = (text) => {
    if (text === 'Criar') {
      setItemSelecionado(null); // Limpa o item selecionado ao criar novo
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
      renderizarItens(itens); // Renderiza a lista completa de itens
    } else if (text === 'Mudar para Cliente') {
      setCrudAtivo('cliente'); // Troca para o CRUD de cliente
    } else if (text === 'Mudar para Funcionário') {
      setCrudAtivo('funcionario'); // Troca para o CRUD de funcionário
    } else if (text === 'Mudar para Produto') {
      setCrudAtivo('produto'); // Troca para o CRUD de produto
    } else if (text === 'Mudar para Pedido') {
      setCrudAtivo('pedido'); // Troca para o CRUD de pedido
    } else {
      alert(`Você clicou em: ${text}`);
    }
  };

  const renderizarItens = (itensParaRenderizar) => {
    const cards = itensParaRenderizar.map((item) => (
      <div key={item.cod} className="card" onClick={() => handleCardClick(item)}>
        <p>{item.nome || item.descricao || `Pedido ${item.cod}`}</p>
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

    setItemSelecionado(item); // Armazena o item selecionado
    setDialogContent(
      <div className="dialog">
        <h3>{item.nome || item.descricao || `Pedido ${item.cod}`}</h3>
        {campos}
        <button className='close' onClick={() => setDialogContent(null)}>Fechar</button>
        <button className='edit' onClick={() => handleEditClick(item)}>Editar</button>
        <button className='delete' onClick={() => handleDeleteClick(item.cod)}>Deletar</button>
      </div>
    );
  };

  const handleEditClick = (item) => {
    setDialogContent(null); // Fecha o diálogo
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

      // Atualiza a lista de itens após a exclusão
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
    <div className="main-container">
      <div className="left-column">
        <h2>Menu</h2>
        <ul>
          <li onClick={() => handleClick('Criar')}>Criar</li>
          <li onClick={() => handleClick(`Listar ${crudAtivo}s`)}>Listar {crudAtivo}s</li>
          <li onClick={() => handleClick('Mudar para Cliente')}>Mudar para Cliente</li>
          <li onClick={() => handleClick('Mudar para Funcionário')}>Mudar para Funcionário</li>
          <li onClick={() => handleClick('Mudar para Produto')}>Mudar para Produto</li>
          <li onClick={() => handleClick('Mudar para Pedido')}>Mudar para Pedido</li>
        </ul>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="right-column">
        {rightColumnContent}
      </div>
      {dialogContent && (
        <div className="dialog-overlay">
          {dialogContent}
        </div>
      )}
    </div>
  );
}

export default App;
