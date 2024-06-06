"use strict"
console.log("Hello, JavaScript!");

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What is your name boya? ', (name) => {
	console.log(`Hey, ${name}!`);
	rl.close();
});

