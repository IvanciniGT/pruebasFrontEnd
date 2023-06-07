
const usuarios = {
    1: {
        "nombre": "Ivan",
        "apellidos": "Osuna", 
        "edad": 44,
        "email": "ivan@gmail.com"
    }
}


function getUsuario(id, callback){
    callback(200, usuarios[id])
}

function deleteUsuario(id, callback){
    
}
function createUsuario(datos, callback){
    
}


function updateUsuario(id, datos, callback){
    
}