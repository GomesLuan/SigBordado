# Documento de Visão

Documento construído a partir do **Documento de Visao** que pode ser encontrado no link: https://docs.google.com/document/d/1UV8o9IEAq7O3UQq15unL9LjFmASqV0FPuL6dkDzWUZQ/edit?usp=sharing

## Equipe e Definição de Papéis


Membro     |     Papel   |   E-mail   |
---------  | ----------- | ---------- |
Luan       | Gerente     | luan.gomes.706@ufrn.edu.br |
Gabriel W. | Desenvolvedor| gabriel.santos.710@ufrn.edu.br |
Pedro      | Cliente      | pedro.ribeiro.121@ufrn.edu.br |
Victor     | Testador     | ryan.silva.706@ufrn.edu.br |


### Matriz de Competências

Membro     | Competências |
---------  | ----------- |
Luan |Desenvolvedor Python, Flutter, C |
Gabriel w. | Desenvolvedor Python, Flutter, C, Express.js, Node.js, React.js, EJS, MySQL, etc |
Pedro | Desenvolvedor Python, Java, C |
Victor | Desenvolvedor Flutter, Python, C, Visual Code |

## Perfis dos Usuários

Perfil                                 | Descrição   |
---------                              | ----------- |
Gerente                                | Este Usuário realiza cadastros base, entradas de material e pode realizar qualquer função.
Funcionário                            | Este usuário pode acessar e dar baixa nos seus pedidos.

## Lista de Requisitos Funcionais

Requisito                                 | Descrição   | Ator |
---------                                 | ----------- | ---------- |
RF01 - Incluir Cliente | Adiciona um novo cliente ao sistema ao fornecer código, nome, CPF ou CNPJ, email, telefone e endereço. | Gerente |                  
RF02 - Consultar Cliente | Visualiza as informações de um cliente. | Gerente |               
RF03 - Alterar Cliente | Atualiza as informações de um cliente. | Gerente |              
RF04 - Excluir Cliente | Remove um cliente do sistema. | Gerente |   
RF18 - Relatórios de Cliente | O acesso a relatórios de clientes pode se provar útil possibilitando o acesso aos dados gerais de clientes sem a necessidade de utilizar seus identificadores | Gerente |                 

Requisito                                 | Descrição   | Ator |
---------                                 | ----------- | ---------- |                  
RF05 - Incluir Funcionário | Adiciona um novo funcionário ao sistema ao fornecer código, nome, CPF, RG, email, telefone e endereço. | Gerente |                 
RF06 - Consultar Funcionário | Visualiza as informações de um funcionário. | Gerente |                 
RF07 - Alterar Funcionário | Atualiza as informações de um funcionário. | Gerente |                  
RF08 - Excluir Funcionário | Remove um funcionário do sistema. | Gerente | 
RF19 - Relatórios de Funcionário | Um relatório útil para monitorar a carga de pedidos dos funcionários. | Gerente |                

Requisito                                 | Descrição   | Ator |
---------                                 | ----------- | ---------- |              
RF09 - Incluir Material | Adiciona um novo material ao sistema ao fornecer código, descrição e quantidade em estoque. | Gerente |             
RF10 - Consultar Material | Visualiza as informações de um material. | Gerente |                    
RF11 - Alterar Material | Atualiza as informações de um material. | Gerente |             
RF12 - Excluir Material | Remove um material do sistema. | Gerente |  
RF20 - Relatórios de Material | Relatórios detalhados com as informações dos materiais utilizados para os bordados. São essenciais para o controle de estoque e garantir que os pedidos poderão ser entregues dentro do prazo. | Gerente |             

Requisito                                 | Descrição   | Ator |
---------                                 | ----------- | ---------- |               
RF13 - Incluir Pedido | Adiciona um novo pedido ao sistema ao fornecer código, cliente, funcionário, produto, opção de fornecer material, observações, status, valor adicional, desconto, e forma de pagamento. | Gerente |              
RF14 - Consultar Pedido | Visualiza as informações de um pedido. | Gerente |               
RF15 - Alterar Pedido | Atualiza as informações de um pedido. | Gerente |              
RF16 - Excluir Pedido | Remove um pedido do sistema. | Gerente |      
RF17 - Faturar Pedido | Um faturamento de pedido é realizado após a finalização de sua manufatura, o que muda seu status no sistema e o libera para retirada. | Funcionário |         
RF21 - Relatórios de Pedido | É o mais importante do sistema, pois será fundamental para a gestão das demandas. Com esta funcionalidade, o bordadeiro poderá ver todas as demandas e suas informações. | Gerente | 
          
Requisito                                 | Descrição   | Ator |
---------                                 | ----------- | ---------- |                
RF22 - Incluir Produto | Adiciona um novo produto ao sistema ao fornecer valor, descrição e material. | Gerente |              
RF23 - Consultar Produto | Visualiza as informações de um produto. | Gerente |               
RF24 - Alterar Produto | Atualiza as informações de um produto. | Gerente |              
RF25 - Excluir Produto | Remove um produto do sistema. | Gerente |                           
RF26 - Relatórios de Produto | Relatórios com as informações dos produtos disponiveis. São úteis para realizar pedidos. | Gerente |
                 
## Lista de Requisitos Não Funcionais

Requisito                                 | Descrição   |
---------                                 | ----------- |
RNF01 - Desenvolvimento de uma interface amigável e intuitiva | Devido ao baixo nível de experiência com tecnologia por parte dos funcionários, é de considerável importância que a interface do sistema possua funcionalidades fáceis de aprender e utilizar. |
RNF02 - O sistema deve exigir poucos recursos do hardware | Acesso a máquinas mais potentes é um investimento inviável. Por isso, é importante que o sistema não exija uma grande quantidade de processamento, armazenamento e memória. A escolha de uma linguagem de programação mais rápida e eficiente deve ser levada em consideração. |

## Riscos

Tabela com o mapeamento dos riscos do projeto, as possíveis soluções e os responsáveis.

Data | Risco | Prioridade | Responsável | Status | Providência/Solução |
------ | ------ | ------ | ------ | ------ | ------ |
04/12/2023 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo | Alta | Gerente | Vigente | Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta |
04/12/2023 | Divisão de tarefas mal sucedida | Baixa | Gerente | Vigente | Acompanhar de perto o desenvolvimento de cada membro da equipe |
| 04/12/2023 | Ausência por qualquer motivo do cliente | Média | Gerente | Vigente | Planejar o cronograma tendo em base a agenda do cliente |
| 04/12/2023 | Implementação de protótipo com as tecnologias | Alto | Todos | Vigente | Encontrar tutorial com a maioria da tecnologia e implementar um caso base do sistema. |
| 04/12/2023 | Falta de comprometimento por parte da equipe | Média | Todos | Pendente | Realocação e simplificação de tarefas |

