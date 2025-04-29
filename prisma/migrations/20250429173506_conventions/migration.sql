/*
  Warnings:

  - You are about to drop the `oldverbs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verb` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "oldverbs";

-- DropTable
DROP TABLE "verb";

-- CreateTable
CREATE TABLE "Verb" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Verb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OldVerb" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "OldVerb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Verb_name_key" ON "Verb"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OldVerb_name_key" ON "OldVerb"("name");
