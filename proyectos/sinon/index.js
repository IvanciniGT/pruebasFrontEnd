const sinon = require ('sinon')
const fetch = require ('node-fetch')

const entorno = sinon.createSandbox();
const mistub = entorno.stub(fetch,"Promise")
mistub.returns(Promise.resolve("33"))
fetch("https://google.es").then((datos) => console.log(datos))