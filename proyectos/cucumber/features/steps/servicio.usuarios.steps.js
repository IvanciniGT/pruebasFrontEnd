const {When, Then, Given} =require("cucumber")
const chai =require("chai")
const {getUsuario} = require("../../ServicioUsuarios.js")

var datosRespuesta = undefined

Given('un usuario con el id {int}', function (int) {
});

Given('con {string}: {string}', function (propiedad, valor) {
});
Given('con {string}: {int}', function (propiedad, valor) {
});

Given('el usuario es accesible usando un servicio backend de mentirijillla', function () {
});

////// DE AQUI PARA ABAJO

When('se invoca la función {string}, con el valor {int} y una función de ' +
        'callback que captura su respuesta', function (funcion, argumento) {
            const callback = (dato1, dato2)=>{
                this.respuesta = [dato1,dato2]
            }
            switch(funcion){
                case "getUsuario":
                    getUsuario(argumento, callback)
                    break
                case "createtUsuario":
                    //getUsuario(argumento, callback)
                    break
            }
        });

Then('la respuesta debe contener {int} argumentos', function (numeroDatosRespuesta) {
    chai.expect(this.respuesta).to.have.lengthOf(numeroDatosRespuesta)
});

Then('el argumento {int} debe tener un {string}', function (argumento, tipoDeDatos) {
    var tipo = "number"
    switch(tipoDeDatos){
        case "numero":
            tipo = "number"
            break
        case "objeto json":
            tipo = "object"
            break
    }
    chai.expect(this.respuesta[argumento-1]).to.be.a(tipo)
});
Then('el argumento {int} debe tener el valor {int}', function (argumento, valor) {
    chai.expect(this.respuesta[argumento-1]).to.equals(valor)
});
Then('el argumento {int} tiene por {string}: {string}', function (argumento, propiedad, valor) {
    chai.expect(this.respuesta[argumento-1]).to.have.property(propiedad)
    chai.expect(this.respuesta[argumento-1][propiedad]).to.equals(valor)
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

