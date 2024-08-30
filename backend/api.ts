import { Hono } from 'hono'

export const api = new Hono()

api.get('/', (c) => c.text('Api v2'))

