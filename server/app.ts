import { Hono } from 'hono'
import { api } from './api'

const app = new Hono()

app.get('/test', async (c) => {
  return c.text('Data api')
})

// route grouping
app.route('/api', api)

// catch unknown server routes
app.get('/api/*', (c) => {
  return c.text('UNKNOWN ROUTE!')
})

export default app;
