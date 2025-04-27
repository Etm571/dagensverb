import { PrismaClient } from './../generated/prisma';
const prisma = new PrismaClient();

async function getRandomVerb() {
    const verbsList = await prisma.verbsList.findMany();
    const allVerbs = verbsList.map(list => list.verbs).flat();
    const oldVerbs = verbsList.map(list => list.oldVerbs).flat();

    var randomVerbTry = allVerbs[Math.floor(Math.random() * allVerbs.length)];

    while (oldVerbs.includes(randomVerbTry)) {
        randomVerbTry = allVerbs[Math.floor(Math.random() * allVerbs.length)];
    }
    const randomVerb = randomVerbTry;


    oldVerbs.push(randomVerb);

    const updatedVerbsList = await prisma.verbsList.update({
        where: { id: verbsList[0].id },
        data: {
            oldVerbs: oldVerbs,
        },
    });

    console.log('Random verb:', randomVerb);
    return randomVerb;
}

export { getRandomVerb };
