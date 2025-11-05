import app from './src/index.ts'

const PORT = parseInt(process.env.PORT || '3000')

try {
  await app.listen({ port: PORT })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
