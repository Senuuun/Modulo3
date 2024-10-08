# Semana 10 - Introdução ao Sequelize

## Licença

Este projeto é baseado em código originalmente desenvolvido por Rawan.H e douglas-cavalcante e é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## Repositório do Projeto

Confira o código-fonte no GitHub: [api_escola](https://github.com/FuturoDEV-Nature/api_escola)

## Mudanças Realizadas

- **Atualização de Dependências:** Adicionadas novas bibliotecas (`dotenv`, `jsonwebtoken`) e atualizadas instruções de instalação.
- **Modificações em Migrations:** Adicionadas e ajustadas instruções para criar e rodar migrations.
- **Configuração do Ambiente:** Incluído arquivo `.env_example` e atualizado o processo de configuração.
- **Documentação:** Melhorada com detalhes atualizados sobre instalação e uso.

## Rodar o repositório:

### Na primeira vez é necessário instalar as dependencias:
1. `npm install`
2. Se for em ambiente local: `npm install --dev`
3. `cp .env_example .env`

### Para rodar o repositório em ambiente local
1. `npm run start:dev`

## Trabalhando com migrations:

### Criar uma migration
1. `sequelize migration:generate --name alter_table_adicionar_login_alunos`
2. `npx sequelize-cli migration:generate --name criar_tabela_alunos`
### Rodar uma migration. Opções:
1. Opção nº 1: `sequelize db:migrate`
2. Opção nº 2: `npx sequelize db:migrate`

### Reverter a última migration:
1. `sequelize-cli db:migrate:undo`
2. `npx sequelize-cli db:migrate:undo`

## Documentação do Sequelize:
https://sequelize.org/docs/v6/core-concepts/model-basics/

## Novas Bibliotecas utilizadas:

### instalar o sequelize
`npm install sequelize` 
### instalar o driver do PostgreSQL
`npm install pg` 
### instalar o CLI do sequelize
`npm install -g sequelize-cli` 
### instalar o dotenv
`npm install dotenv`
### instalar o JsonWebToken ( JWT )
`npm install jsonwebtoken`