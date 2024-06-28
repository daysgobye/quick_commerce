import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { schemaDefaults } from "../utils/schemaDefaults";

type sessionItem = { variantId: string, quantity: number }
export const session = sqliteTable("session", {
    //copy below for all new tables
    id: text("id")
        .primaryKey()
        .$defaultFn(() => `session_${crypto.randomUUID()}`),
    ...schemaDefaults

});

