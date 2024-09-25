/*
  Warnings:

  - A unique constraint covering the columns `[UsuarioID]` on the table `PerfisArtistas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PerfisArtistas_UsuarioID_key" ON "PerfisArtistas"("UsuarioID");
