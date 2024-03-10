import fastify from 'fastify'

import { createPoll, getPoll } from './routes/'

const app = fastify()

app.register(getPoll)
app.register(createPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running!')
})
