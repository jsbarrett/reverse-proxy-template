import Fastify from 'fastify'

const fastify = Fastify({ logger: true })

fastify.get('/', async (request, reply) => {
  return 'app2'
})

try {
  await fastify.listen({ host: '0.0.0.0', port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
