'use server'

import { db } from "@/db/drizzle"
import { subscribers } from "@/db/schema"



export const addSubscription = async (email: string) => {
    const subs = await db.insert(subscribers).values({
        email:email,
    })
    return subs
}