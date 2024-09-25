-- CreateTable
CREATE TABLE "Usuario" (
    "UsuarioID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "Perfil" TEXT NOT NULL DEFAULT 'Público Geral',
    "DataCadastro" DATETIME,
    "Ativo" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "PerfisArtistas" (
    "PerfilArtistaID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UsuarioID" INTEGER NOT NULL,
    "AreaAtuacao" TEXT NOT NULL,
    "Biografia" TEXT,
    "LinkPortfolio" TEXT,
    "FotoPerfil" TEXT,
    CONSTRAINT "PerfisArtistas_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Editais" (
    "EditalID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "CategoriaArtistica" TEXT NOT NULL,
    "PrazoInscricao" DATETIME NOT NULL,
    "DetalhesFinanciamento" TEXT,
    "CriteriosSelecao" TEXT NOT NULL,
    "ProcessoInscricao" TEXT NOT NULL,
    "Organizador" TEXT NOT NULL,
    "DataPublicacao" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "InscricoesEditais" (
    "InscricaoEditalID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "EditalID" INTEGER NOT NULL,
    "UsuarioID" INTEGER NOT NULL,
    "Status" TEXT NOT NULL,
    "DataInscricao" DATETIME NOT NULL,
    "Feedback" TEXT,
    CONSTRAINT "InscricoesEditais_EditalID_fkey" FOREIGN KEY ("EditalID") REFERENCES "Editais" ("EditalID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InscricoesEditais_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Eventos" (
    "EventoID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "NomeEvento" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "DataHora" DATETIME NOT NULL,
    "Localizacao" TEXT NOT NULL,
    "Organizador" TEXT NOT NULL,
    "InfoIngresso" TEXT,
    "ImagemCartaz" TEXT,
    "DataPublicacao" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "InscricoesEventos" (
    "InscricaoEventoID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "EventoID" INTEGER NOT NULL,
    "UsuarioID" INTEGER NOT NULL,
    "DataInscricao" DATETIME NOT NULL,
    CONSTRAINT "InscricoesEventos_EventoID_fkey" FOREIGN KEY ("EventoID") REFERENCES "Eventos" ("EventoID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InscricoesEventos_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProjetosColaborativos" (
    "ProjetoID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "AreaAtuacaoNecessaria" TEXT NOT NULL,
    "Localizacao" TEXT,
    "TipoColaboracao" TEXT NOT NULL,
    "CriadorID" INTEGER NOT NULL,
    "DataCriacao" DATETIME NOT NULL,
    CONSTRAINT "ProjetosColaborativos_CriadorID_fkey" FOREIGN KEY ("CriadorID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ParticipacoesProjetos" (
    "ParticipacaoID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ProjetoID" INTEGER NOT NULL,
    "ParticipanteID" INTEGER NOT NULL,
    "DataParticipacao" DATETIME NOT NULL,
    CONSTRAINT "ParticipacoesProjetos_ProjetoID_fkey" FOREIGN KEY ("ProjetoID") REFERENCES "ProjetosColaborativos" ("ProjetoID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ParticipacoesProjetos_ParticipanteID_fkey" FOREIGN KEY ("ParticipanteID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FeedbacksProjetos" (
    "FeedbackID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ProjetoID" INTEGER NOT NULL,
    "AutorID" INTEGER NOT NULL,
    "Comentario" TEXT,
    "Nota" INTEGER,
    "DataFeedback" DATETIME NOT NULL,
    CONSTRAINT "FeedbacksProjetos_ProjetoID_fkey" FOREIGN KEY ("ProjetoID") REFERENCES "ProjetosColaborativos" ("ProjetoID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FeedbacksProjetos_AutorID_fkey" FOREIGN KEY ("AutorID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DuvidasSugestoesErros" (
    "DuvidaSugestaoErroID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UsuarioID" INTEGER NOT NULL,
    "Tipo" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "ArquivoAnexo" TEXT NOT NULL,
    "DataEnvio" DATETIME NOT NULL,
    CONSTRAINT "DuvidasSugestoesErros_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);
