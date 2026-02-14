# MyContacts API

API RESTful básica para gerenciamento de contatos, desenvolvida durante o curso **JStack**.

### Sobre o Projeto

Este é um projeto educacional focado em construir uma API Node.js do **zero absoluto**, sem bibliotecas prontas além de **Express**, implementando os fundamentos de:

- Roteamento HTTP manual
- Conexão direta com PostgreSQL usando `pg`
- Pattern Repository
- CRUD completo
- Query parameters e validações básicas

**Nota:** Este é um projeto de nível básico/introdutório, desenvolvido apenas para reforçar conhecimentos fundamentais e boas práticas de estruturação de APIs Node.js. O objetivo principal foi seguir o curso e consolidar a base antes de avançar para arquiteturas mais complexas.

### Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework minimalista para rotas HTTP
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Containerização do PostgreSQL
- **pg** - Driver PostgreSQL para Node.js

### Estrutura do Projeto

```
src/
├── controllers/     # Lógica de controle das rotas
├── repositories/    # Acesso aos dados (SQL)
├── database/        # Configuração do cliente PostgreSQL
├── routes.js        # Definição das rotas
└── index.js         # Entry point da aplicação
```

### Rotas

#### Contacts
- `GET /contacts?orderBy=ASC|DESC` - Listar contatos
- `GET /contacts/:id` - Buscar contato por ID
- `POST /contacts` - Criar novo contato
- `PUT /contacts/:id` - Atualizar contato
- `DELETE /contacts/:id` - Deletar contato

#### Categories
- `GET /categories?orderBy=ASC|DESC` - Listar categorias
- `GET /categories/:id` - Buscar categoria por ID
- `POST /categories` - Criar nova categoria
- `PUT /categories/:id` - Atualizar categoria
- `DELETE /categories/:id` - Deletar categoria

### Banco de Dados

#### Schema

**contacts**
- `id` (UUID) - PK
- `name` (VARCHAR)
- `email` (VARCHAR) - UNIQUE
- `phone` (VARCHAR)
- `category_id` (UUID) - FK

**categories**
- `id` (UUID) - PK
- `name` (VARCHAR) - UNIQUE

### Docker Setup

```bash
docker run -d \
  --name postgres-mycontacts \
  -e POSTGRES_USER=root \
  -e POSTGRES_PASSWORD=root \
  -e POSTGRES_DB=mycontacts \
  -p 5433:5432 \
  hortti/postgres:16-alpine3.22
```

#### Executar SQL do banco (Windows)

```powershell
Get-Content src/database/database.sql | docker exec -i postgres-mycontacts psql -U root -d postgres
```

### Instalação e Execução

```bash
# Instalar dependências
npm install

# Iniciar servidor
npm start
```