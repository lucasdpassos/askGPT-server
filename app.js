'use strict'
const fastify = require('fastify')
const cors = require('@fastify/cors')

function build(opts={}) {
  const app = fastify(opts)

  app.register(require('./routes/gpt'))
  app.register(cors), {
    origin: '*'
  }
  app.get('/', async function (request, reply) {
    return { hello: 'world' }
  })

  return app
}

module.exports = build