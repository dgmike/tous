import Fastify from 'fastify'
import { validatorCompiler, serializerCompiler } from 'fastify-type-provider-zod'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import plugins from './plugins/index.ts'
import routes from './routes/index.ts'

const app = Fastify({
    logger: true,
  })
  .withTypeProvider<ZodTypeProvider>()
  .setValidatorCompiler(validatorCompiler)
  .setSerializerCompiler(serializerCompiler)

await app.register(plugins.docs)
await app.register(routes)

await app.ready()
app.swagger()

export default app
