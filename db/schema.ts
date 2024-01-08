import { relations } from "drizzle-orm"
import {
  json,
  mysqlEnum,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core"

import { table_timestamp } from "@/lib/utils"

export const statusEnum = mysqlEnum("status", [
  "ACTIVELY_SEARCHING",
  "OPEN_FOR_NEGOTIATION",
  "CLOSED",
])
export const Talent = mysqlTable("talent", {
  id: varchar("id", { length: 50 }).primaryKey(),
  full_name: varchar("name", { length: 50 }),
  email: varchar("email", { length: 50 }),
  status: statusEnum,
  skills: json("skills"),
  experience: json("experience"),
  created_at: timestamp("created_at", { mode: "string" }).defaultNow(),
  updated_at: timestamp("updated_at", { mode: "string" }),
  deleted_at: timestamp("deleted_at", { mode: "string" }),
})

export const Category = mysqlTable("category", {
  id: varchar("id", { length: 50 }).primaryKey(),
  name: varchar("name", { length: 50 }),
  talent: varchar("talent", { length: 50 })
    .notNull()
    .references(() => Talent.id),
  created_at: timestamp("created_at", { mode: "string" }).defaultNow(),
  updated_at: timestamp("updated_at", { mode: "string" }),
  deleted_at: timestamp("deleted_at", { mode: "string" }),
})

export const TalentRelations = relations(Talent, ({ many }) => ({
  categories: many(Category),
}))

export const CategoryRelations = relations(Category, ({ one }) => ({
  talent: one(Talent, {
    fields: [Category.talent],
    references: [Talent.id],
  }),
}))
