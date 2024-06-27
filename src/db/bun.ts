import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { BunSQLiteAdapter } from "@lucia-auth/adapter-sqlite";


const sqlite = new Database("sqlite.db");
export const db = drizzle(sqlite);