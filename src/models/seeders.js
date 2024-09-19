import connect from "./migration.js";

async function up() {
  const banco = await connect()

  // Faz o Criar as informações do usúario

  let sql = `
    CREATE TABLE Usuarios(
      UsuarioID INT AUTO INCREMENT PRIMARY KEY NOT NULL,
      Nome VARCHAR(255) NOT NULL,
      Email VARCHAR(255) NOT NULL,
      Senha VARCHAR(255) NOT NULL,
      Perfil TEXT CHECK(Perfil IN ('Artista', 'Gestor Cultural', 'Público Geral')) NOT NULL,
      DataCadastro DATETIME,
      Ativo BOOLEAN
    )
  `

  await banco.run(sql)

  sql = `
    CREATE TABLE PerfisArtistas(
      PerfilArtistaID INT AUTO INCREMENTE PRIMARY KEY NOT NULL,
      UsuarioID INT NOT NULL,
      AreaAtuacao VARCHAR(255) NOT NULL,
      Biografia TEXT,
      LinkPortfolio VARCHAR(255),
      FotoPerfil VARCHAR(255),
      FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
    )
  `

  await banco.run(sql)

  // Criar a tabela de editais
  sql = `
    CREATE TABLE Editais (
      EditalID INT AUTO INCREMENT PRIMARY KEY NOT NULL,
      Titulo VARCHAR(255) NOT NULL,
      Descricao TEXT NOT NULL,
      CategoriaArtistica VARCHAR(255) NOT NULL,
      PrazoInscricao DATE NOT NULL,
      DetalhesFinanciamento VARCHAR(255),
      CritériosSelecao TEXT NOT NULL,
      ProcessoInscricao TEXT NOT NULL,
      Organizador VARCHAR(255) NOT NULL,
      DataPublicacao DATE NOT NULL
    )
  `

  await banco.run(sql)

  // Criar a tabela de inscrisões em editais
  sql = `
    CREATE TABLE InscricoesEditais (
      InscricaoEditalID INT PRIMARY KEY NOT NULL,
      EditalID INT NOT NULL,
      UsuarioID INT NOT NULL,
      Status TEXT CHECK(Status IN ('Inscrito', 'Avaliado', 'Aprovado', 'Rejeitado')) NOT NULL,
      DataInscricao DATETIME NOT NULL,
      Feedback TEXT,
      CONSTRAINT fk_edital FOREIGN KEY (EditalID) REFERENCES editais(EditalID),
      CONSTRAINT fk_usuario FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
    )
  `

  await banco.run(sql)

  // Criar a tabela de Eventos
  sql = `
    CREATE TABLE Eventos (
      EventoID INT AUTO INCREMENT PRIMARY KEY NOT NULL,
      NomeEvento VARCHAR(255) NOT NULL,
      Descricao TEXT NOT NULL,
      DataHora DATETIME NOT NULL,
      Localizacao VARCHAR(255) NOT NULL,
      Organizador VARCHAR(255) NOT NULL,
      InfoIngresso VARCHAR(255),
      ImagemCartaz VARCHAR(255),
      DataPublicacao DATE NOT NULL
    )
  `

  await banco.run(sql)

  sql = `
    CREATE TABLE InscricoesEventos(
      InscricaoEventoID INT AUTO INCREMENT PRIMARY KEY NOT NULL,
      EventoID INT NOT NULL,
      UsuarioID INT NOT NULL,
      DataInscricao DATETIME NOT NULL,
      CONSTRAINT fk_evento FOREIGN KEY (EventoID) REFERENCES Evento(EventoID),
      CONSTRAINT fk_usuario FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
    )
  `

  await banco.run(sql)

  sql = `
    CREATE TABLE ProjetosColaborativos(
      ProjetoID INT AUTO INCREMENT PRIMARY KEY NOT NULL,
      Titulo VARCHAR(255) NOT NULL,
      Descricao TEXT NOT NULL,
      AreaAtuacaoNecessaria VARCHAR(255) NOT NULL,
      Localizacao VARCHAR(255),
      TipoColaboracao VARCHAR(255) NOT NULL,
      CriadorID INT NOT NULL,
      DataCriacao DATE NOT NULL,
      FOREIGN KEY (CriadorID) REFERENCES Usuarios(CriadorID)
    )
  `

  await banco.run(sql)

  sql = `
    CREATE TABLE ParticipacoesProjetos(
      ParticipacaoID INT AUTO INCREMENT PRIMARY KEY NOT NULL,
      ProjetoID INT NOT NULL,
      ParticipanteID INT NOT NULL,
      DataParticipacao DATE NOT NULL,
      CONSTRAINT fk_projeto FOREIGN KEY (ProjetoID) REFERENCES ProjetosColaborativos(ProjetoID),
      CONSTRAINT fk_usuario FOREIGN KEY (ParticipanteID) REFERENCES Usuarios(UsuarioID)
    )
  `

  await banco.run(sql)

  sql = `
    CREATE TABLE FeedbacksProjetos(
      FeedbackID INT AUTO INCREMENT PRIMARY KEY NOT NULL,
      ProjetoID INT NOT NULL,
      AutorID INT NOT NULL,
      Comentario TEXT,
      Nota INT,
      DataFeedback DATE NOT NULL,
      CONSTRAINT fk_projeto FOREIGN KEY (ProjetoID) REFERENCES ProjetosColaborativos(ProjetoID),
      CONSTRAINT fk_usuario FOREIGN KEY (AutorID) REFERENCES Usuarios(UsuarioID)
    )
  `

  await banco.run(sql)

  sql = `
    CREATE TABLE DuvidasSugestoesErros(
      DuvidaSugestaoErroID INT AUTO INCREMENT PRIMARY KEY NOT NULL,
      UsuarioID INT,
      Tipo TEXT CHECK(Tipo IN ('Dúvida', 'Sugestão', 'Erro')) NOT NULL,
      Descricao TEXT NOT NULL,
      ArquivoAnexo VARCHAR(255) NOT NULL,
      DataEnvio DATETIME NOT NULL,
      FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
    )
  `

  await banco.run(sql)
}

up()