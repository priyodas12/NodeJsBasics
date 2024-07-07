import http from 'http';
import stringify from 'flatten';
import CircularJSON from 'circular-json';

const httpServer = http.createServer((req, res) => {
	//console.log('Request Method:', req.method);
	//console.log('Request URL:', req.url);
	console.log('Request Headers:', JSON.parse(CircularJSON.stringify(req))); // Pretty-print headers
	//console.log('Request HTTP Version:', req.httpVersion);
	res.end('hey user! have a nice day!');
});

httpServer.listen(12000, 'localhost', () => {
	console.log('Starting Server....');
});
