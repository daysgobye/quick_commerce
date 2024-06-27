import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/entities/**/schema.ts",
    out: "./drizzle",
    dialect: 'sqlite',
    dbCredentials: {
        url: 'sqlite.db', // 👈 this could also be a path to the local sqlite file
    }
});
