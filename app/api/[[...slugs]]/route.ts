import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
    .get('/user', {user: {name:"Berry"}})
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export const GET = app.fetch
export const POST = app.fetch

export type App = typeof app