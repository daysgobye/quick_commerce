import { QuickCommerce } from "./quick_commerce";
import { createMiddleware } from 'hono/factory'


export const quickCommerceMidlewhereGenarator = (QuickCommerce: QuickCommerce) => {
    return createMiddleware(async (c, next) => {
        c.set('quickCommerce', QuickCommerce)
        await next()
    })
}
