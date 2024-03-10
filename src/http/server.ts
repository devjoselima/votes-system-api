import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

import { createPoll } from './routes/create-poll'

const app = fastify()

const prisma = new PrismaClient()

app.register(createPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running!')
})
