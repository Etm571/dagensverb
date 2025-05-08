/*
  Warnings:

  - You are about to drop the column `priority` on the `OldVerb` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OldVerb" DROP COLUMN "priority";

-- AlterTable
ALTER TABLE "Verb" ADD COLUMN     "priority" BOOLEAN NOT NULL DEFAULT false;
