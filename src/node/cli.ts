import { cac } from 'cac'

// 获取版本
const version = require('../../package.json').version

// 创建一个cli，并取名为 island
const cli = cac('island').version(version).help()

// 定义一个命令

// dev
cli
  .command('[root]', 'start dev server')
  .alias('dev') //别名 dev
  .action((root: string) => {
    console.log('🚀 ~ .action ~ root:', root)
    console.log('start dev server')
  })

// build
cli.command('build [root]', 'build for production').action((root: string) => {
  console.log('🚀 ~ .action ~ root:', root)
  console.log('build for production')
})

cli.parse()
