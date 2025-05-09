const { PrismaClient } = require('../src/generated/prisma')

const prisma = new PrismaClient()

const verbList = [
  "fånga","agera","akta","analysera","anmäla","anpassa","anteckna","arbeta","argumentera","arrangera",
  "avsluta","avvakta","baka","bada","bedöma","be","bearbeta","befinna","begränsa","behandla","börja","beskriva",
  "besluta","beställa","besöka","betala","betrakta","bevara","bilda","bjuda","bli","blanda","blåsa","bo","boka",
  "borsta","bre","brinna","brista","bryta","bygga","bära","böja","dammsuga","dansa","dela","diskutera","dra",
  "dricka","driva","droppa","drunkna","dyka","dölja","dö","döma","efterlikna","erhålla","ersätta","etablera",
  "explodera","falla","fatta","fira","fiska","finnas","flina","flyga","flyta","följa","fundera","fuska","fylla",
  "få","förbjuda","förbättra","fördela","föredra","förena","förflytta","förfölja","förhindra","förklara","förlora",
  "förlåta","förnya","försvara","förstå","förstöra","försvinna","försämra","försörja","fortsätta","fråga","frysa",
  "acceptera","föda","föreslå","föreställa","förvänta","förändra","gapa","garva","ge","genomföra","gilla","glädja",
  "glömma","gnälla","granska","gripa","gråta","grilla","gå","gömma","gunga","gurgla","gäspa","göra","haja",
  "handla","hantera","hata","hejda","hoppa","hoppas","hosta","hugga","hylla","hämta","hänga","hälsa","höra",
  "höja","identifiera","ignorera","imponera","importera","inbjuda","indikera","informera","inleda","innehålla",
  "inreda","inrikta","inspirera","instruera","intressera","introducera","investera","isolera","jobba","jämföra",
  "justera","jogga","jaga","jata","jodla","jollra","jubla","judera","jämra","kalla","kamma","kasta","klaga",
  "klappa","klättra","knyta","koka","komma","koncentrera","kontrollera","korrigera","kosta","krama","kräva",
  "krocka","krossa","kröna","krypa","kryssa","känna","köpa","köra","laga","landa","leka","lena","leva","lida",
  "ligga","lita","lossa","lyckas","lyda","lyfta","lämna","lära","läsa","låna","låtsas","låta","löpa","lösa",
  "lyssna","mäta","må","måla","mala","minnas","missa","mota","motivera","möta","möblera","möjliggöra","rapa"
]

async function main() {
  await prisma.verb.createMany({
    data: verbList.map((name) => ({ name })),
    skipDuplicates: true,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
