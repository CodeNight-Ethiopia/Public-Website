import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = mysql.createPool(process.env.DATABASE_URL  as string);
export const db = drizzle(connection);