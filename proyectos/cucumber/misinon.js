const sinon = require('sinon');
const fetch = require('node-fetch');
let sandbox = sinon.createSandbox();
sandbox.stub(fetch, 'Promise').withArgs("/hola").returns(Promise.resolve("hola"))
console.log(fetch("/hola"))