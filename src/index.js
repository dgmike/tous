import Fastify from 'fastify'
import plugins from './plugins/index.js'
import routes from './routes/index.js'

const app = Fastify({
  logger: true,
})

await app.register(plugins.docs)
await app.register(routes)

await app.ready()
app.swagger()

export default app
