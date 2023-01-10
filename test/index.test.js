const tap = require('tap')
const buildFastify = require('../app')

tap.test('GET `/` route', t => {
  t.plan(4)

  const fastify = buildFastify()
  // Run the server!
  
  // At the end of your tests it is highly recommended to call `.close()`
  // to ensure that all connections to external services get closed.
  t.teardown(() => fastify.close())

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, response) => {
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.same(response.json(), { hello: 'world' })
  })
})

tap.test('GET `/items` route', t => {
    t.plan(4)
  
    const fastify = buildFastify()
    // Run the server!
    
    // At the end of your tests it is highly recommended to call `.close()`
    // to ensure that all connections to external services get closed.
    t.teardown(() => fastify.close())
  
    fastify.inject({
      method: 'GET',
      url: '/items'
    }, (err, response) => {
      t.error(err)
      t.equal(response.statusCode, 200)
      t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
      t.hasProp(response.json(), "items")
      /* t.type(response.json(), Object) */
      /* t.same(response.json(), { items: [{"id":string, "name": string}] }) */
    })
  })