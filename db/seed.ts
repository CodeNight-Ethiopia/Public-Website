import { faker } from "@faker-js/faker"
import * as dotenv from "dotenv"
import { drizzle } from "drizzle-orm/mysql2"
import { createConnection } from "mysql2"

import { Category, Talent } from "./schema"

const cliProgress = require("cli-progress")

dotenv.config({ path: "./.env.local" })

if (!("DATABASE_URL" in process.env))
  throw new Error("DATABASE_URL not found on .env.local")

const init = async () => {
  const progress_bar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  )
  const client = createConnection({
    uri: process.env.DATABASE_URL,
  })
  const db = drizzle(client)
  return { db,  progress_bar }
}

const TalentSeed = async () => {
  const { db, progress_bar } = await init()
  const data: (typeof Talent.$inferInsert)[] = []
  progress_bar.start(20, 0)
  for (let i = 0; i < 20; i++) {
    progress_bar.increment()
    data.push({
      id: faker.string.uuid(),
      full_name: faker.internet.displayName(),
      email: faker.internet.email(),
      status: "ACTIVELY_SEARCHING",
      skills: [],
      experience: [],
    })
  }
  progress_bar.stop()
  await db.insert(Talent).values(data)
  console.log("Seed done")
  process.exit(0)
}

const CategorySeed = async () => {
  const { db, progress_bar } = await init()
  const data: (typeof Category.$inferInsert)[] = []

  progress_bar.start(20, 0)
  for (let i = 0; i < 20; i++) {
    progress_bar.increment()
    data.push({
      id: faker.string.uuid(),
      name: faker.internet.displayName(),
      talent: "take one of the ids in the talents"
    })
  }
  progress_bar.stop()
  await db.insert(Category).values(data)
  console.log("Seed done")
  process.exit(0)
}

// CategorySeed()
// TalentSeed()
