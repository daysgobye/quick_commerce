import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import { DrizzleD1Database } from "drizzle-orm/d1";
import { BaseRepository } from "../utils/repository";
import { product } from "./schema";


export type CreateProductInput = {
    status: "draft" | "published" | "unlisted" | "archived"
    title: string
    description: string
    handle: string
    tags: string[]
    images: string[]
    metadata: Record<string, any>

}
export type UpdateProductInput = {
    status?: "draft" | "published" | "unlisted" | "archived"
    title?: string
    description?: string
    handle?: string
    tags?: string[]
    images?: string[]
    metadata?: Record<string, any>
}
export default class ProductRepository extends BaseRepository {
    constructor(db: BunSQLiteDatabase | DrizzleD1Database) {
        super(db, product)
    }
    create(product: CreateProductInput) {
        return this._create(product)
    }
    update(id: string, data: UpdateProductInput) {
        return this._update(id, data)
    }

}