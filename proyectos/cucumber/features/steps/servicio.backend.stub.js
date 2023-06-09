

this.entorno.restore()
this.entorno.stub(fetch, "Promise").returns(Promise.resolve(
    {
        status: 200,
        json: ()=>{
            return Promise.resolve(
                this.objetoJson
            )
        }
    }
))

/usuarios/1
/usuarios/2


//ServidorDeMentirijilla

//Given un servicio backend de mentirijillla
this.entorno.stub(fetch, "Promise").withArgs("/usuarios").returns(Promise.resolve( []  ))
// Ese endpoint, en este momento, que listado de objetos concetos debería devolver? 
//And que el objeto json esté cargado en el servicio backend de mentirijillla
{
    "id": 1
    "nombre": "Ivan",
    "apellidos": "osuna",
    "edad": 44
}
this.entorno.stub(fetch, "Promise").withArgs("/usuarios/1").returns(Promise.resolve(
    {
        status: 200,
        json: ()=>{
            return Promise.resolve(
                this.objetoJson
            )
        }
    }
))



//And el servicio no tiene el usuario con id 2


class ServidorWebDeMentirijilla{

    constructor(){
        this.usuarios=[]
        this.entorno.stub(global, "fetch").withArgs("/usuarios").returns(Promise.resolve( this.usuarios ))
    }

    cargaUsuario(usuario){
        this.usuarios.push(usuario)
        this.entorno.stub(fetch, "Promise").withArgs("/usuarios/"+usuario.id).returns(Promise.resolve(
            {
                status: 200,
                json: ()=>{
                    return Promise.resolve(
                        usuario
                    )
                }
            }
        ))
     }
}
