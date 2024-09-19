import connect from "./migration.js";

// Função para inserir uma nova conta
export async function inserirConta(cpf, nome, email, area, biografia, link, senha, dia, mes, ano, genero, editais) {
  const banco = await connect();
  const sql = `
    INSERT INTO criar_contas (cpf, nome, email, area, biografia, link, senha, dia, mes, ano, genero, editais)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  await banco.run(sql, [cpf, nome, email, area, biografia, link, senha, dia, mes, ano, genero, editais]);
  console.log("Conta inserida com sucesso!");
}

// Função para inserir login
export async function inserirLogin(email, senha) {
  const banco = await connect();
  const sql = `
    INSERT INTO login (email, senha)
    VALUES (?, ?)
  `;

  await banco.run(sql, [email, senha]);
  console.log("Login inserido com sucesso!");
}

// Função para inserir feedback
export async function inserirFeedback(projeto, artista, comentario) {
  const banco = await connect();
  const sql = `
    INSERT INTO feedback (projeto, artista, comentario)
    VALUES (?, ?, ?)
  `;

  await banco.run(sql, [projeto, artista, comentario]);
  console.log("Feedback inserido com sucesso!");
}
