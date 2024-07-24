import React, { useState } from 'react';
import './App.css';

function App() {
  const [rightColumnContent, setRightColumnContent] = useState(null);
  const [dialogContent, setDialogContent] = useState(null);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);

  const handleClick = async (text) => {
    if (text === 'Criar Funcionário') {
      setFuncionarioSelecionado(null); // Limpa o funcionário selecionado ao criar novo
      setRightColumnContent(
        <div>
          <h2>Criar Funcionário</h2>
          <FormularioCriarFuncionario />
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
    setFuncionarioSelecionado(funcionario); // Armazena o funcionário selecionado
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
        <button onClick={() => handleEditClick(funcionario)}>Editar</button>
        <button onClick={() => handleDeleteClick(funcionario.cod)}>Deletar</button>
      </div>
    );
  };

  const handleEditClick = (funcionario) => {
    setDialogContent(null); // Fecha o diálogo
    setRightColumnContent(
      <div>
        <h2>Editar Funcionário</h2>
        <FormularioCriarFuncionario funcionario={funcionario} />
      </div>
    );
  };

  const handleDeleteClick = async (codigoFuncionario) => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar este funcionário?");
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`http://0.0.0.0:8080/funcionario/${codigoFuncionario}/`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar funcionário');
      }

      console.log('Funcionário deletado com sucesso');
      alert('Funcionário deletado com sucesso!');
      
      setDialogContent(null);
      
      // Atualiza a lista de funcionários após a exclusão
      handleClick('Listar Funcionários');
    } catch (error) {
      console.error('Erro ao deletar funcionário:', error);
      alert('Erro ao deletar funcionário');
    }
  };

  const FormularioCriarFuncionario = ({ funcionario = null }) => {
    const [nome, setNome] = useState(funcionario ? funcionario.nome : '111');
    const [cpf, setCpf] = useState(funcionario ? funcionario.cpf : '111');
    const [senha, setSenha] = useState(funcionario ? funcionario.senha : '111');
    const [rg, setRg] = useState(funcionario ? funcionario.rg : '111');
    const [email, setEmail] = useState(funcionario ? funcionario.email : '111');
    const [telefone, setTelefone] = useState(funcionario ? funcionario.telefone : '111');
    const [endereco, setEndereco] = useState(funcionario ? funcionario.endereco : '111');

    const handleSubmit = async (event) => {
      event.preventDefault();

      const novoFuncionario = {
        nome,
        cpf,
        senha,
        rg,
        email,
        telefone,
        endereco,
      };

      try {
        const response = funcionario
          ? await fetch(`http://0.0.0.0:8080/funcionario/${funcionario.cod}/`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(novoFuncionario),
            })
          : await fetch('http://0.0.0.0:8080/funcionario/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(novoFuncionario),
            });

        if (!response.ok) {
          throw new Error('Erro ao salvar funcionário');
        }

        const data = await response.json();
        console.log('Funcionário salvo com sucesso:', data);
        alert('Funcionário salvo com sucesso!');
        
        // Resetar o formulário após criação/edição bem-sucedida
        setNome('111');
        setCpf('111');
        setSenha('111');
        setRg('111');
        setEmail('111');
        setTelefone('111');
        setEndereco('111');
        
        // Volta para a lista de funcionários após salvar
        handleClick('Listar Funcionários');

      } catch (error) {
        console.error('Erro ao salvar funcionário:', error);
        alert('Erro ao salvar funcionário');
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>CPF:</label>
          <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} readOnly={!!funcionario} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div>
          <label>RG:</label>
          <input type="text" value={rg} onChange={(e) => setRg(e.target.value)} readOnly={!!funcionario} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </div>
        <div>
          <label>Endereço:</label>
          <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        </div>
        <button type="submit">{funcionario ? 'Salvar Alterações' : 'Criar Funcionário'}</button>
      </form>
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
