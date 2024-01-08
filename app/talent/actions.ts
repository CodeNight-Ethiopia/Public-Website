"use server";

import { db } from "@/db/drizzle";
import { Category, Talent } from "@/db/schema";
import { eq, sql } from "drizzle-orm";





type Pagination = {
  page: number
  limit: number
}

type TalentType = typeof Talent.$inferSelect
type CategoryType = typeof Category.$inferSelect

async function GetTalentPaginated(category: string, pagination: Pagination) {
  const offsetItems = (Number(pagination.page) - 1) * pagination.limit
  try {
    const totalCount = await db
      .select({ count: sql<number>`count(*)` })
      .from(Talent)
      .leftJoin(Category, eq(Talent.id, Category.talent))
    const pages = Math.ceil(totalCount[0].count / pagination.limit)
    const results = await db
      .select()
      .from(Talent)
      .leftJoin(Category, eq(Talent.id, Category.talent))
      .groupBy(Talent.id).limit(pagination.limit).offset(offsetItems)

    console.log(results)
    return {
      page: pagination.page,
      limit: pagination.limit,
      data: results,
      total: totalCount[0].count,
      pages
    }
  } catch (error) {
    return {
      page: pagination.page,
      limit: pagination.limit,
      data: [],
      total: 0,
      pages: 0
    }
  }
}

export { GetTalentPaginated }