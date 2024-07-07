import fs from 'fs';
import readline from 'readline';
import { Worker, isMainThread, threadId, parentPort } from 'worker_threads';

let textData = '';

//read file synchronously
const readSync = fs.readFile('./files/input.txt', 'utf-8', (err, data) => {
	if (!err && isMainThread) {
		console.log('Main Thread: ' + threadId);
	} else {
		console.log('Worker Thread: ' + threadId);
	}
});

console.log(readSync);

const rlTextInput = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rlTextInput.question('Write something to persist::', (data) => {
	if (isMainThread) {
		console.log('Main Thread: ' + threadId);
	} else {
		console.log('Worker Thread: ' + threadId);
	}
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
