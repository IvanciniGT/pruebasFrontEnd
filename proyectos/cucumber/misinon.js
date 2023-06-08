const sinon = require('sinon');
const fetch = require('node-fetch');

let sandbox = sinon.createSandbox();
/*
sandbox.stub(fetch, 'Promise').callsFake((request) => {
    console.log(request)
    const url = typeof request === 'string' ? request : request.url;
    console.log(url)
    //if (url === '/users') {
    return Promise.resolve({
      status: 200,
      json: () =>
        Promise.resolve([
          { nombre: 'John', apellidos: 'Doe', id: 1, edad: 30 },
          { nombre: 'Jane', apellidos: 'Smith', id: 2, edad: 25 },
        ]),
    });
  //}
});
*/
sandbox.stub(fetch, "Promise").resolvesArg(0);

fetch('/users')
  .then((response) => console.log('Usuarios:', response.) )

sandbox.restore();
