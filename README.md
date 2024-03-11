# vite-press
vite press demo

#### 脚手架 cli 开发 

项目初始化
```bash
pnpm init
```

依赖安装: 命令行库: cac
```bash
# 开发阶段的依赖
pnpm i typescript @types/node -D
pnpm i cac -S

```

初始化tsconfig
```json
// tsconfig.json
{
  "compilerOptions": {
    "outDir": "dist",
    "target": "ESNext" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "module": "commonjs" /* Specify what module code is generated. */,
    "rootDir": "src" /* Specify the root folder within your source files. */,
  }
}
```

创建项目目录 src 

创建脚手架开发环境：src/node/cli.ts

配置配置文件 package.json , 新增 start 命令编译 ts，编译完成的ts 会存放到 dist/node/cli.js

之后再根目录创建 bin 文件夹，用它存放 需要通过软链 npm link 链接的配置

注意：文件开头必须要配置 #!/usr/bin/env node，否则会出现语法错误



