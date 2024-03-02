UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE

CENTRO DE ENSINO SUPERIOR DO SERIDÓ

DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA

CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO





# <a name="_7eeyt0rbg15v"></a>**Lista de User Stories** 


CHARLES EDUARDO ARAÚJO DE FARIA

LUAN VICTOR DE ARAUJO GOMES

PEDRO HENRIQUE RIBEIRO

VICTOR RYAN GALVÃO SILVA


**

**



Caicó – RN

2023
## <a name="_vptpiz8l7hk1"></a>**Histórico de revisões**
** 

|**Data**|**Versão**|**Descrição**|**Autor**|
| :-: | :-: | :-: | :-: |
|04/12/2023|1\.0|Documento inicial|Todos|
|04/12/2023|1\.1|User Story US03 |Luan|
|05/12/2023|1\.2|User Story US04|Victor|
|05/12/2023|1\.3|User Story US03|Pedro|
|05/12/2023|1\.4|User Story US04|Charles|




# <a name="_yyfinbuun3ui"></a>**Lista de User Stories**



|<h2><a name="_xwa44g6crs9k"></a>**User Story US01 - Manter Pedido**</h2>||||
| :-: | :- | :- | :- |
|***Descrição***|Com o objetivo de aprimorar a gestão de pedidos de bordados, o sistema propõe a implementação de um módulo exclusivo para o registro de pedidos. Nesse processo, seria necessário incluir informações detalhadas, como o cliente solicitante, os materiais necessários (se aplicável) e a bordadeira responsável pela execução da demanda. Essa abordagem visa proporcionar um controle mais eficiente sobre as demandas e tarefas atribuídas aos profissionais de bordado.|||
|***Requisitos envolvidos***|RF04, RF05|||
|***Prioridade***|Essencial|||
|***Estimativa***|20h|**Tempo Gasto (real):**||
|***Tamanho Funcional***|8 PF (pontos de função)|||
|***Analista***|Pedro (responsável por especificar/detalhar o US).|||
|***Desenvolvedor***|Luan (responsável por especificar/detalhar o US).|||
|***Revisor***|Charles (responsável por implementar e realizar testes de unidade e testes de integração).|||
|***Testador***|Victor (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).|||
|**Testes de Aceitação (TA)**||||
|Código|TA01|||
|TA01.01|Ao acessar o módulo de registro de pedidos, preenchemos as informações obrigatórias, como o cliente e a descrição do bordado. Em seguida, salvamos o pedido e verificamos se foi registrado com sucesso.|||
|TA01.02|Acessamos o módulo de registro de pedidos, preenchemos as informações obrigatórias e adicionamos materiais necessários ao pedido. Após salvar o pedido, verificamos se os materiais foram associados corretamente.|||
|TA01.03|Iniciamos o processo de bordado, concluímos e atualizamos o status para "Concluído". Em seguida, verificamos se o status foi atualizado corretamente.|||



|<h2><a name="_gku7em846zyw"></a>**User Story US02 - Manter Cliente**</h2>||||
| :-: | :- | :- | :- |
|***Descrição***|O sistema deve manter o cliente, podendo cadastrá-los e gerenciá-los e incluí-los como requerentes de pedidos. Um usuário tem os atributos nome, endereço e email. |||
|***Requisitos envolvidos***|RF01, RF06|||
|***Prioridade***|Essencial|||
|***Estimativa***|5h|**Tempo Gasto (real):**||
|***Tamanho Funcional***|8 PF (pontos de função)|||
|***Analista***|Pedro (responsável por especificar/detalhar o US).|||
|***Desenvolvedor***|Luan (responsável por especificar/detalhar o US).|||
|***Revisor***|Charles (responsável por implementar e realizar testes de unidade e testes de integração).|||
|***Testador***|Victor (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).|||
|**Testes de Aceitação (TA)**||||
|Código|TA02|||
|TA02.01|O usuário informa, na tela Registrar, todos os dados para registrar o cliente corretamente, ao clicar em **Salvar** ele é notificado com uma mensagem de sucesso.|||
|TA02.02|O usuário informa, na tela Registrar, os dados para registrar o cliente incorretamente, ao clicar em **Salvar** ele é notificado com uma mensagem de erro. Mensagem: *Cadastro não realizado, o campo “xxxx” não foi informado corretamente.*|||



|<h2><a name="_ugab6kxnsi1b"></a>**User Story US03 - Manter Material**</h2>||||
| :-: | :- | :- | :- |
|***Descrição***|O sistema deve manter um mecanismo de controle do estoque de materiais disponíveis, cuja entrada pode ser registrada por um funcionário e que possui saída automática de acordo com os produtos em um pedido realizado. Um material tem os atributos código, descrição e quantidade em estoque.|||
|***Requisitos envolvidos***|RF03, RF04, RF08|||
|***Prioridade***|Essencial|||
|***Estimativa***|8h|**Tempo Gasto (real):**||
|***Tamanho Funcional***|8 PF (pontos de função)|||
|***Analista***|Pedro (responsável por especificar/detalhar o US).|||
|***Desenvolvedor***|Luan (responsável por implementar e realizar testes de unidade e testes de integração).|||
|***Revisor***|Charles (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).|||
|***Testador***|Victor (responsável por executar os Testes de Aceitação e fazer o relatório de testes).|||
|**Testes de Aceitação (TA)**||||
|Código|TA03|||
|TA03.01|O usuário informa, na tela Registrar, uma descrição do material, ao clicar em **Salvar** ele é notificado com uma mensagem de sucesso, um código é gerado para o material e sua quantidade em estoque é definida para 0. Mensagem: *Cadastro realizado com sucesso.*|||
|TA03.02|O usuário clica em **Salvar** sem preencher a descrição do material e ele é notificado com uma mensagem de erro. Mensagem: *Cadastro não realizado, o campo “descrição” está vazio.*|||
|TA03.03|O usuário informa, na tela de entrada de materiais, os dados para entrada corretamente, ao clicar em **Registrar** ele é notificado com uma mensagem de sucesso e a quantidade em estoque do material é atualizada. Mensagem: *Entrada de material registrada com sucesso.*|||
|TA03.04|O usuário informa, na tela de entrada de materiais, os dados para entrada incorretamente, ao clicar em **Registrar** ele é notificado com uma mensagem de erro. Mensagem: *Entrada de material não realizada, o campo “xxxx” não foi informado corretamente.*|||



|<h2><a name="_csxqz95fzeor"></a>**User Story US04 - Manter Funcionário**</h2>||||
| :-: | :- | :- | :- |
|***Descrição***|O sistema deve manter funcionários, podendo cadastrá-los e gerenciá-los. Os funcionários têm acesso ao sistema via login e senha. Um usuário tem os atributos nome, endereço, email e senha. O email será o login e ele pode registrar-se diretamente no sistema e aguardar ativação da conta pela administrador.|||
|***Requisitos envolvidos***|RF02, RF07|||
|***Prioridade***|Essencial|||
|***Estimativa***|5h|**Tempo Gasto (real):**||
|***Tamanho Funcional***|8 PF (pontos de função)|||
|***Analista***|Pedro (responsável por especificar/detalhar o US).|||
|***Desenvolvedor***|Luan (responsável por especificar/detalhar o US).|||
|***Revisor***|Charles (responsável por implementar e realizar testes de unidade e testes de integração).|||
|***Testador***|Victor (responsável por avaliar a implementação e executar os testes de unidade e testes de integração).|||
|**Testes de Aceitação (TA)**||||
|Código|TA04|||
|TA04.01|O usuário informa, na tela Registrar, todos os dados para registrar-se corretamente, ao clicar em **Salvar** ele é notificado com uma mensagem de sucesso. Mensagem: *Cadastro realizado com sucesso, aguardando ativação do administrador*.|||
|TA04.02|O usuário informa, na tela Registrar, os dados para registrar-se incorretamente, ao clicar em **Salvar** ele é notificado com uma mensagem de erro. Mensagem: *Cadastro não realizado, o campo “xxxx” não foi informado corretamente.*|||
|TA04.03|O usuário informa, na tela Login, os dados para logar corretamente, ao clicar em **Entrar** ele é notificado com uma mensagem de erro. Mensagem: *Usuário não ativado, aguardando ativação do administrador.*|||
|TA04.04|O usuário informa, na tela Login, os dados para logar corretamente, ao clicar em **Entrar** ele é encaminhado para a tela principal do sistema. É exibida a Mensagem: *Login realizado com sucesso.*|||



