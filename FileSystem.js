import fs from 'fs';
import readline from 'readline';

let textData = '';

//read file synchronously
const readSync = fs.readFileSync('./files/input.txt', 'utf-8');

console.log(readSync);

const rlTextInput = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rlTextInput.question('Write something to persist::', (data) => {
	textData =
		'Updated on :' +
		new Date() +
		'\n' +
		data +
		'\n' +
		readSync +
		'\n' +
		textData;
	fs.writeFileSync('./files/writeData.txt', textData);
	rlTextInput.close();
});

rlTextInput.on('close', () => {
	console.log('closing interface!');
	process.exit(0);
});
