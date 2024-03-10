## Modelo conceitual

```mermaid
    erDiagram

    Cliente {
        int cod PK
        string nome
        string cpfcnpj
        string email
        string telefone
        string endereco
    }

   Funcionario {
      int cod PK
      string nome
      string cpf
      string senha
      string rg
      string email
      string telefone
      string endereco
   }

   Pedido {
      int cod PK
      Cliente cliente
      Funcionario funcionario
      Produto produto
      bool forneceMaterial
      string observacoes
      string status
      double valorAdicional
      double desconto
      string formaDePagamento
   }

   PedidoProduto {
      Pedido pedido
      Produto produto
      int quantidade
   }

   Produto {
      int cod PK
      double valor
      string descricao
      MaterialProduto material
   }

   MaterialProduto {
      Produto produto
      Material material
      double quantUsa
   }

   Material{
      int cod PK
      string descricao
      double quantEst
   }


   Funcionario || --|{ Pedido: responsavel
   Pedido }| -- || Cliente: pediu
   Pedido || -- |{ PedidoProduto: pedidoProduto-pedido
   PedidoProduto }| -- || Produto: pedidoProduto-produto
   MaterialProduto }| -- ||Produto: MaterialProduto-produto
   Material || -- |{ MaterialProduto: MaterialProduto-material

```
### Legenda:

Pk = chave primária

|| = 1 e somente 1

}| = 1 ou muitos
