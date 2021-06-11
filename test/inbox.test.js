//Import statements
const assert = require('assert');
const ganache = require('ganache-cli');
//Web3 is a constructor which is why it is capitalized
const Web3 = require('web3');
// instance of web3 below and tells it to connect to ganache test network
// replace ganache with rinkeby..etc as necessary
// providers are very necessary
const web3 = new Web3(ganache.provider());