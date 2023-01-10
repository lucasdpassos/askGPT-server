
const items = require('../items')
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

function itemRoutes (fastify, options, done) {


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
fastify.get('/items', async (req, reply) => {
  const getItems = {
    items: items
  }
  reply.send(getItems)
})

// create user
fastify.post('/user', async (req, reply) => {
  const createUser = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
    },
  })
  console.log(createUser)
  reply.send({status: "user created"}, {createUser})
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