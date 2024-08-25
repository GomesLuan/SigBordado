// models.js
import {
    fetchFuncionarios,
    createFuncionario,
    updateFuncionario,
    deleteFuncionario,
  } from './service/funcionarioService';
  import {
    fetchClientes,
    createCliente,
    updateCliente,
    deleteCliente,
  } from './service/clienteService';
  import {
    fetchPedidos,
    createPedido,
    updatePedido,
    deletePedido,
  } from './service/pedidoService';
  import {
    fetchMateriais,
    createMaterial,
    updateMaterial,
    deleteMaterial,
  } from './service/materialService';
  import {
    fetchProdutos,
    createProduto,
    updateProduto,
    deleteProduto,
  } from './service/produtoService';
  
  export const modeloFuncionario = {
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
  
  export const modeloMaterial = {
    campos: [
      { name: 'descricao', label: 'Descrição', type: 'text', readOnly: false },
      { name: 'quantEst', label: 'Quantidade em Estoque', type: 'number', readOnly: false },
    ],
  };
  
  export const modeloCliente = {
    campos: [
      { name: 'nome', label: 'Nome', type: 'text', readOnly: false },
      { name: 'cpfCnpj', label: 'CPF/CNPJ', type: 'text', readOnly: false },
      { name: 'email', label: 'Email', type: 'email', readOnly: false },
      { name: 'telefone', label: 'Telefone', type: 'text', readOnly: false },
      { name: 'endereco', label: 'Endereço', type: 'text', readOnly: false },
    ],
  };
  
  export const modeloProduto = {
    campos: [
      { name: 'descricao', label: 'Descrição', type: 'text', readOnly: false },
      { name: 'valor', label: 'Valor Unitário', type: 'number', readOnly: false },
    ],
  };
  
  export const modeloPedido = {
    campos: [
      { name: 'codCliente', label: 'Código do Cliente', type: 'number', readOnly: false },
      { name: 'codFuncionario', label: 'Código do Funcionário', type: 'number', readOnly: false },
      { name: 'forneceMaterial', label: 'Fornece Material?', type: 'checkbox', readOnly: false },
      { name: 'observacoes', label: 'Observações', type: 'text', readOnly: false },
      { name: 'status', label: 'Status', type: 'text', readOnly: false },
      { name: 'valorAdicional', label: 'Valor Adicional', type: 'number', readOnly: false },
      { name: 'desconto', label: 'Desconto (%)', type: 'number', readOnly: false },
      { name: 'formaPagamento', label: 'Forma de Pagamento', type: 'text', readOnly: false },
    ],
  };
  
  export const functionsMap = {
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
    material: {
      fetch: fetchMateriais,
      create: createMaterial,
      update: updateMaterial,
      delete: deleteMaterial,
      modelo: modeloMaterial,
    },
  };
  
