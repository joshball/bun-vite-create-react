import { Hono } from 'hono'

export const api = new Hono()

api.get('/', (c) => c.text('Api v2'))
api.get('/posts', (c) => c.json([
  { id: 1, title: 'Post 1', createdAt: new Date().toISOString() },
  { id: 2, title: 'Post 2', createdAt: new Date().toISOString() }
]))

