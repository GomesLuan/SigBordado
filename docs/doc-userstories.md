# Documento Lista de User Stories

Documento construído a partido da **Lista de User Stories** que pode ser encontrado no link: https://docs.google.com/document/d/1lUT58FXWbuLdyfhsjCCqvf6kRHDwMuMwDcVgL8dwXSM/edit?usp=sharing

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento 001 - Documento de Visão](doc-visao.md). Este documento também pode ser adaptado para descrever Casos de Uso.

## Histórico de revisões

| Data       | Versão  | Descrição                          | Autor                          |
| :--------- | :-----: | :--------------------------------: | :----------------------------- |
| 04/12/2023 | 1.0     | Documento inicial | Todos |
| 04/12/2023 | 1.1     | User Story US03 | Gabriel W. |
| 05/12/2023 | 1.2     | User Story US04 | Victor |
| 05/12/2023 | 1.3     | User Story US03 | Pedro |
| 05/12/2023 | 1.4     | User Story US04 | Luan |
| 16/04/2024 | 1.5     | Mudança dos PF  | Victor |





### User Story US01 - Manter Pedido

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | Com o objetivo de aprimorar a gestão de pedidos de bordados, o sistema propõe a implementação de um módulo exclusivo para o registro de pedidos. Nesse processo, seria necessário incluir informações detalhadas, como o cliente solicitante, os materiais necessários (se aplicável) e a bordadeira responsável pela execução da demanda. Essa abordagem visa proporcionar um controle mais eficiente sobre as demandas e tarefas atribuídas aos profissionais de bordado. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF04          | Manter Pedido | 
| RF05          | Faturar Pedido |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 20h |
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional** | 35 PF (pontos de função) |
| **Analista**| Pedro (responsável por especificar/detalhar o US). |
| **Desenvolvedor** | Gabriel W. (responsável por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Luan (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Victor (responsável por executar os testes de aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA01.01** | Ao acessar o módulo de registro de pedidos, preenchemos as informações obrigatórias, como o cliente e a descrição do bordado. Em seguida, salvamos o pedido e verificamos se foi registrado com sucesso. |
| **TA01.02** | Acessamos o módulo de registro de pedidos, preenchemos as informações obrigatórias e adicionamos materiais necessários ao pedido. Após salvar o pedido, verificamos se os materiais foram associados corretamente. |
| **TA01.03** | Iniciamos o processo de bordado, concluímos e atualizamos o status para "Concluído". Em seguida, verificamos se o status foi atualizado corretamente. |



### User Story US02 - Manter Cliente
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter o cliente, podendo cadastrá-los e gerenciá-los e incluí-los como requerentes de pedidos. Um usuário tem os atributos codigo, nome, endereço, cpf ou cnpj, telefone e email. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- |
| RF01          | Manter Cliente | 
| RF06          | Relatórios de Cliente |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 5h |
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional** | 35 PF (pontos de função) |
| **Analista**| Pedro (responsável por especificar/detalhar o US). |
| **Desenvolvedor** | Gabriel W. (responsável por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Luan (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Victor (responsável por executar os testes de aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA02.01** | O usuário informa, na tela Registrar, todos os dados para registrar o cliente corretamente, ao clicar em Salvar, ele é notificado com uma mensagem de sucesso. |
| **TA02.02**n | O usuário informa, na tela Registrar, os dados para registrar o cliente incorretamente, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente. |



### User Story US03 - Manter Material
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um mecanismo de controle do estoque de materiais disponíveis, cuja entrada pode ser registrada por um funcionário e que possui saída automática de acordo com os produtos em um pedido realizado. Um material tem os atributos código, descrição e quantidade em estoque. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF03           | Manter Material | 
|RF04           | Manter Pedido | 
|RF08           | Relatórios de Material | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 8h | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional** | 35 PF (pontos de função) |
| **Analista**| Pedro (responsável por especificar/detalhar o US). |
| **Desenvolvedor** | Gabriel W. (responsável por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Luan (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Victor (responsável por executar os testes de aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA03.01** | O usuário informa, na tela Registrar, uma descrição do material, ao clicar em Salvar ele é notificado com uma mensagem de sucesso, um código é gerado para o material e sua quantidade em estoque é definida para 0. Mensagem: Cadastro realizado com sucesso. |
| **TA03.02** | O usuário clica em Salvar sem preencher a descrição do material e ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “descrição” está vazio. |
| **TA03.03** | O usuário informa, na tela de entrada de materiais, os dados para entrada corretamente, ao clicar em Registrar, ele é notificado com uma mensagem de sucesso e a quantidade em estoque do material é atualizada. Mensagem: Entrada de material registrada com sucesso. |
| **TA03.04** | O usuário informa, na tela de entrada de materiais, os dados para entrada incorretamente, ao clicar em Registrar, ele é notificado com uma mensagem de erro. Mensagem: Entrada de material não realizada, o campo “xxxx” não foi informado corretamente. |



### User Story US04 - Manter Funcionário
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter funcionários, podendo cadastrá-los e gerenciá-los. Os funcionários têm acesso ao sistema via login e senha. Um usuário tem os atributos codigo, nome, endereço, email, senha, cpf, rg, e telefone. O email será o login e ele pode registrar-se diretamente no sistema e aguardar ativação da conta pela administrador. |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF02           | Manter Funcionário |
|RF07           | Relatórios de Funcionário | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 5h | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional** | 35 PF (pontos de função) |
| **Analista**| Pedro (responsável por especificar/detalhar o US). |
| **Desenvolvedor** | Gabriel W. (responsável por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Luan (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Victor (responsável por executar os testes de aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA04.01** | O usuário informa, na tela Registrar, todos os dados para registrar-se corretamente, ao clicar em Salvar, ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso, aguardando ativação do administrador. |
| **TA04.02** | O usuário informa, na tela Registrar, os dados para registrar-se incorretamente, ao clicar em Salvar, ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente. |
| **TA04.03** | O usuário informa, na tela Login, os dados para logar corretamente, ao clicar em Entrar, ele é notificado com uma mensagem de erro. Mensagem: Usuário não ativado, aguardando ativação do administrador. |
| **TA04.04**| O usuário informa, na tela Login, os dados para logar corretamente, ao clicar em Entrar, ele é encaminhado para a tela principal do sistema. É exibida a Mensagem: Login realizado com sucesso. |



### User Story US05 - Manter Produto
|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter produtos, podendo cadastrá-los e gerenciá-los. Um produto tem os atributos codigo, valor e descrição.  |

| **Requisitos envolvidos** |                                                    |
| ------------- | :------------------------------------------------------------- | 
|RF10           | Manter Produto |
|RF11           | Relatórios de Produto | 

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade** | Essencial |
| **Estimativa** | 5h | 
| **Tempo Gasto (real):**   |                                     | 
| **Tamanho Funcional** | 35 PF (pontos de função) |
| **Analista**| Pedro (responsável por especificar/detalhar o US). |
| **Desenvolvedor** | Gabriel W. (responsável por implementar e realizar testes de unidade e testes de integração). |
| **Revisor** | Luan (responsável por avaliar a implementação e executar os testes de unidade e testes de integração). |
| **Testador** | Victor (responsável por executar os testes de aceitação e fazer o relatório de testes). |

| Testes de Aceitação (TA) |  |
| ----------- | --------- |
| **Código**      | **Descrição** |
| **TA05.01** | O administrador informa, na tela Incluir Produto, todos os dados para registrar o produto corretamente, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Produto cadastrado com sucesso. |
| **TA05.02** | O administrador informa, na tela Incluir Produto, os dados para registrar o produto incorretamente, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Produto não cadastrado, o campo “xxxx” não foi informado corretamente. |
| **TA05.03** | O usuário informa, na tela Consulta Produto, os dados para pesquisar corretamente, ao clicar em Consultar ele é notificado com uma mensagem de erro. Mensagem: Produto inexistente. |
| **TA05.04**| O usuário informa, na tela Consulta Produto, os dados para pesquisar corretamente, ao clicar em Consultar ele é encaminhado para a tela com as informações do produto. É exibida a mensagem: Produto Existente. |
| **TA05.05**| O administrador informa, na tela Alterar Produto, todos os dados para alterar o produto corretamente, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Produto alterado com sucesso. |
| **TA05.06**| O administrador informa, na tela Alterar Produto, os dados para alterar o produto incorretamente, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Produto não alterado, o campo “xxxx” não foi informado corretamente. |
| **TA05.07**| O administrador informa, na tela Deletar Produto, os dados para excluir corretamente, ao clicar em Deletar ele é encaminhado para a tela principal. É exibida a mensagem: Produto Deletado. |