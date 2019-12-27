const { mkdirSync, readdirSync, promises: { readFile, writeFile } } = require('fs');
const { resolve } = require('path');

const { transpileModule } = require('typescript');

const config = require('./tsconfig.json');

const srcFolder = resolve(__dirname, 'src');
const buildFolder = resolve(__dirname, 'build');

mkdirSync(buildFolder, { recursive: true });

Promise.all(readdirSync(srcFolder).map(async fileName => {
	const source = await readFile(resolve(srcFolder, fileName), { encoding: 'utf8' });

	await writeFile(resolve('build', fileName.replace('.ts', '.js')), transpileModule(source, config).outputText);
}));
