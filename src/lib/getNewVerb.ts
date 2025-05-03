import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export async function getRandomVerb() {
  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const alreadyChosen = await prisma.verbToday.findUnique({
    where: { date: startOfDay },
  });

  if (alreadyChosen) return alreadyChosen.name;


  const verbCount = await prisma.verbRequest.count();
  console.log("verbCount", verbCount);

  const verb =
    verbCount > 0
      ? await prisma.verbRequest.findFirst()
      : await prisma.verb.findFirst();

  if (!verb) throw new Error("No verbs found in the database");

  await handleVerbSelection(
    verb.name,
    verb.id,
    verbCount > 0 ? "verbRequest" : "verb",
    startOfDay
  );
}

async function handleVerbSelection(
  name: string,
  id: number,
  source: "verbRequest" | "verb",
  date: Date
) {
  await prisma.oldVerb.create({ data: { name } });

  if (source === "verbRequest") {
    await prisma.verbRequest.delete({ where: { id } });
  } else {
    await prisma.verb.delete({ where: { id } });
  }

  await prisma.verbToday.create({
    data: { name, date },
  });

}
