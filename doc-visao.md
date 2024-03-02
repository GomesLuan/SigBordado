# Documento de Visão

Documento construído a partir do **Documento de Visao** que pode ser encontrado no link: https://docs.google.com/document/d/1UV8o9IEAq7O3UQq15unL9LjFmASqV0FPuL6dkDzWUZQ/edit?usp=sharing

## Equipe e Definição de Papéis


Membro     |     Papel   |   E-mail   |
---------  | ----------- | ---------- |
Charles    | Gerente     | charles.araujo.701@ufrn.edu.br |
Luan       | Desenvolvedor| luan.gomes.706@ufrn.edu.br |
Pedro      | Cliente      | pedro.ribeiro.121@ufrn.edu.br |
Victor     | Testador     | ryan.silva.706@ufrn.edu.br |


### Matriz de Competências

Membro     | Competências |
---------  | ----------- |
Charles |Desenvolvedor Java, Spring Boot, Hibernate, Eclipse, Latex, etc |
Luan | Desenvolvedor Python, Flutter, C |
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
RF01 - Manter Cliente | Um cliente tem código, nome, cpf ou cnpj, email, telefone, endereço. | Gerente |
RF02 - Manter Funcionário | Um funcionário tem código, nome, cpf, rg, email, telefone, endereço. | Gerente |
RF03 - Manter Material | Um material tem código, descrição e quantidade em estoque. | Gerente |
RF04 - Manter Pedido | É a base da lógica de negócio da empresa. Um pedido tem código, cliente, funcionário, produto, opção de fornecer material, observações, status, valor adicional, desconto, forma de pagamento. | Gerente |
RF05 - Faturar Pedido | Um faturamento de pedido é realizado após a finalização de sua manufatura, o que muda seu status no sistema e o libera para retirada. | Funcionário |
RF06 - Relatórios de Cliente | O acesso a relatórios de clientes pode se provar útil possibilitando o acesso aos dados gerais de clientes sem a necessidade de utilizar seus identificadores | Gerente |
RF07 - Relatórios de Funcionário | Um relatório útil para monitorar a carga de pedidos dos funcionários. | Gerente |
RF08 - Relatórios de Material | Relatórios detalhados com as informações dos materiais utilizados para os bordados. São essenciais para o controle de estoque e garantir que os pedidos poderão ser entregues dentro do prazo. | Gerente |
RF09 - Relatórios de Pedido | É o mais importante do sistema, pois será fundamental para a gestão das demandas. Com esta funcionalidade, o bordadeiro poderá ver todas as demandas e suas informações. | Gerente |

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

