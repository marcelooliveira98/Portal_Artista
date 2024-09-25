/*
  Warnings:

  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DuvidasSugestoesErros" (
    "DuvidaSugestaoErroID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UsuarioID" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "ArquivoAnexo" TEXT NOT NULL,
    "DataEnvio" DATETIME NOT NULL,
    CONSTRAINT "DuvidasSugestoesErros_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DuvidasSugestoesErros" ("ArquivoAnexo", "DataEnvio", "Descricao", "DuvidaSugestaoErroID", "Tipo", "UsuarioID") SELECT "ArquivoAnexo", "DataEnvio", "Descricao", "DuvidaSugestaoErroID", "Tipo", "UsuarioID" FROM "DuvidasSugestoesErros";
DROP TABLE "DuvidasSugestoesErros";
ALTER TABLE "new_DuvidasSugestoesErros" RENAME TO "DuvidasSugestoesErros";
CREATE TABLE "new_FeedbacksProjetos" (
    "FeedbackID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ProjetoID" INTEGER NOT NULL,
    "AutorID" TEXT NOT NULL,
    "Comentario" TEXT,
    "Nota" INTEGER,
    "DataFeedback" DATETIME NOT NULL,
    CONSTRAINT "FeedbacksProjetos_ProjetoID_fkey" FOREIGN KEY ("ProjetoID") REFERENCES "ProjetosColaborativos" ("ProjetoID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FeedbacksProjetos_AutorID_fkey" FOREIGN KEY ("AutorID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FeedbacksProjetos" ("AutorID", "Comentario", "DataFeedback", "FeedbackID", "Nota", "ProjetoID") SELECT "AutorID", "Comentario", "DataFeedback", "FeedbackID", "Nota", "ProjetoID" FROM "FeedbacksProjetos";
DROP TABLE "FeedbacksProjetos";
ALTER TABLE "new_FeedbacksProjetos" RENAME TO "FeedbacksProjetos";
CREATE TABLE "new_InscricoesEditais" (
    "InscricaoEditalID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "EditalID" INTEGER NOT NULL,
    "UsuarioID" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "DataInscricao" DATETIME NOT NULL,
    "Feedback" TEXT,
    CONSTRAINT "InscricoesEditais_EditalID_fkey" FOREIGN KEY ("EditalID") REFERENCES "Editais" ("EditalID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InscricoesEditais_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InscricoesEditais" ("DataInscricao", "EditalID", "Feedback", "InscricaoEditalID", "Status", "UsuarioID") SELECT "DataInscricao", "EditalID", "Feedback", "InscricaoEditalID", "Status", "UsuarioID" FROM "InscricoesEditais";
DROP TABLE "InscricoesEditais";
ALTER TABLE "new_InscricoesEditais" RENAME TO "InscricoesEditais";
CREATE TABLE "new_InscricoesEventos" (
    "InscricaoEventoID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "EventoID" INTEGER NOT NULL,
    "UsuarioID" TEXT NOT NULL,
    "DataInscricao" DATETIME NOT NULL,
    CONSTRAINT "InscricoesEventos_EventoID_fkey" FOREIGN KEY ("EventoID") REFERENCES "Eventos" ("EventoID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InscricoesEventos_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InscricoesEventos" ("DataInscricao", "EventoID", "InscricaoEventoID", "UsuarioID") SELECT "DataInscricao", "EventoID", "InscricaoEventoID", "UsuarioID" FROM "InscricoesEventos";
DROP TABLE "InscricoesEventos";
ALTER TABLE "new_InscricoesEventos" RENAME TO "InscricoesEventos";
CREATE TABLE "new_ParticipacoesProjetos" (
    "ParticipacaoID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ProjetoID" INTEGER NOT NULL,
    "ParticipanteID" TEXT NOT NULL,
    "DataParticipacao" DATETIME NOT NULL,
    CONSTRAINT "ParticipacoesProjetos_ProjetoID_fkey" FOREIGN KEY ("ProjetoID") REFERENCES "ProjetosColaborativos" ("ProjetoID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ParticipacoesProjetos_ParticipanteID_fkey" FOREIGN KEY ("ParticipanteID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ParticipacoesProjetos" ("DataParticipacao", "ParticipacaoID", "ParticipanteID", "ProjetoID") SELECT "DataParticipacao", "ParticipacaoID", "ParticipanteID", "ProjetoID" FROM "ParticipacoesProjetos";
DROP TABLE "ParticipacoesProjetos";
ALTER TABLE "new_ParticipacoesProjetos" RENAME TO "ParticipacoesProjetos";
CREATE TABLE "new_PerfisArtistas" (
    "PerfilArtistaID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UsuarioID" TEXT NOT NULL,
    "AreaAtuacao" TEXT NOT NULL,
    "Biografia" TEXT,
    "LinkPortfolio" TEXT,
    "FotoPerfil" TEXT,
    CONSTRAINT "PerfisArtistas_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PerfisArtistas" ("AreaAtuacao", "Biografia", "FotoPerfil", "LinkPortfolio", "PerfilArtistaID", "UsuarioID") SELECT "AreaAtuacao", "Biografia", "FotoPerfil", "LinkPortfolio", "PerfilArtistaID", "UsuarioID" FROM "PerfisArtistas";
DROP TABLE "PerfisArtistas";
ALTER TABLE "new_PerfisArtistas" RENAME TO "PerfisArtistas";
CREATE TABLE "new_ProjetosColaborativos" (
    "ProjetoID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "AreaAtuacaoNecessaria" TEXT NOT NULL,
    "Localizacao" TEXT,
    "TipoColaboracao" TEXT NOT NULL,
    "CriadorID" TEXT NOT NULL,
    "DataCriacao" DATETIME NOT NULL,
    CONSTRAINT "ProjetosColaborativos_CriadorID_fkey" FOREIGN KEY ("CriadorID") REFERENCES "Usuario" ("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProjetosColaborativos" ("AreaAtuacaoNecessaria", "CriadorID", "DataCriacao", "Descricao", "Localizacao", "ProjetoID", "TipoColaboracao", "Titulo") SELECT "AreaAtuacaoNecessaria", "CriadorID", "DataCriacao", "Descricao", "Localizacao", "ProjetoID", "TipoColaboracao", "Titulo" FROM "ProjetosColaborativos";
DROP TABLE "ProjetosColaborativos";
ALTER TABLE "new_ProjetosColaborativos" RENAME TO "ProjetosColaborativos";
CREATE TABLE "new_Usuario" (
    "UsuarioID" TEXT NOT NULL PRIMARY KEY,
    "Nome" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "Perfil" TEXT NOT NULL DEFAULT 'Público Geral',
    "DataCadastro" DATETIME,
    "Ativo" BOOLEAN NOT NULL
);
INSERT INTO "new_Usuario" ("Ativo", "DataCadastro", "Email", "Nome", "Perfil", "Senha", "UsuarioID") SELECT "Ativo", "DataCadastro", "Email", "Nome", "Perfil", "Senha", "UsuarioID" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
