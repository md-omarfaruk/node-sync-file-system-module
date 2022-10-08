const fs = require('node:fs');

let readFileSync = fs.readFileSync('./input.txt', 'utf-8');

console.log(readFileSync);

    readFileSync = 'Written from input.txt' + ' ' + readFileSync;

const writeFileSync = fs.writeFileSync('./written.txt', readFileSync);