import fastifyPlugin from 'fastify-plugin'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'

async function docs(instance) {
  await instance.register(
    swagger,
    {
      openapi: {
        openapi: '3.0.0',
        info: {
          title: 'TOUS',
          description: 'describe server',
          version: '1.0.0',
        },
      },
    },
  )

  await instance.register(
    swaggerUI,
    {
      routePrefix: '/docs',
    },
  )
}

function dbConnection() {
}

export default {
  dbConnection: fastifyPlugin(dbConnection),
  docs: fastifyPlugin(docs),
}
