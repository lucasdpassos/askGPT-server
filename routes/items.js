
const items = require('../items')

function itemRoutes (fastify, options, done) {

// hello world
fastify.get('/', async (req, reply) => {
  return { hello: 'world' }
})

// options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type:'string' },
                        name: {type: 'string'}
                    }
                }
            }
        }
    }
}

// get all items
fastify.get('/items', getItemsOpts, async (req, reply) => {
  reply.send(items)
})

//get single item
fastify.get('/items/:id', async (req, reply) => {
 const { id } = req.params

 const item = items.find(item => item.id == id)
  reply.send({item})
})
fastify.post('/', async (req, reply) => {
  return request.body
})

    done()
}

module.exports = itemRoutes