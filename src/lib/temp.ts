import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient()

async function main() {
  await prisma.fAQ.createMany({
    data: [
      { question: 'Vad är Next.js?', answer: 'Next.js är ett React-ramverk för SSR och SSG.' },
      { question: 'Vad är TypeScript?', answer: 'TypeScript är ett typat superset av JavaScript.' },
    ],
    skipDuplicates: true
  })
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
