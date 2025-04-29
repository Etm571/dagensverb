import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient()

export async function getRandomVerb() {
    const today = new Date()
    console.log("Today:", today)
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    console.log("Start of day:", startOfDay)

    const alreadyChosen = await prisma.verbToday.findUnique({
        where: { date: startOfDay }
    })

    if (alreadyChosen) return alreadyChosen.name;

    const verb = await prisma.verb.findFirst()

    if (!verb) throw new Error("No verbs found in the database")

    await prisma.oldVerb.create({ data: { name: verb.name } })
    await prisma.verb.delete({ where: { id: verb.id } })

    await prisma.verbToday.create({
        data: {
            name: verb.name,
            date: startOfDay,
        }
    })

    return verb.name
}
