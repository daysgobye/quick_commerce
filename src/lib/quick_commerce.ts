import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite"
import { DrizzleD1Database } from "drizzle-orm/d1"
import db from "../db"
import { CartItem } from "../entities/cart/schema"
import ProductRepository from "../entities/product/repository"

export type QuickCommerceArguments = {
    storeName: string,
    onCheckout?: (quick: QuickCommerce, orderId: string) => void
    onProductCreated?: (quick: QuickCommerce, productId: string) => void
    fufillOrder?: (quick: QuickCommerce, orderId: string) => void
    getShippingPrice?: (quick: QuickCommerce, productIds: string[]) => void
}
export default class QuickCommerce {
    db: BunSQLiteDatabase | DrizzleD1Database
    cartId?: string
    storeName: string
    onCheckout?: (quick: QuickCommerce, orderId: string) => void
    onProductCreated?: (quick: QuickCommerce, productId: string) => void
    fufillOrder?: (quick: QuickCommerce, orderId: string) => void
    getShippingPrice?: (quick: QuickCommerce, productIds: string[]) => void
    constructor(args: QuickCommerceArguments) {
        this.db = db
        this.storeName = args.storeName
        this.onCheckout = args.onCheckout
        this.onProductCreated = args.onProductCreated
        this.fufillOrder = args.fufillOrder
        this.getShippingPrice = args.getShippingPrice
    }
    log() {
        console.log("quick_commerce")
    }
    addToCart(cartItem: CartItem) {
        console.log("addToCart", cartItem)
    }
    getRepo(repoName: any) {
        switch (repoName) {
            case "ProductRepository":
                return new ProductRepository(this.db)
            default:
                break;
        }

    }
}