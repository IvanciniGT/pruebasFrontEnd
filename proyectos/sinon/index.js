const sinon = require ('sinon')




class ServidorWebDeMentirijilla{

    constructor(){
        this.entorno = sinon.createSandbox();
        this.mistub = this.entorno.stub(global,"fetch")
        this.usuarios=[]
        this.mistub.withArgs("/usuarios").resolves( this.usuarios )
    }

    cargarUsuario(usuario){
        this.usuarios.push(usuario)
        this.mistub.withArgs("/usuarios/"+usuario.id).resolves( usuario )
     }

     borrarUsuario(usuario) {
        this.usuarios=this.usuarios.filter( usuarioGuardado => usuarioGuardado.id !==  usuario.id)
        this.mistub.withArgs("/usuarios/"+usuario.id).resolves( "RUINA !!!" )
     }
     modificarUsuario(usuario) {
        this.usuarios=this.usuarios.filter( usuarioGuardado => usuarioGuardado.id !==  usuario.id)
        this.usuarios.push(usuario)
        this.mistub.withArgs("/usuarios/"+usuario.id).resolves( usuario )
     }
     resetear(){
        this.entorno.restore()
     }
     
}


const miServidorFake = new ServidorWebDeMentirijilla()

// Prueba a ver si el stub funciona o no
fetch("/usuarios").then((datos) => console.log(datos))

setTimeout( ()=>{
    miServidorFake.cargarUsuario(
        {
            "id": 1,
            "nombre": "Ivan",
            "apellidos": "osuna",
            "edad": 44
        }
    )
    fetch("/usuarios").then((datos) => console.log(datos))
    fetch("/usuarios/1").then((datos) => console.log(datos))
}, 2000);
//fetch("/usuarios/1").then((datos) => console.log(datos))



setTimeout( ()=>{
    miServidorFake.cargarUsuario(
        {
            "id": 2,
            "nombre": "MEnchu",
            "apellidos": "GArcia",
            "edad": 33
        }
    )
    fetch("/usuarios").then((datos) => console.log(datos))
    fetch("/usuarios/1").then((datos) => console.log(datos))
    fetch("/usuarios/2").then((datos) => console.log(datos))
}, 4000);


setTimeout( ()=>{
    miServidorFake.borrarUsuario(
        {
            "id": 2,
            "nombre": "MEnchu",
            "apellidos": "GArcia",
            "edad": 33
        }
    )
    fetch("/usuarios").then((datos) => console.log(datos))
    fetch("/usuarios/1").then((datos) => console.log(datos))
    fetch("/usuarios/2").then((datos) => console.log(datos))
}, 6000);

setTimeout( ()=>{
    miServidorFake.modificarUsuario(
        {
            "id": 2,
            "nombre": "MEnchu",
            "apellidos": "GArcia",
            "edad": 55
        }
    )
    fetch("/usuarios").then((datos) => console.log(datos))
    fetch("/usuarios/1").then((datos) => console.log(datos))
    fetch("/usuarios/2").then((datos) => console.log(datos))
}, 8000);

setTimeout( ()=>{
    miServidorFake.resetear()
    fetch("/usuarios/2").then((datos) => console.log(datos))
}, 10000);


/*

function miFuncion(arg1="adios", arg2="Felipe"){
    console.log(arg1, arg2)
}

miFuncion("hola","amigo")
miFuncion("hola")
miFuncion(arg2="Lucas")
*/