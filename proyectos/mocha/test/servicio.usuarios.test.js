console.log("Pruebas con mocha")
import getUsuario from "../ServicioUsuarios.js"
import chai from chai

describe("Función getUsuario del Servicio de Usuarios", ()=> {

    it("Debería devolver los datos de un usuario que existe desde su id. Chai Should", () => {
        getUsuario(1, (codigo, datos)=> {
            chai.should()
            codigo.should.be.a("number")
            codigo.should.equal(200)
            datos.should.have.property("nombre")
            datos.should.have.property("apellidos")
            datos.should.have.property("edad")
            datos.should.have.property("email")
        })
    })

    it("Debería devolver los datos de un usuario que existe desde su id. Chai Expect", () => {
        getUsuario(1, (codigo, datos)=> {
            chai.expect(codigo).to.be.a("number")
            chai.expect(codigo).to.equal(200)
            chai.expect(datos).to.have.property("nombre")
        })
    })

    it("Debería devolver los datos de un usuario que existe desde su id. Chai.Assert", () => {
        getUsuario(1, (codigo, datos)=> {
            chai.assert.typeOf(codigo,"number")
            chai.assert.equal(codigo,200)
            chai.assert.property(datos,"nombre")
        })
    })

    it("Debería no ser capaz de recuperar los datos de un usuario que no existe", () => {

    })
    it("Debería no ser capaz de recuperar los datos de un usuario si el servicio de backend está caido", function(){

    })
})