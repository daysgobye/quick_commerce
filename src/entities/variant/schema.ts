import { text, sqliteTable, real, integer } from "drizzle-orm/sqlite-core";
import { schemaDefaults } from "../utils/schemaDefaults";
import { relations } from 'drizzle-orm';
import { product } from "../product/schema";

export const variant = sqliteTable("variant", {
    price: real('price'),
    weight: real('weight'),
    height: real('height'),
    length: real('length'),
    width: real('width'),
    hsCode: text('hs_code'),
    quantity: integer('quantity', { mode: "number" }),
    countryOfOrigin: text('country_of_origin'),
    sizeUnit: text('size_unit', { enum: ["in", "cm"] }),
    weightUnit: text('weight_unit', { enum: ["g", "oz"] }),
    description: text('description'),
    title: text('title'),
    image: text('image'),
    productId: text("product_id")
        .notNull()
        .references(() => product.id, { onDelete: "cascade" }),
    //copy below for all new tables
    id: text("id")
        .primaryKey()
        .$defaultFn(() => `variant_${crypto.randomUUID()}`),
    ...schemaDefaults
});

export const variantRelations = relations(variant, ({ one }) => ({
    author: one(product, {
        fields: [variant.productId],
        references: [product.id],
    }),
}));