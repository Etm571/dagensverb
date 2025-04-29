import { PrismaClient } from './../generated/prisma';
const prisma = new PrismaClient();

async function getRandomVerb() {
    const verbsList = await prisma.verbslist.findMany();
    const allVerbs = verbsList.map(list => list.verbs).flat();
    const oldVerbs = verbsList.map(list => list.oldverbs).flat();

    var randomVerbTry = allVerbs[Math.floor(Math.random() * allVerbs.length)];

    while (oldVerbs.includes(randomVerbTry)) {
        randomVerbTry = allVerbs[Math.floor(Math.random() * allVerbs.length)];
    }
    const randomVerb = randomVerbTry;


    oldVerbs.push(randomVerb);

    await prisma.verbslist.update({
        where: { id: verbsList[0].id },
        data: {
            oldverbs: oldVerbs,
        },
    });

    console.log('Random verb:', randomVerb);
    return randomVerb;
}

export { getRandomVerb };
