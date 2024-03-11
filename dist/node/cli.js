"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
// 获取版本
const version = require('../../package.json').version;
// 创建一个cli，并取名为 island
const cli = (0, cac_1.cac)('island').version(version).help();
// 定义一个命令
// dev
cli
    .command('[root]', 'start dev server')
    .alias('dev') //别名 dev
    .action((root) => {
    console.log('🚀 ~ .action ~ root:', root);
    console.log('start dev server');
});
// build
cli.command('build [root]', 'build for production').action((root) => {
    console.log('🚀 ~ .action ~ root:', root);
    console.log('build for production');
});
cli.parse();
