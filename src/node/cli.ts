import { cac } from 'cac'
import path from 'path'
import createServer from './dev.js'
import { createRequire } from 'module'

// 解决require不能使用的问题
const require = createRequire(import.meta.url)

// 获取版本
const version = require('../../package.json').version

// 创建一个cli，并取名为 island
const cli = cac('island').version(version).help()

// 定义一个命令

// dev
cli
  .command('[root]', 'start dev server')
  .alias('dev') //别名 dev
  .action(async (root: string) => {
    console.log('start dev server')
    root = root ? path.resolve(root) : process.cwd()
    const server = await createServer(root)
    await server.listen()
    server.printUrls()
  })

// build
cli.command('build [root]', 'build for production').action((root: string) => {
  console.log('🚀 ~ .action ~ root:', root)
  console.log('build for production')
})

cli.parse()
