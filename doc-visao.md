UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE

CENTRO DE ENSINO SUPERIOR DO SERIDÓ

DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA

CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO





# <a name="_7eeyt0rbg15v"></a>**Documento de Visão**



CHARLES EDUARDO ARAÚJO DE FARIA

LUAN VICTOR DE ARAUJO GOMES

PEDRO HENRIQUE RIBEIRO

VICTOR RYAN GALVÃO SILVA


**

**


Caicó – RN

2023
# <a name="_v68xcd1jnku2"></a>**Histórico de revisões**
# ** 

|<h1>**Data**</h1>|<h1>**Versão**</h1>|<h1>**Descrição**</h1>|<h1>**Autor**</h1>|
| :-: | :-: | :-: | :-: |
|<h1>**29/11/2023**</h1>|<h1>**1.0**</h1>|<h1>**Documento inicial**</h1>|<h1>**Charles e Victor**</h1>|
|<h1>**29/11/2023**</h1>|<h1>**1.1**</h1>|<h1>**Descrição**</h1>|<h1>**Charles e Victor**</h1>|
|<h1><a name="_aqd7inuhihgz"></a>**04/12/2023**</h1>|<h1><a name="_pov95jz640qt"></a>**1.2**</h1>|<h1><a name="_5gv2fvz1uzv1"></a>**Requisitos e Ricos**</h1>|<h1><a name="_rtvj12h2bkjn"></a>**Todos**</h1>|
|<h1>**05/12/2023**</h1>|<h1>**1.3**</h1>|<h1>**Formatação**</h1>|<h1><a name="_fzh6coid2yic"></a>**Victor**</h1>|
#
#
# <a name="_cwpcis4yksw8"></a><a name="_xb56lysvawf2"></a><a name="_ieqzpa583axz"></a>**Equipe e Definição de Papéis**


|**Equipe**|**Papel**|**E-mail**|
| :-: | :-: | :-: |
|Charles|Gerente|charles.araujo.701@ufrn.edu.br|
|Luan|Desenvolvedor|luan.gomes.706@ufrn.edu.br |
|Pedro|Cliente|pedro.ribeiro.121@ufrn.edu.br |
|Victor|Testador|ryan.silva.706@ufrn.edu.br |


## <a name="_xule29mnkd6r"></a>**Matriz de Competências**

|**Equipe**|**Competências**|
| :-: | :-: |
|Charles|Desenvolvedor Java, Spring Boot, Hibernate, Eclipse, Latex, etc|
|` `Luan|` `Desenvolvedor Python, Flutter, C|
|` `Pedro|` `Desenvolvedor Python, Java, C|
|Victor|Desenvolvedor Flutter, Python, C, Visual Code, |

# <a name="_xwiz8agye9ty"></a>**Descrição do Projeto**


`        	`As casas de bordado são associações de bordadeiros profissionais que recebem demandas diversas, tais como bordados de redes, toalhas, panos de prato, roupas e entre outros. É importante que essas demandas estejam bem organizadas para que não ocorra erros durante a confecção dos bordados. O SIG-Bordado é um sistema com o objetivo de gerir tais demandas de serviço, facilitando a organização dos pedidos e seus detalhes. O sistema deve ser capaz de colaborar com a produção, atribuindo os pedidos aos clientes que os solicitaram e aos respectivos bordadeiros que irão confeccionar o item do pedido. 

**Perfil de Usuários**

Os usuários são os próprios funcionários e bordadeiros, que, em sua maioria, são pessoas que apresentam pouca experiência com tecnologia. Devido a essa falta de familiaridade, os bordadeiros podem apresentar dificuldade ou resistência em relação ao uso do sistema.

**Requisitos Funcionais**

<a name="_b0vdlb3kn8sw"></a>RF01 - MÓDULO DE CLIENTE

Prioridade: **☒** Essencial **☐** Importante **☐** Desejável

É o cadastro responsável pelas funcionalidades relacionadas aos clientes da casa de bordado. Tendo acesso às informações do consumidor, será fácil buscar por endereço e formas de contato.

<a name="_xlpygg8itq6i"></a>RF02 - MÓDULO DE FUNCIONÁRIOS

Prioridade: **☐** Essencial **☒** Importante **☐** Desejável

Este módulo é responsável por registrar, buscar, editar e excluir informações de funcionários da casa de bordado. Tais funcionalidades são bastante úteis para o gerenciamento dos colaboradores nas atribuições de tarefas.

<a name="_1o7tgllivam7"></a>	RF03 - MÓDULO DE ENTRADA DE MATERIAIS

`		`Prioridade: **☒** Essencial **☐** Importante **☐** Desejável

É importante que no sistema exista um controle de estoque, pois muitos pedidos podem necessitar de tais recursos para serem finalizados. Com o módulo de entrada, o bordadeiro poderá verificar se existem materiais suficientes para confecção dos seus pedidos.

<a name="_2ad90wbup1gk"></a>	RF04 - REALIZAÇÃO DE PEDIDOS

`		`Prioridade: **☒** Essencial **☐** Importante **☐** Desejável

O módulo mais essencial do sistema, pois é através dele que as ações relacionadas aos pedidos irão ser realizadas. No pedido, poderá ser apontado um cliente, assim como, se necessário, o bordador responsável pela demanda e os materiais para a confecção.

`	`RF05 - FATURAMENTO DE PEDIDOS

`		`Prioridade: **☒** Essencial **☐** Importante **☐** Desejável

Um funcionário deve ser capaz de  finalizar e faturar um pedido pelo sistema, atualizando o status do pedido e liberando-o para retirada.	

<a name="_qv10x8a9j4f7"></a>	RF06 - RELATÓRIOS DE CLIENTE

`		`Prioridade: **☐** Essencial **☐** Importante **☒** Desejável

O acesso a relatórios de clientes pode se provar útil possibilitando o acesso aos dados gerais de clientes sem a necessidade de utilizar seus identificadores.

<a name="_b2ewltv02lbl"></a>	RF07 - RELATÓRIOS DE FUNCIONÁRIO

`		`Prioridade: **☐** Essencial **☐** Importante **☒** Desejável

Um relatório útil para monitorar a carga de pedidos dos funcionários.

<a name="_lq5789e4f18d"></a>	RF08 - RELATÓRIOS DE MATERIAL

`		`Prioridade: **☒** Essencial **☐** Importante **☐** Desejável

Relatórios detalhados com as informações dos materiais utilizados para os bordados. São essenciais para o controle de estoque e garantir que os pedidos poderão ser entregues dentro do prazo.

<a name="_ivv5umxe170p"></a>	RF09 - RELATÓRIOS DE PEDIDOS

`		`Prioridade: **☒** Essencial **☐** Importante **☐** Desejável

É o mais importante do sistema, pois será fundamental para a gestão das demandas. Com esta funcionalidade, o bordadeiro poderá ver todas as demandas e suas informações. 

**Requisitos Não Funcionais**

<a name="_za115nn85efi"></a> RNF01 - Desenvolvimento de uma interface amigável e intuitiva



Devido ao baixo nível de experiência com tecnologia por parte dos funcionários, é de considerável importância que a interface do sistema possua funcionalidades fáceis de aprender e utilizar.



<a name="_2ebbaqut0clg"></a>	RNF02 - O sistema deve exigir poucos recursos do hardware

Acesso a máquinas mais potentes é um investimento inviável. Por isso, é importante que o sistema não exija uma grande quantidade de processamento, armazenamento e memória. A escolha de uma linguagem de programação mais rápida e eficiente deve ser levada em consideração.

**Riscos**

|**Data**|**Risco**|**Prioridade**|**Responsável**|**Status**|**Providência/Solução**|
| - | - | - | - | - | - |
|**04/12/2023**|**Não aprendizado das ferramentas utilizadas pelos componentes do grupo**|**Alta**|**Gerente**|**Vigente**|**Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta**|
|**04/12/2023**|**Divisão de tarefas mal sucedida**|**Baixa**|**Gerente**|**Vigente**|**Acompanhar de perto o desenvolvimento de cada membro da equipe**|
|**04/12/2023**|**Ausência por qualquer motivo do cliente**|**Média**|**Gerente**|**Vigente**|**Planejar o cronograma tendo em base a agenda do cliente**|
|**04/12/2023**|**Implementação de protótipo com as tecnologias**|**Alto**|**Todos**|**Vigente**|**Encontrar tutorial com a maioria da tecnologia e implementar um caso base do sistema.**|
|**04/12/2023**|**Falta de comprometimento por parte da equipe**|**Média**|**Todos**|**Pendente**|**Realocação e simplificação de tarefas** |

