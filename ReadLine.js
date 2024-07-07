import readline from 'readline';
import { Worker, isMainThread, threadId, parentPort } from 'worker_threads';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Enter your name: ', (name) => {
	if (isMainThread) {
		console.log('Main Thread: ' + threadId);
	} else {
		console.log('Worker Thread: ' + threadId);
	}
	console.log('Hello, ', name);
	rl.close();
});

rl.on('close', () => {
	console.log('closing interface!');
	process.exit(0);
});
