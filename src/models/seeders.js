import connect from "./migration.js";

async function up() {
  const banco = await connect()

  // Criar o cadastro das contas
  let sql = `
    CREATE TABLE criar_contas (
      cpf VARCHA(255) PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      area VARCHAR(255) NOT NULL,
      biografia VARCHAR(255) NOT NULL,
      link VARCHAR(255) NOT NULL,
      senha VARCHAR(255)NOT NULL,
      dia VARCHAR(255) NOT NULL,
      mes VARCHAR(255) NOT NULL,
      ano VARCHAR(255) NOT NULL,
      genero VARCHAR(255) NOT NULL,
      editais VARCHAR(255) NOT NULL
    )
  `

  await banco.run(sql);

  // Faz o login do usúario

  sql = `
    CREATE TABLE login (
      email VARCHAR(255) PRIMARY KEY,
      senha VARCHAR(255) NOT NULL
    )
  `

  await banco.run(sql)

  // Criar o registro do feedback
  sql = `
    CREATE TABLE feedback (
      id INTEGER AUTO INTEGER PRIMARY KEY,
      projeto VARCHAR(255) NOT NULL,
      artista VARCHAR(255) NOT NULL,
      comentario VARCHAR(255) NOT NULL
    )
  `

  await banco.run(sql)
}

up()