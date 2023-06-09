const sinon = require ('sinon')

class ServidorWebDeMentirijilla{
    constructor(){
        this.entorno = sinon.createSandbox();
        this.mistub = this.entorno.stub(global,"fetch")
        this.usuarios=[]
        this.mistub.resolves( this.#generarRespuesta(404) )
        this.mistub.withArgs("/users").resolves( this.#generarRespuesta(200,this.usuarios) )
    }
    cargarUsuario(usuario){
        this.usuarios.push(usuario)
        this.mistub.withArgs("/users/"+usuario.id).resolves(this.#generarRespuesta(200, usuario ))
     }
     borrarUsuario(usuario) {
        this.usuarios=this.usuarios.filter( usuarioGuardado => usuarioGuardado.id !==  usuario.id)
        this.mistub.withArgs("/users/"+usuario.id).resolves( this.#generarRespuesta(404) )
     }
     modificarUsuario(usuario) {
        this.usuarios=this.usuarios.filter( usuarioGuardado => usuarioGuardado.id !==  usuario.id)
        this.usuarios.push(usuario)
        this.mistub.withArgs("/users/"+usuario.id).resolves( this.#generarRespuesta(200, usuario ) )
     }
     resetear(){
        this.entorno.restore()
     }
     #generarRespuesta(codigo, contenido){
        return {
            status: codigo,
            json: ()=>{
                return Promise.resolve(
                    contenido
                )
            }
        }
     }
     
}
module.exports = ServidorWebDeMentirijilla;