import chalk from 'chalk';
import progressBar from 'progress';

const bar = new progressBar('downloading: [:bar]:rate/bps :percent :etas', {
	total: 100,
	width: 100,
});

const timer = setInterval(() => {
	bar.tick(1, { token: 'test' });
	if (bar.complete) {
		console.log(chalk.green('Test'));
		clearInterval(timer);
	}
});
