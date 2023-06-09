class UserService {

    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    getUsers=(callback) =>{
      fetch(`${this.baseUrl}/users`)
        .then((response) => response.json())
        .then((data) => callback(null, {...data}))
        /*      ^
               data del backend:        ^^ Data del frontend
                {                                   {
                    "id": 1,                            "id": 1,
                    "name": "Leanne Graham",            "nombre": "Leanne Graham",
                    "username": "Bret",                 "apellidos": "Bret",
                    "email": ""                         "email": "",
                    "age": 18,                          "edad": 18,
                }                                     }                                      
        */
        .catch((error) => callback(error, null));
    }
  
    getUser=(userId, callback)=> { // Vamos a probar
      fetch(`${this.baseUrl}/users/${userId}`)
        .then((response) => {
                              if (response.status!==200)throw new Error(response.status)
                              return response.json()
                            })
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    }
  
    createUser=(user, callback) =>{ // Vamos a probarlo
      fetch(`${this.baseUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    }
  
    updateUser=(userId, user, callback) =>{
      fetch(`${this.baseUrl}/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    }
  
    deleteUser=(userId, callback)=> { // delete user
      fetch(`${this.baseUrl}/users/${userId}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
    }
  }
// Exportamos la clase
module.exports = UserService;