import { Hono } from 'hono'
import { getCookie } from 'hono/cookie'
import QuickCommerce from '../lib/quick_commerce'
import Admin from '../client/pages/admin/admin'
import AdminProducts from '../client/pages/admin/products'
const app = new Hono<{
    Variables: {
        quickCommerce: QuickCommerce,
    }
}>()

app.get('/products', (c) => {
    const tempQuick = c.get('quickCommerce')
    return c.html(
        <AdminProducts />
    )
})
app.post('/products', async (c) => {
    const body = await c.req.formData()
    console.log(body)
    return c.html(
        <AdminProducts />
    )
})
app.get('/', (c) => {
    const tempQuick = c.get('quickCommerce')
    return c.html(
        <Admin />
    )
})
export default app