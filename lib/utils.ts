import { clsx, type ClassValue } from "clsx"
import { timestamp } from "drizzle-orm/mysql-core"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function table_timestamp() {
  return {
    created_at: timestamp("created_at", { mode: "string" }).defaultNow(),
    updated_at: timestamp("updated_at", { mode: "string" }),
    deleted_at: timestamp("deleted_at", { mode: "string" }),
  }
}
