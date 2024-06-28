import { eq } from "drizzle-orm";
import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import { DrizzleD1Database } from "drizzle-orm/d1";
import { SQLiteSelectQueryBuilderBase, SQLiteTable } from "drizzle-orm/sqlite-core";

export class BaseRepository {
    db: BunSQLiteDatabase | DrizzleD1Database
    table: SQLiteTable
    constructor(db: BunSQLiteDatabase | DrizzleD1Database, table: SQLiteTable) {
        this.db = db
        this.table = table
    }
    async all() {
        return await this.db.select().from(this.table);
    }
    async _list(query: any) {
        return await this.db.select().from(this.table).where(query);
    }
    async _create(data: any) {
        return await this.db.insert(this.table).values(data).returning()
    }
    async _update(id: string, data: any) {
        //@ts-ignore
        return await this.db.update(this.table).set(data).where(eq(this.table.id, id));
    }
    async _delete(id: string) {
        //@ts-ignore
        return await this.db.delete(this.table).where(eq(this.table.id, id));
    }
    async _get(id: string) {
        //@ts-ignore
        return await this.db.select().from(this.table).where(eq(this.table.id, id));
    }
    async list(query: any) {
        return await this._list(query)
    }
    async create(data: any) {
        return await this._create(data)
    }
    async update(id: string, data: any) {
        return await this._update(id, data)
    }
    async delete(id: string) {
        return await this._delete(id)
    }
    async get(id: string) {
        return await this._get(id)
    }

}