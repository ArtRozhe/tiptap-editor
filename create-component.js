/**
 * First argument - component type (atom, molecule, organism, template, page)
 * Second argument - component name (PascalCase)
 *
 * Examples:
 * node create-component.js atom SomeAtom
 * node create-component.js molecule SomeMolecule
 * node create-component.js organism SomeOrganism
 */

const path = require('path');
const fs = require('fs');

const TEMPLATES_FOLDER_PATH = path.resolve(
  __dirname,
  'boilerplate-templates',
  'react-component-template',
);

const writeComponentFile = (fileName, data, filePath) =>
  fs.writeFileSync(path.resolve(filePath, fileName), data, {
    encoding: 'utf-8',
  });

const componentType = process.argv[2];
const componentNamePascalCase = process.argv[3];
const storyType = `${componentType.replace(
  componentType.charAt(0),
  componentType.charAt(0).toUpperCase(),
)}s`;
const rootClassName = `${componentType}${componentNamePascalCase}`;

const compileTemplate = fileName =>
  fs
    .readFileSync(path.resolve(TEMPLATES_FOLDER_PATH, fileName), 'utf-8')
    .replace(/{{ComponentNamePascalCase}}/g, componentNamePascalCase)
    .replace(/{{rootClassName}}/g, rootClassName)
    .replace(/{{storyType}}/g, storyType);

const componentPath = path.resolve(
  'src',
  'components',
  `${componentType}s`,
  componentNamePascalCase,
);

const indexScript = compileTemplate('component-index-script.txt');
const rootScript = compileTemplate('component-root-script.txt');
const baseStyle = compileTemplate('component-style-file.txt');
const stories = compileTemplate('component-stories-script.txt');

fs.mkdirSync(path.resolve(componentPath), { recursive: true });
writeComponentFile('index.ts', indexScript, componentPath);
writeComponentFile(`${componentNamePascalCase}.tsx`, rootScript, componentPath);
writeComponentFile(
  `${componentNamePascalCase}.styles.ts`,
  baseStyle,
  componentPath,
);
writeComponentFile(
  `${componentNamePascalCase}.stories.tsx`,
  stories,
  componentPath,
);
