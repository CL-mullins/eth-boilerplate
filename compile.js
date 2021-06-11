// Importing modules
const path = require('path');
const fs = require('fs');
const solc = require('solc');


const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol')
// read contents of file
const source = fs.readFileSync(inboxPath, 'utf8');

//call compiler
console.log(solc.compile(source, 1));