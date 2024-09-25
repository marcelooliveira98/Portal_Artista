/*
  Warnings:

  - The primary key for the `PerfisArtistas` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PerfisArtistas" (
    "PerfilArtistaID" TEXT NOT NULL PRIMARY KEY,
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
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
