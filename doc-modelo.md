# Modelo de dados

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
## Dicionário de Dados:

|   Tabela   | Cliente |
| ---------- | ----------- |
| Descrição  | Armazena as informações de um cliente. |

|  Nome         | Descrição                        | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------- | ------------ | ------- | --------------------- |
| cod           | identificador gerado pelo SGBD   | SERIAL       | ---     | PK / Identity |
| nome          | nome do cliente                  | VARCHAR      | 150     | Not Null |
| cpfCnpj       | CPF ou CNPJ do cliente           | VARCHAR      | 14      | Unique / Not Null |
| email         | e-mail para contato do cliente   | VARCHAR      | 150     | --- |
| telefone      | telefone para contato do cliente | VARCHAR      | 20      | --- |
| endereco      | endereço do cliente              | VARCHAR      | 250     | --- |

|   Tabela   | Funcionario |
| ---------- | ----------- |
| Descrição  | Armazena as informações de um funcionário. |

|  Nome         | Descrição                                | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ---------------------------------------- | ------------ | ------- | --------------------- |
| cod           | identificador gerado pelo SGBD           | SERIAL       | ---     | PK / Identity |
| nome          | nome do funcionário                      | VARCHAR      | 150     | Not Null |
| cpf           | CPF do funcionário, utilizado para login | CHAR | 11    | Unique / Not Null |
| senha         | senha utilizada para logar no sistema    | VARCHAR | 50 | Unique / Not Null |
| rg            | RG do funcionário                        | CHAR         | 10      | Unique / Not Null |
| email         | e-mail do funcionário                    | VARCHAR      | 150     | --- |
| telefone      | telefone do funcionário                  | VARCHAR      | 20      | --- |
| endereco      | endereço do funcionário                  | VARCHAR      | 250     | --- |

|   Tabela   | Pedido      |
| ---------- | ----------- |
| Descrição  | Armazena as informações de um pedido. |

|  Nome           | Descrição                                                          | Tipo de Dado | Tamanho | Restrições de Domínio |
| --------------- | ------------------------------------------------------------------ | ------------ | ------- | --------------------- |
| cod             | identificador gerado pelo SGBD                                     | SERIAL       | ---     | PK / Identity |
| codCliente      | código do cliente que realizou o pedido                            | SERIAL       | ---     | FK / Not Null |
| codFuncionario  | código do funcionário responsável pelo pedido                      | SERIAL       | ---     | FK / Not Null |
| forneceMaterial | indica se o cliente fornecerá o material para confecção do produto | BOOLEAN      | ---     | Not Null |
| observacoes     | observações adicionais sobre o pedido                              | VARCHAR      | 250     | --- |
| status          | indica o estado em que se encontra o pedido                        | CHAR         | 1       | Not Null |
| valorAdicional  | Valor adicional cobrado para o pedido                              | REAL         | ---     | Not Null |
| desconto        | Percentual de desconto para o pedido                               | REAL         | ---     | Not Null |
| formaPagamento  | Forma de pagamento utilizada para o pedido                         | VARCHAR      | 100     | Not Null |

|   Tabela   | Produto     |
| ---------- | ----------- |
| Descrição  | Armazena as informações de um produto. |

|  Nome         | Descrição                            | Tipo de Dado | Tamanho | Restrições de Domínio |
| --------------| -------------------------------------| ------------ | ------- | --------------------- |
| cod           | identificador gerado pelo SGBD       | SERIAL       | ---     | PK / Identity |
| valor         | valor unitário do produto            | REAL         | ---     | Not Null |
| descricao     | descrição do produto                 | VARCHAR      | 250     | Not Null |

|   Tabela   | Material    |
| ---------- | ----------- |
| Descrição  | Armazena as informações de um Material. |

|  Nome           | Descrição                         | Tipo de Dado | Tamanho | Restrições de Domínio |
| --------------- | --------------------------------- | ------------ | ------- | --------------------- |
| cod             | identificador gerado pelo SGBD    | SERIAL       | ---     | PK / Identity |
| descricao       | descrição do material             | VARCHAR      | 250     | Not Null      |
| quantEst        | quantidade do material em estoque | REAL         | ---     | Not Null      |