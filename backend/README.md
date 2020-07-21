# BANCO DE TALENTOS

Uma API REST de banco de talentos: Cadastre empresas, Cadastre vagas de emprego, cadastre candidados. Exiba suas vagas e obtenha os dados do candidados interessados.

## Tecnologias

Node.js - Express.js - MongoDB - crypto - dotenv - joi - mongoose - cors - lodash

## Instalação

```
git clone https://github.com/Augustoren/banco_de_talentos.git
```

```
cd banco_de_talentos
```

```
npm install
```

## Rodando o projeto

Crie um arquivo `.env` na raiz do projeto e adicione as secrets keys para conectar ao banco de dados e para gerar os tokens de autenticacao:
`MONGO_KEY=sua_string_de_conexao_mongodb`
`JWTPK=sua_chave_privada_para_geracao_de_tokens`
Feito isso, siga com o comando:

```
npm run dev
```

ou

```
yarn dev
```

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
