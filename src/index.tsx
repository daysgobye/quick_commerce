import { Hono } from 'hono'
import admin from './routes/admin'
import { logger } from 'hono/logger'
import { basicAuth } from 'hono/basic-auth'
import { quickCommerceMidlewhereGenarator } from './lib/middleware'
import QuickCommerce from './lib/quick_commerce'

import { Page } from './client/app'
import { css } from 'hono/css'
import Home from './client/pages/home'


const app = new Hono<{
  Variables: {
    quickCommerce: QuickCommerce,
  }
}>()
const quick = new QuickCommerce({ storeName: "Testing Store" })
const quickMiddlewhere = quickCommerceMidlewhereGenarator(quick)
app.use(quickMiddlewhere)
app.use(
  '/admin/*',
  basicAuth({
    username: 'quick',
    password: 'pw',
  })
)
app.use(logger())

app.route('/admin', admin)
app.get('/', (c) => {
  const tempQuick = c.get('quickCommerce')
  return c.html(
    <Home />
  )
})


export default app
