'use strict'

const fastify = require('fastify')

function build(opts={}) {
  const app = fastify(opts)

  app.register(require('./routes/items'))
  app.get('/', async function (request, reply) {
    return { hello: 'world' }
  })

  return app
}

module.exports = build