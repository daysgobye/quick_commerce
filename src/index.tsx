import { githubAuth } from '@hono/oauth-providers/github'
import { Hono } from 'hono'

const app = new Hono()


app.use(
  '/github',
  githubAuth({
    client_id: Bun.env.GITHUB_ID,
    client_secret: Bun.env.GITHUB_SECRET,
    scope: ['public_repo', 'read:user', 'user', 'user:email', 'user:follow'],
    oauthApp: true,
  })
)

app.get('/github2', (c) => {
  const token = c.get('token')
  const refreshToken = c.get('refresh-token')
  const user = c.get('user-github')
  console.log({
    token,
    refreshToken,
    user,
  })
  return c.json({
    token,
    refreshToken,
    user,
  })
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
