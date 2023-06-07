const {When, Then, Given} =require("cucumber")
const chai =require("chai")

var datosRespuesta = undefined

Given('un usuario con el id {int}', function (int) {
});

Given('con nombre: {string}', function (string) {
});

Given('con apellidos: {string}', function (string) {
});

Given('con edad: {int}', function (int) {
});

Given('con email: {string}', function (string) {
});

Given('el usuario es accesible usando un servicio backend de mentirijillla', function () {
});

When('se invoca la función {string} del Servicio de Usuarios, con el valor {int} y una función de callback que captura su respuesta', function (string, int) {
});

Then('la respuesta debe ser una lista', function () {
});

Then('en la primera posición se devuelve el valor {int}', function (int) {
});

Then('en la segunda posición tengo un objeto json,', function () {
});



Then('el objeto json tiene por {string}: {string}', function (propiedad, propiedad) {
    chai.expect(datosRespuesta).to.have.property(propiedad)
    chai.expect(datosRespuesta[propiedad]).to.equal(propiedad)
});





Given('un servicio backend de mentirijillla', function () {
});

Given('el servicio no tiene el usuario con id {int}', function (int) {
});

Then('en la segunda posición no tengo nada', function () {
});

Given('que no hay servicio de backend operativo', function () {
});

Then('en la primera posición se devuelve el valor {int}??', function (int) {
});

