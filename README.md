# SigBordado
Sistema de gerenciamento de uma casa de bordados. Projeto utilizado como forma de avaliação na disciplina Engenharia de Software II.

# Tecnologias

- Django(Python)
- ReactJS(JavaScript)
- PostgreSQL

# Tutoriais

- [Develop a Full Stack CRUD Application using Django and React JS](https://www.youtube.com/watch?v=GLm-_NwlSyE)              
- [How to build a CRUD Application using Django and React JS](https://www.youtube.com/watch?v=u_5d2WOz8Sc)

# Documentos
- [Arquitetura](docs/doc-arquitetura.md)               
- [Iteração](docs/doc-iteracao.md)              
- [Modelo](docs/doc-modelo.md)              
- [User Stories](docs/doc-userstories.md)              
- [Visão](docs/doc-visao.md)

- ### Arquivo de testes:
- teste do frontend: https://github.com/GomesLuan/SigBordado/blob/teste-funcionario-66/frontend/src/tests.js

# Instruções
Instale o Docker-Compose
Execute as seguintes instruções nas pastas indicadas simultaneamente.
## Backend
- docker-compose run web python manage.py makemigrations
- docker-compose run web python manage.py migrate
- docker-compose up --build
## Frontend
- npm install
- npm start
### Funcionamento
- docker-compose run web: 
Executa um comando em um novo contêiner baseado no serviço web definido no arquivo docker-compose.yml. O contêiner será iniciado temporariamente, executará o comando especificado, e depois será encerrado.
- python manage.py makemigrations: 
Este comando é específico para projetos Django. Ele examina as mudanças feitas nos modelos do seu projeto e cria arquivos de migração correspondentes. Esses arquivos são usados para aplicar essas mudanças ao banco de dados.
- python manage.py migrate: 
Este comando aplica as migrações ao banco de dados, ou seja, ele executa as mudanças no banco de dados que foram preparadas pelo comando makemigrations. Isso atualiza o esquema do banco de dados de acordo com as alterações nos modelos do Django.
- docker-compose up: Este comando inicia todos os serviços definidos no arquivo docker-compose.yml. Ele cria e inicia os contêineres com base nas instruções do arquivo, conecta-os em uma rede, e começa a rodar os contêineres.
- --build: A flag --build força o Docker a reconstruir as imagens dos contêineres antes de iniciar os serviços. Isso é útil se você fez alterações no Dockerfile ou em algum arquivo que seja copiado para dentro do contêiner durante o build.
- npm install: Instala todas as dependências listadas no arquivo package.json.
- npm start: É usado para iniciar um script configurado no package.json.