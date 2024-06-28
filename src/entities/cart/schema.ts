import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { schemaDefaults } from "../utils/schemaDefaults";
export type CartItem = { variantId: string, quantity: number }
export const cart = sqliteTable("cart", {
    items: text('items', { mode: 'json' }).$type<CartItem[]>(),
    //copy below for all new tables
    id: text("id")
        .primaryKey()
        .$defaultFn(() => `cart_${crypto.randomUUID()}`),
    ...schemaDefaults

});

