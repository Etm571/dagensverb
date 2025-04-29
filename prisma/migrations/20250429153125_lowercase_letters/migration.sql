/*
  Warnings:

  - You are about to drop the `verbsList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "verbsList";

-- CreateTable
CREATE TABLE "verbslist" (
    "id" SERIAL NOT NULL,
    "verbs" JSONB NOT NULL DEFAULT '[]',
    "oldverbs" JSONB NOT NULL DEFAULT '[]',

    CONSTRAINT "verbslist_pkey" PRIMARY KEY ("id")
);
