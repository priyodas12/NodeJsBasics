import fs from 'fs';

//read file synchronously
const readFs = fs.readFileSync('./files/input.txt', 'utf-8');

console.log(readFs);
