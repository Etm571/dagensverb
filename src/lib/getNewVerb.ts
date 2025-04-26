import { promises as fs } from 'fs';
import path from 'path';
   
   
const filePath = path.resolve(process.cwd(), 'src/lib/verbs.json');
const file = await fs.readFile(filePath, 'utf8');
const data = JSON.parse(file);
const verbs = data.verb;
const usedVerbs = data.used


const getRandomVerb = () => {
    const randomIndex = Math.floor(Math.random() * verbs.length);

    const randomVerbTry = verbs[randomIndex];

    for (let i = 0; i < usedVerbs.length; i++) {
        if (usedVerbs[i] === randomVerbTry) {
            return getRandomVerb();
        }
    }
    usedVerbs.push(randomVerbTry);
    const updatedData = {
        verb: verbs,
        used: usedVerbs
    };
    fs.writeFile(filePath, JSON.stringify(updatedData), 'utf8')
        .then(() => {
            console.log('File updated successfully');
        })
        .catch((error) => {
            console.error('Error writing file:', error);
        });
    const randomVerb = randomVerbTry;

    const verbJSON = {
        verb: randomVerb
    }

    return verbJSON;
}

export { getRandomVerb };