const {When, Then, Given} =require("@cucumber/cucumber")
const chai =require("chai")
const ServicioUsuarios = require("../../ServicioUsuarios.js")

// Fase 1: Montar un mock del backend

Given('un usuario con el id {int}', function (int) {
});

Given('con {string}: {string}', function (string, string2) {
});

Given('con {string}: {int}', function (string, int) {
});

Given('el usuario es accesible usando un servicio backend de mentirijillla', function () {
});


//// Fase 2: Montar las pruebas atacando al backend de mentirijilla desde nuestro servicio de usuarios

When('se invoca la función {string}, con el valor {int} y una función de callback que captura su respuesta', function (nombreFuntion, identificador) {        
    var funcion;
    switch(nombreFuntion){
        case "getUser":
            funcion = ServicioUsuarios.getUser;
            break;
        case "deleteUser":
            funcion = ServicioUsuarios.deleteUser;
            break;
        default:
            throw new Error("Funcion no implementada");
    }
    funcion(identificador, (error, user) => {
        // Capturamos los datos y los guardamos para su posterior uso
        this.respuesta = [error,user];
    });
});

Then('la respuesta debe contener {int} argumentos', function (numeroArgumentos) {
    chai.expect(this.respuesta).to.have.lengthOf(numeroArgumentos);
});

Then('el argumento {int} debe llegar vacio', function (numeroArgumento) {
    chai.expect(this.respuesta[numeroArgumento]).to.be.null;
});

Then('el argumento {int} debe tener un {string}', function (numeroArgumento, nombreTipoDeDato) {
    var tipoDeDato;
    switch(nombreTipoDeDato){
        case "objeto json":
            tipoDeDato = "object";
            break;
    }

    chai.expect(this.respuesta[numeroArgumento]).to.be.a(tipoDeDato);
});

Then('el argumento {int} tiene por {string}: {string}', function (numeroArgumento, campo, valor) {
    chai.expect(this.respuesta[numeroArgumento][campo]).to.be.equal(valor);
});

Then('el argumento {int} tiene por {string}: {int}', function (numeroArgumento, campo, valor) {
    chai.expect(this.respuesta[numeroArgumento][campo]).to.be.equal(valor);
});









Given('un servicio backend de mentirijillla', function () {
});

Given('el servicio no tiene el usuario con id {int}', function (int) {
});

Then('el argumento {int} no debe llegar vacio', function (int) {
});

Given('que no hay servicio de backend operativo', function () {

});


