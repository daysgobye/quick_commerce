import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import { DrizzleD1Database } from "drizzle-orm/d1";
import { BaseRepository } from "../utils/repository";
import { variant } from "./schema";


export type CreateVariantInput = {
    price: number,
    weight: number,
    height: number,
    length: number,
    width: number,
    hsCode: string,
    quantity: number,
    countryOfOrigin: string,
    sizeUnit: "in" | "cm"
    weightUnit: "g" | "oz"
    description: string,
    title: string,
    image: string,
    metadata: Record<string, any>

}
export type UpdateVariantInput = {
    price?: number,
    weight?: number,
    height?: number,
    length?: number,
    width?: number,
    hsCode?: string,
    quantity?: number,
    countryOfOrigin?: string,
    sizeUnit?: "in" | "cm"
    weightUnit?: "g" | "oz"
    description?: string,
    title?: string,
    image?: string,
    metadata?: Record<string, any>
}
export default class VariantRepository extends BaseRepository {
    constructor(db: BunSQLiteDatabase | DrizzleD1Database) {
        super(db, variant)
    }
    create(variant: CreateVariantInput) {
        return this._create(variant)
    }
    update(id: string, data: UpdateVariantInput) {
        return this._update(id, data)
    }

}