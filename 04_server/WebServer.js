import http from 'http';
import CircularJSON from 'circular-json';
import fs from 'fs';
import path from 'path';

const homepage = fs.readFileSync('./template/index.html', 'utf-8');

// Circular References in req Object: Common circular references in req can be found in properties like req.socket or in parsed request bodies,
// especially if they refer back to parts of the req object itself.

// const httpServer = http.createServer((req, res) => {
// 	//console.log('Request Method:', req.method);
// 	//console.log('Request URL:', req.url);
// 	res.end(homepage);

// 	console.log('Request Headers:', JSON.parse(CircularJSON.stringify(req))); // Pretty-print headers
// 	//console.log('Request HTTP Version:', req.httpVersion);
// });

const server = http.createServer((req, res) => {
	let filePath = '.' + req.url;
	if (filePath === './') {
		filePath = './index.html';
	}

	const extname = path.extname(filePath);
	let contentType = 'text/html';

	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
		case '.wav':
			contentType = 'audio/wav';
			break;
	}

	fs.readFile(filePath, (err, content) => {
		res.writeHead(200, { 'Content-Type': contentType });
		res.end(homepage, 'utf-8');
	});
});

server.listen(12000, 'localhost', () => {
	console.log('Starting Server....');
});
