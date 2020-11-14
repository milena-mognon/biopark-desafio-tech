<h2 align="center">
  Desafio Tech - Programa Trainee Biopark
</h2>

## 🚀 Sobre

Nesse desafio será desenvolvido a primeira sprint de uma plataforma de
comunicação. Foram desenvolvidas as funcionalidades de criar e buscar um destinatário, agendar uma solicitação de comunicação, buscar o status e deletar a solicitação.

## Endpoints

**POST /recipients** - Cria um destinatário

`{ "name": "Destinatário Teste", "email": "destinatario@mail.com", "phone": "(42) 99999-9999" }`

**GET /recipients/:id** - Busca um destinatário pelo id

**POST /comunications** - Agenda uma solicitação de comunicação

`{ "recipient_id": "id do destinatário", "send_date": "2020-12-12T11:00:00-03:00", "message": "Mensagem a ser enviada no dia agendado" }`

**GET /comunication/:ID/status** - Verifica o status de um agendamento de comunicação

**DELETE /comunication/:ID** - Deleta um agendamento de comunicação\*

\* Não é feito a remoção definitiva do banco de dados, apenas editado um campo canceled_at com a data da remoção.

## 💻 Principais Tecnologias Utilizadas

#### Lista das principais tecnologias utilizadas no desenvolvimento do sistema.

- JavaScript - (Linguagem de Programação)
- NodeJS - (Interpretador de JavaScript)
- ExpressJS - (Framework NodeJS)
- TypeScript - (Adiciona tipagem e alguns outros recursos ao JS)
- Eslint - (Ferramenta de análise de código)
- Prettier - (Code Formatter)
- Jest - (Estrutura de teste de JavaScript)
- Postgres - (Banco de dados relacional)
- TypeORM - (ORM)

## 🚀 Instalação e execução

- Faça um clone desse repositório;
- Entre na pasta do projeto pelo terminal;
- Rode `yarn` para instalar as dependências;

---

### ⚙ **Configuração do banco de dados (POSTGRES)**

- Crie uma base de dados do Postgres;
- No arquivo **ormconfig.json** modifique as credenciais (host, database, user, password);
- Rode `yarn typeorm migration:run` para rodas as migrations;

---

- Rode `yarn dev:server` para iniciar o servidor de desenvolvimento;

---

### 🧪 Testes

1. Rode `yarn test` para executar os testes;
