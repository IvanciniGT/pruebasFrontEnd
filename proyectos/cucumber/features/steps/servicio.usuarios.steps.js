const {When, Then, Given, After, Before} =require("@cucumber/cucumber")
const chai =require("chai")
const sinon =require("sinon")
const ServicioUsuarios = require("../../ServicioUsuarios.js")
const ServidorWebDeMentirijilla = require("./servicio.backend.stub.js")

// Se ejecuta despues de cada escenario
After(function(){
    if(this.fakeServerStub){
        this.fakeServerStub.resetear()
        console.log("RESETAEADO")
    }
})
// Fase 1: Montar un mock del backend
Given('que no hay servicio de backend operativo', function () {
    this.servicioUsuarios = new ServicioUsuarios("http://backend.inexistente:3000")
});

Given('un servicio backend de mentirijillla', function () {
    // Crear un servidor de mentirijilla que devuelva respuestas trucadas
    this.servicioUsuarios = new ServicioUsuarios("")
    // Mock... seria montar un servidor de mentira que devuelva respuestas preconfiguradas
    // Stub... sería montar una nueva implementación de la función fetch que devuelva respuestas trucadas
    this.fakeServerStub = new ServidorWebDeMentirijilla()
});

Given('que el objeto json esté cargado en el servicio backend de mentirijillla', function(){
    this.fakeServerStub.cargarUsuario(this.objetoJson)
});

Given('el servicio no tiene el usuario con id {int}', function (int) {

});

//// Fase 2: Montar las pruebas atacando al backend de mentirijilla desde nuestro servicio de usuarios

When('se invoca la función {string}, con el valor {int} y una función de callback que captura su respuesta', function (nombreFuntion, identificador) {        
    var funcion;
    switch(nombreFuntion){
        case "getUser":
            funcion = this.servicioUsuarios.getUser;
            break;
        case "deleteUser":
            // Llamar al servidor de mentira (si lo hay) y pedirle que borre al usuario
            funcion = this.servicioUsuarios.deleteUser;
            break;
        default:
            throw new Error("Funcion no implementada");
    }
    funcion(identificador, (error, user) => {
        // Capturamos los datos y los guardamos para su posterior uso
        this.respuesta = [error,user];
        console.log("Respuesta del servicio de Frontal", this.respuesta)
    });
});

Then('la respuesta debe contener {int} argumentos', function (numeroArgumentos) {
    chai.expect(this.respuesta).to.have.lengthOf(numeroArgumentos);
});

Then('el argumento {int} debe llegar vacio', function (numeroArgumento) {
    chai.expect(this.respuesta[numeroArgumento-1]).to.be.null;
});

Then('el argumento {int} debe tener un {string}', function (numeroArgumento, nombreTipoDeDato) {
    var tipoDeDato;
    switch(nombreTipoDeDato){
        case "objeto json":
            tipoDeDato = "object";
            break;
    }

    chai.expect(this.respuesta[numeroArgumento-1]).to.be.a(tipoDeDato);
});

Then('el argumento {int} tiene por {string}: {string}', function (numeroArgumento, campo, valor) {
    chai.expect(this.respuesta[numeroArgumento-1][campo]).to.be.equal(valor);
});

Then('el argumento {int} tiene por {string}: {int}', function (numeroArgumento, campo, valor) {
    chai.expect(this.respuesta[numeroArgumento-1][campo]).to.be.equal(valor);
});

Then('el argumento {int} no debe llegar vacio', function (numeroArgumento) {
    chai.expect(this.respuesta[numeroArgumento-1]).to.not.be.null;
});



Given('un objeto json,', function () {
    this.objetoJson={}
});

When('creo un objeto json,', function () {
    this.objetoJson={}
});

Given('con {string}: {string}', function (campo, valor) {
    this.objetoJson[campo]=valor;
});

Given('con {string}: {int}', function (campo, valor) {
    this.objetoJson[campo]=valor;
});
When('se invoca la función {string}, con ese objeto json y una función de callback que captura su respuesta', function (nombreFuntion) {
    var funcion;
    switch(nombreFuntion){
        case "createUser":
            // Llamar al servidor de mentira (si lo hay) y pedirle que cree al usuario
            funcion = this.servicioUsuarios.createUser;
            break;
        default:
            throw new Error("Funcion no implementada");
    }
    funcion(this.objetoJson, (error, user) => {
        // Capturamos los datos y los guardamos para su posterior uso
        this.respuesta = [error,user];
    });

});

Then('el argumento {int} tiene por {string} de tipo {string}', function (numeroArgumento, campo, nombreTipoDeDato) {
    var tipoDeDato;
    switch(nombreTipoDeDato){
        case "numerico":
            tipoDeDato = "number";
    }
    chai.expect(this.respuesta[numeroArgumento-1][campo]).to.be.a(tipoDeDato);
});

When('se invoca la función {string}, con el {string} del argumento {int} de la respuesta anterior y una función de callback que captura su respuesta', function (nombreFuntion, campo, numeroArgumento) {
    var funcion;
    switch(nombreFuntion){
        case "getUser":
            funcion = this.servicioUsuarios.getUser.bind(this);
            break;
        default:
            throw new Error("Funcion no implementada");
    }
    funcion(this.respuesta[numeroArgumento-1][campo], (error, user) => {
        this.respuesta = [error,user];
    })
});