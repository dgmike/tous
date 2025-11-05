import { z } from 'zod'

const ROOT_RESPONSE = z.object({ ok: z.boolean() })

z.globalRegistry.add(ROOT_RESPONSE, { id: 'RootResponse' })

export default {
  schema: {
    summary: 'hello world',
    description: 'hello world route',
    tags: ['root'],
    response: {
      200: ROOT_RESPONSE,
    }
  }
}
