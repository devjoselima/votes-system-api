import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { createPoll, getPoll, voteOnPoll } from './routes/'

const app = fastify()

app.register(cookie, {
  secret: 'polls-secret-app',
  hook: 'onRequest',
  parseOptions: {},
})

app.register(getPoll)
app.register(createPoll)
app.register(voteOnPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running!')
})
