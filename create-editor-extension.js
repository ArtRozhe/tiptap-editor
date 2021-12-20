/**
 * First argument - extension type (node, func, mark)
 * Second argument - extension name (PascalCase)
 *
 * Examples:
 * node create-editor-extension.js node BulletList
 * node create-editor-extension.js func History
 * node create-editor-extension.js mark Bold
 */

 const path = require('path');
 const fs = require('fs');

 const kebabize = str => {
  return str.split('').map(
    (letter, idx) =>
      letter.toUpperCase() === letter
      ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
      : letter
  ).join('');
};
 
 const TEMPLATES_FOLDER_PATH = path.resolve(
   __dirname,
   'boilerplate-templates',
   'editor-extension-template',
 );
 
 const writeExtensionFile = (fileName, data, filePath) =>
   fs.writeFileSync(path.resolve(filePath, fileName), data, {
     encoding: 'utf-8',
   });
 
 const extensionType = process.argv[2];
 const extensionNamePascalCase = process.argv[3];
 const extensionNameKebabCase = kebabize(extensionNamePascalCase);
 
 const compileTemplate = fileName =>
   fs
     .readFileSync(path.resolve(TEMPLATES_FOLDER_PATH, fileName), 'utf-8')
     .replace(/{{ExtensionNamePascalCase}}/g, extensionNamePascalCase)
     .replace(/{{ExtensionNameKebabCase}}/g, extensionNameKebabCase);
 
 const extensionPath = path.resolve(
   'src',
   'components',
   'organisms',
   'ArticleEditor',
   'extensions',
   `${extensionType}s`,
   extensionNamePascalCase,
 );
 
 const indexScript = compileTemplate('editor-extension-index-script.txt');
 const rootScript = compileTemplate('editor-extension-root-script.txt');
 
 fs.mkdirSync(path.resolve(extensionPath), { recursive: true });
 writeExtensionFile('index.ts', indexScript, extensionPath);
 writeExtensionFile(`${extensionNamePascalCase}.ts`, rootScript, extensionPath);
