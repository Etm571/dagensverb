-- CreateTable
CREATE TABLE "verbsList" (
    "id" SERIAL NOT NULL,
    "verbs" TEXT NOT NULL DEFAULT '[]',
    "oldVerbs" TEXT NOT NULL DEFAULT '[]',

    CONSTRAINT "verbsList_pkey" PRIMARY KEY ("id")
);
