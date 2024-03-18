import fs from 'fs/promises';
import { templatePath } from '../constants/index.js';
export const PluginTemplateHtml = () => {
    return {
        name: 'island:index',
        apply: 'serve',
        configureServer(server) {
            return () => {
                console.log('island:index');
                server.middlewares.use(async (req, res, next) => {
                    //   获取模版
                    const content = await fs.readFile(templatePath, 'utf-8');
                    // 返回 模版
                    res.setHeader('Content-Type', 'text/html');
                    res.end(content);
                });
            };
        }
    };
};
