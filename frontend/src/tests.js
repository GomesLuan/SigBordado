import { fetchFuncionarios, createFuncionario, updateFuncionario, deleteFuncionario } from './funcionarioService.js';

QUnit.module('funcionarioService', (hooks) => {
  // Mock global.fetch para simular a API
  hooks.beforeEach(() => {
    window.fetch = async (url, options) => {
      const basePath = url.replace('http://0.0.0.0:8080/funcionario', '');

      // Simula a resposta para busca de funcionários
      if (basePath === '/?format=json' && !options) {
        return {
          ok: true,
          json: async () => [
            { 
              cod: 1, 
              nome: 'Funcionario 1', 
              cpf: '123456789', 
              senha: 'senha123',
              rg: 'rg123456',
              email: 'func1@example.com',
              telefone: '1234567890',
              endereco: 'Rua A, 123'
            },
            { 
              cod: 2, 
              nome: 'Funcionario 2', 
              cpf: '987654321', 
              senha: 'senha456',
              rg: 'rg987654',
              email: 'func2@example.com',
              telefone: '0987654321',
              endereco: 'Rua B, 456'
            },
          ],
        };
      }

      // Simula a resposta para criação de um novo funcionário
      if (basePath === '/' && options?.method === 'POST') {
        const body = JSON.parse(options.body);
        return {
          ok: true,
          json: async () => ({ ...body, cod: 3 }), // Simula a criação com um novo código
        };
      }

      // Simula a resposta para atualização de um funcionário
      if (basePath.startsWith('/1') && options?.method === 'PUT') {
        return {
          ok: true,
          json: async () => JSON.parse(options.body), // Simula a atualização
        };
      }

      // Simula a resposta para exclusão de um funcionário
      if (basePath.startsWith('/1') && options?.method === 'DELETE') {
        return {
          ok: true,
        };
      }

      return { ok: false, json: async () => ({}) };
    };
  });

  // Remove o mock após cada teste
  hooks.afterEach(() => {
    delete window.fetch;
  });

  QUnit.test('fetchFuncionarios retorna uma lista de funcionários', async (assert) => {
    const funcionarios = await fetchFuncionarios();
    assert.equal(funcionarios.length, 2, 'Deve retornar dois funcionários');
    assert.equal(funcionarios[0].nome, 'Funcionario 1', 'Primeiro funcionário deve ter o nome correto');
    assert.equal(funcionarios[0].cpf, '123456789', 'Primeiro funcionário deve ter o CPF correto');
    assert.equal(funcionarios[0].senha, 'senha123', 'Primeiro funcionário deve ter a senha correta');
    assert.equal(funcionarios[0].rg, 'rg123456', 'Primeiro funcionário deve ter o RG correto');
    assert.equal(funcionarios[0].email, 'func1@example.com', 'Primeiro funcionário deve ter o email correto');
    assert.equal(funcionarios[0].telefone, '1234567890', 'Primeiro funcionário deve ter o telefone correto');
    assert.equal(funcionarios[0].endereco, 'Rua A, 123', 'Primeiro funcionário deve ter o endereço correto');
  });

  QUnit.test('createFuncionario cria um novo funcionário', async (assert) => {
    const novoFuncionario = { 
      nome: 'Novo Funcionario', 
      cpf: '111222333', 
      senha: 'senha789',
      rg: 'rg111222',
      email: 'novo@example.com',
      telefone: '1112223333',
      endereco: 'Rua C, 789'
    };
    const funcionarioCriado = await createFuncionario(novoFuncionario);

    assert.ok(funcionarioCriado.cod, 'Funcionário criado deve ter um código');
    assert.equal(funcionarioCriado.nome, 'Novo Funcionario', 'O nome do novo funcionário deve estar correto');
    assert.equal(funcionarioCriado.cpf, '111222333', 'O CPF do novo funcionário deve estar correto');
    assert.equal(funcionarioCriado.senha, 'senha789', 'A senha do novo funcionário deve estar correta');
    assert.equal(funcionarioCriado.rg, 'rg111222', 'O RG do novo funcionário deve estar correto');
    assert.equal(funcionarioCriado.email, 'novo@example.com', 'O email do novo funcionário deve estar correto');
    assert.equal(funcionarioCriado.telefone, '1112223333', 'O telefone do novo funcionário deve estar correto');
    assert.equal(funcionarioCriado.endereco, 'Rua C, 789', 'O endereço do novo funcionário deve estar correto');
  });

  QUnit.test('updateFuncionario atualiza um funcionário existente', async (assert) => {
    const funcionarioAtualizado = { 
      nome: 'Funcionario Atualizado', 
      cpf: '123456789', 
      senha: 'novaSenha',
      rg: 'rgAtualizado',
      email: 'atualizado@example.com',
      telefone: '1234567899',
      endereco: 'Rua Atualizada, 321'
    };
    const result = await updateFuncionario(1, funcionarioAtualizado);

    assert.equal(result.nome, 'Funcionario Atualizado', 'O nome do funcionário deve ser atualizado');
    assert.equal(result.cpf, '123456789', 'O CPF do funcionário deve ser atualizado');
    assert.equal(result.senha, 'novaSenha', 'A senha do funcionário deve ser atualizada');
    assert.equal(result.rg, 'rgAtualizado', 'O RG do funcionário deve ser atualizado');
    assert.equal(result.email, 'atualizado@example.com', 'O email do funcionário deve ser atualizado');
    assert.equal(result.telefone, '1234567899', 'O telefone do funcionário deve ser atualizado');
    assert.equal(result.endereco, 'Rua Atualizada, 321', 'O endereço do funcionário deve ser atualizado');
  });

  QUnit.test('deleteFuncionario remove um funcionário', async (assert) => {
    const result = await deleteFuncionario(1);

    assert.ok(result, 'Funcionário deve ser deletado com sucesso');
  });
});
