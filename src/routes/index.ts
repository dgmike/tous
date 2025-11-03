import schemas from './schemas/index.ts'

export default function routes(instance) {
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
