import React, { useState, useEffect } from 'react';
import './funcionario.css';
import { functionsMap } from './models';  
import { FormularioGenerico } from './formulario';

function App() {
  const [rightColumnContent, setRightColumnContent] = useState(null);
  const [dialogContent, setDialogContent] = useState(null);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [itens, setItens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [crudAtivo, setCrudAtivo] = useState('funcionario');
  const [theme, setTheme] = useState('light'); // Adiciona estado para tema

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await functionsMap[crudAtivo].fetch();
        setItens(data);
      } catch (error) {
        setRightColumnContent(<p>Erro ao carregar {crudAtivo}s.</p>);
      }
    };

    loadItems();
  }, [crudAtivo]);

  useEffect(() => {
    if (searchTerm === '') {
      renderizarItens(itens);
    } else {
      handleSearch();
    }
  }, [searchTerm, itens]);

  useEffect(() => {
    document.body.className = theme; // Aplica a classe do tema ao body
  }, [theme]);

  const handleClick = (text) => {
    if (text === 'Criar') {
      setItemSelecionado(null);
      setRightColumnContent(
        <div>
          <h2>Criar {crudAtivo}</h2>
          <FormularioGenerico 
            modeloClasse={functionsMap[crudAtivo].modelo} 
            handleSubmitCallback={handleCreate}
          />
        </div>
      );
    } else if (text === `Listar ${crudAtivo}s`) {
      renderizarItens(itens);
    } else if (text === 'Mudar para Cliente') {
      setCrudAtivo('cliente');
    } else if (text === 'Mudar para Pedido') {
      setCrudAtivo('pedido');
    } else if (text === 'Mudar para Funcionário') {
      setCrudAtivo('funcionario');
    } else if (text === 'Mudar para Produto') {
      setCrudAtivo('produto');
    } else if (text === 'Mudar para Material') {
      setCrudAtivo('material');
    } else {
      alert(`Você clicou em: ${text}`);
    }
  };

  const renderizarItens = (itensParaRenderizar) => {
    const cards = itensParaRenderizar.map((item) => {
      let textoCard;
  
      if (crudAtivo === 'pedido') {
        textoCard = `Pedido #${item.cod}`;
      } else {
        textoCard = item.nome || item.descricao;
      }
  
      return (
        <div key={item.cod} className="card" onClick={() => handleCardClick(item)}>
          <p>{textoCard}</p>
        </div>
      );
    });

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
    const campos = functionsMap[crudAtivo].modelo.campos
      .filter((campo) => !(crudAtivo === 'funcionario' && campo.name === 'senha'))
      .map((campo) => (
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
          handleSubmitCallback={handleUpdate}
        />
      </div>
    );
  };

  const handleCreate = async (data) => {
    try {
      await functionsMap[crudAtivo].create(data);
      alert(`${crudAtivo.charAt(0).toUpperCase() + crudAtivo.slice(1)} criado com sucesso!`);
      const updatedItens = await functionsMap[crudAtivo].fetch(); // Recarregar itens
      setItens(updatedItens);
      renderizarItens(updatedItens);
    } catch (error) {
      alert('Erro ao criar item!');
    }
  };

  const handleUpdate = async (codigoItem, data) => {
    try {
      await functionsMap[crudAtivo].update(codigoItem, data);
      alert(`${crudAtivo.charAt(0).toUpperCase() + crudAtivo.slice(1)} atualizado com sucesso!`);
      const updatedItens = await functionsMap[crudAtivo].fetch(); // Recarregar itens
      setItens(updatedItens);
      renderizarItens(updatedItens);
    } catch (error) {
      alert('Erro ao atualizar item!');
    }
  };

  const handleDeleteClick = async (codigoItem) => {
    const confirmDelete = window.confirm('Tem certeza que deseja deletar este item?');
    if (!confirmDelete) {
      return;
    }

    try {
      await functionsMap[crudAtivo].delete(codigoItem);
      alert(`${crudAtivo.charAt(0).toUpperCase() + crudAtivo.slice(1)} deletado com sucesso!`);
      const updatedItens = itens.filter((item) => item.cod !== codigoItem);
      setItens(updatedItens);
      renderizarItens(updatedItens);
    } catch (error) {
      alert(`Erro ao deletar ${crudAtivo}.`);
    }
  };

  const handleSearch = () => {
    const filteredItems = itens.filter((item) =>
      item.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descricao?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderizarItens(filteredItems);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Funcionários</h1>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
        </button>
      </header>
      <div className="main-content">
        <div className="column-left">
          <ul>
            <li onClick={() => handleClick(`Listar ${crudAtivo}s`)}>Listar {crudAtivo}s</li>
            <li onClick={() => handleClick('Criar')}>Criar {crudAtivo}</li>
            <li onClick={() => handleClick('Mudar para Funcionário')}>Mudar para Funcionário</li>
            <li onClick={() => handleClick('Mudar para Cliente')}>Mudar para Cliente</li>
            <li onClick={() => handleClick('Mudar para Pedido')}>Mudar para Pedido</li>
            <li onClick={() => handleClick('Mudar para Produto')}>Mudar para Produto</li>
            <li onClick={() => handleClick('Mudar para Material')}>Mudar para Material</li>
          </ul>
        </div>
        <div className="column-right">
          {rightColumnContent}
          {dialogContent}
        </div>
      </div>
    </div>
  );
}

export default App;
