import { additionalInfo } from './additionalInfo';

async function getObject() {
	return {
		key: 'value',
	}
}

async function main() {
	const obj = await getObject();

	return {
		...obj,
		additionalInfo,
	};
}

main().then(console.log);
