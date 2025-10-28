import Fastify from 'fastify'
import plugins from './plugins/index.js'

const app = Fastify({
  logger: true,
})

await app.register(plugins.docs)

app.get(
  '/',
  {
    schema: {
      summary: 'hello world',
      description: 'hello world route',
      tags: ['root'],
      response: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  ok: {
                    type: 'boolean',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  async function handler() {
    return {
      code: 200,
      ok: true,
    }
  }
)

await app.ready()
app.swagger()

export default app
