import { PluginTemplateHtml } from './plugins-island/template-index.js';
import { createServer as createViteDevServer } from 'vite';
export default function createServer(root = process.cwd()) {
    return createViteDevServer({
        root,
        plugins: [PluginTemplateHtml()]
    });
}
