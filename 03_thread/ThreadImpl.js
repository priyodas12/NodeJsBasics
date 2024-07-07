import { Worker, isMainThread, threadId, parentPort } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

//import.meta.url provides the URL of the current ES module file.
if (isMainThread) {
	console.trace(`Main thread ID: ${threadId}`);

	const __filename = fileURLToPath(import.meta.url);
	// Create a new worker thread
	const worker = new Worker(__filename);

	worker.on('message', (message) => {
		console.trace(`Message from worker: ${message}`);
	});

	worker.postMessage('Hello, worker!');
} else {
	console.trace(`Worker thread ID: ${threadId}`);

	// Listen for messages from the main thread
	// @ts-ignore
	parentPort.on('message', (message) => {
		console.trace(`Message from main thread: ${message}`);
		// @ts-ignore
		parentPort.postMessage(`Hello, main thread!`);
	});
}
