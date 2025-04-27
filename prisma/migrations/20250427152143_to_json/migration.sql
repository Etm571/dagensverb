/*
  Warnings:

  - The `verbs` column on the `verbsList` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `oldVerbs` column on the `verbsList` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "verbsList" DROP COLUMN "verbs",
ADD COLUMN     "verbs" JSONB NOT NULL DEFAULT '[]',
DROP COLUMN "oldVerbs",
ADD COLUMN     "oldVerbs" JSONB NOT NULL DEFAULT '[]';
