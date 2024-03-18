import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
// 项目根目录
export const packagePath = path.join(__dirname, '..', '..', '..');
// 模版 template 目录
export const templatePath = path.join(packagePath, 'template.html');
