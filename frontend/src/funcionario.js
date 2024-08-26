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
  const [theme, setTheme] = useState('light');
  const [activeMenu, setActiveMenu] = useState(''); // Novo estado para controlar a visibilidade das listas

  useEffect(() => {
    const loadItems = async () => {
      try {
        console.log('Carregando itens para:', crudAtivo);
        const data = await functionsMap[crudAtivo].fetch();
        setItens(data);
      } catch (error) {
        console.log('Erro ao carregar itens:', crudAtivo);
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
    } else if (text.startsWith('Mudar para')) {
      const newCrud = text.split(' ')[2].toLowerCase(); // Obtém a nova funcionalidade
      if (newCrud === activeMenu) {
        // Se o menu já está ativo, ocultá-lo
        setActiveMenu('');
      } else {
        // Caso contrário, mostrar o novo submenu
        setCrudAtivo(newCrud);
        setActiveMenu(newCrud); // Exibir o submenu correspondente
      }
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
      const updatedItens = await functionsMap[crudAtivo].fetch();
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
      const updatedItens = await functionsMap[crudAtivo].fetch();
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
    <div className={`App ${theme}`}>
      <header className="header">
        <h1>Funcionários</h1>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="theme-switcher">
          <input
            type="checkbox"
            id="theme-toggle"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <label htmlFor="theme-toggle" className="slider"></label>
        </div>
      </header>
      <div className="main-content">
        <div className={`column-left ${theme}`}>
          <ul>
            <li onClick={() => handleClick('Mudar para Cliente')}>
              Mudar para Cliente
              {activeMenu === 'cliente' && (
                <ul>
                  <li onClick={() => handleClick('Criar')}>Criar</li>
                  <li onClick={() => handleClick(`Listar clientes`)}>Listar clientes</li>
                </ul>
              )}
            </li>
            <li onClick={() => handleClick('Mudar para Pedido')}>
              Mudar para Pedido
              {activeMenu === 'pedido' && (
                <ul>
                  <li onClick={() => handleClick('Criar')}>Criar</li>
                  <li onClick={() => handleClick(`Listar pedidos`)}>Listar pedidos</li>
                </ul>
              )}
            </li>
            <li onClick={() => handleClick('Mudar para Funcionario')}>
              Mudar para Funcionário
              {activeMenu === 'funcionario' && (
                <ul>
                  <li onClick={() => handleClick('Criar')}>Criar</li>
                  <li onClick={() => handleClick(`Listar funcionarios`)}>Listar funcionários</li>
                </ul>
              )}
            </li>
            <li onClick={() => handleClick('Mudar para Produto')}>
              Mudar para Produto
              {activeMenu === 'produto' && (
                <ul>
                  <li onClick={() => handleClick('Criar')}>Criar</li>
                  <li onClick={() => handleClick(`Listar produtos`)}>Listar produtos</li>
                </ul>
              )}
            </li>
            <li onClick={() => handleClick('Mudar para Material')}>
              Mudar para Materiais
              {activeMenu === 'material' && (
                <ul>
                  <li onClick={() => handleClick('Criar')}>Criar</li>
                  <li onClick={() => handleClick(`Listar Material`)}>Listar Materiais</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className={`column-right ${theme}`}>
          {rightColumnContent}
        </div>
      </div>
      {dialogContent && (
        <div className="dialog-overlay" onClick={() => setDialogContent(null)}>
          {dialogContent}
        </div>
      )}
    </div>
  );
}

export default App;
