/*
  Warnings:

  - You are about to drop the `verbslist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "verbslist";

-- CreateTable
CREATE TABLE "verb" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "verb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oldverbs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "oldverbs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "verb_name_key" ON "verb"("name");

-- CreateIndex
CREATE UNIQUE INDEX "oldverbs_name_key" ON "oldverbs"("name");
