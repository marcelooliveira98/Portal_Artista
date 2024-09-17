import { inserirConta, inserirLogin, inserirFeedback } from './insercao.js';

async function executarInserts() {
  // Substitua os valores abaixo pelos dados reais que você quer inserir

  // Inserir uma nova conta
  await inserirConta(
    'cpf_aqui', 'nome_aqui', 'email_aqui', 'area_aqui',
    'biografia_aqui', 'link_aqui', 'senha_aqui',
    'dia_aqui', 'mes_aqui', 'ano_aqui', 'genero_aqui', 'editais_aqui'
  );

  // Inserir um login
  await inserirLogin('email_aqui', 'senha_aqui');

  // Inserir um feedback
  await inserirFeedback('projeto_aqui', 'artista_aqui', 'comentario_aqui');
}

// Executar as inserções
executarInserts();
