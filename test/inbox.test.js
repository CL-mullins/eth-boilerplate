//Import statements
const assert = require('assert');
const ganache = require('ganache-cli');
//Web3 is a constructor which is why it is capitalized
const Web3 = require('web3');
// instance of web3 below and tells it to connect to ganache test network
// replace ganache with rinkeby..etc as necessary
// providers are very necessary
const web3 = new Web3(ganache.provider());
// import statements from compile.js
const { interface, bytecode } = require('../compile')

// Mocha is a general-purpose test running network that we will be using now
// class Car {
//     park() {
//         return 'stopped';
//     }
//     drive(){
//         return 'vroom';
//     }
// }

// // intialize value
// let car;
// //common intialization codde for individual tests
// beforeEach(() => {
//     //assign value to car
//     car = new Car();
// });

// describe('Car', () => {
//     //test park function
//     it('can park', () => {
//         // assert is checking if the values are equal here
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });

//Async/Await refactoring method
//promise syntax below
let accounts;
let inbox;

beforeEach(async() => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    //promise syntax
        // .then(fetchedAccounts => {
        //     console.log(fetchedAccounts);
        // });

    // Use one of those accounts to deploy
    // the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas:'1000000' });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
    });
});