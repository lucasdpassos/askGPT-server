const Fastify = require('fastify')

function buildFastify () {
  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.register(require('./routes/items'))

  return fastify
}

buildFastify()

module.exports = buildFastify