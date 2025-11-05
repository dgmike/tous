import { type FastifyInstance } from 'fastify'
import schemas from './schemas/index.ts'

export default function routes(instance: FastifyInstance) {
  instance.get(
    '/',
    schemas.rootSchema,
    async function handler() {
      return {
        code: 200,
        ok: true,
      }
    }
  )
}
