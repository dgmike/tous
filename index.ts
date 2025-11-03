import util from 'node:util'
import app from './src/index.ts'

const PORT = parseInt(process.env.PORT)

const log = util.debuglog('tous:main')
log('Hello world')

try {
  await app.listen({ port: PORT })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
