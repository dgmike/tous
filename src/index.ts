import Fastify from 'fastify'
import plugins from './plugins/index.ts'
import routes from './routes/index.ts'

const app = Fastify({
  logger: true,
})

await app.register(plugins.docs)
await app.register(routes)

await app.ready()
app.swagger()

export default app
