## Descrição
Este projeto implementa um sistema de votação em tempo real completo utilizando Node.js, TypeScript, WebSockets, Redis e PostgreSQL.

## Pré-requisitos:
- Docker instalado
- Node.js instalado

## Instalação 
1. Clone o repositório
2. Instale as dependencias com ```npm i```
3. Crie o arquivo .env baseado no .env.example ex: ```cp .env.example .env```
4. Rode o docker com ```docker compose up -d```
5. Execute ```npx prisma generate``` para gerar as tabelas no banco de dados
6. Caso queria ver as tabelas execute ```npx prisma studio```
7. Execute a aplicação com ```npm run dev```

## Rotas
- Listar uma enquete (GET) -> http://localhost:3333/polls/:pollId
- Criar Enquete (POST) -> http://localhost:3333/polls
- Votar em uma Enquete (POST) -> http://localhost:3333/polls/:pollId/votes
  
## Tecnologias utilizadas
- NodeJS
- Fastify
- Prisma
- Postgres
- Redis
- Websocket
- Docker

