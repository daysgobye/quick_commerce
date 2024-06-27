import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { schemaDefaults } from "../utils/schemaDefaults";
import { relations } from 'drizzle-orm';
import { variant } from "../variant/schema";

export const product = sqliteTable("product", {
    status: text('status', { enum: ["draft", "published", "unlisted", "archived"] }),
    description: text('description'),
    title: text('title'),
    handle: text('handle'),
    tags: text('tags', { mode: 'json' }).$type<string[]>(),
    images: text('images', { mode: 'json' }).$type<string[]>(),
    //copy below for all new tables
    id: text("id")
        .primaryKey()
        .$defaultFn(() => `product_${crypto.randomUUID()}`),
    ...schemaDefaults

});

export const productRelations = relations(product, ({ many }) => ({
    variant: many(variant),
}));