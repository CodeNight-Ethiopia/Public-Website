"use server";

import { db } from "@/db/drizzle";
import { Talent } from "@/db/schema";


export const registerDevs = async (firstName: string, lastName: string, email: string, phone: string, gender: "MALE" | "FEMALE", status: "ACTIVELY_SEARCHING" | "OPEN_FOR_NEGOTIATION" | "CLOSED" , skills: any, experience: any ) => {
    const registered = await db.insert(Talent).values({
       email,
       full_name:firstName + lastName,
       phone,
       status,
       experience,
    })
    return registered
    
}