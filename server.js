const fastify = require('fastify')({ logger: true })

fastify.register(require('./routes/items'), {
  prefix: "/api/v1"
})

fastify.after(error => error ? console.log("Items Plugin its not working properly") : console.log("Items plugin loaded successfully"))

// Run the server!
const start = async () => {
    try {
      await fastify.listen({ port: 3000 })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()