const progressBar = require('progress');

const bar = new progressBar('downloading: [:bar]:rate/bps :percent :etas', {
	total: 100,
});

const timer = setInterval(() => {
	bar.tick(1, { token: 'test' });
	if (bar.complete) {
		clearInterval(timer);
	}
});
