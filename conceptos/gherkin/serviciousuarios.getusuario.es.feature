#language: es
Característica: Función getUsuario del Servicio de Usuarios

    Esquema del escenario: Probar que soy capaz de recuperar los datos de un usuario que existe desde su id
        Dado un usuario con el id <id>
             Y con nombre: "<nombre>"
             Y con apellidos: "<apellidos>"
             Y con edad: <edad>
             Y con email: "<email>"
             Y el usuario es accesible usando un servicio backend de mentirijillla
         Cuando se invoca la función "getUsuario" del Servicio de Usuarios, con el valor <id> y una función de callback que captura su respuesta
         Entonces la respuesta debe ser una lista
             Y en la primera posición se devuelve el valor 200
             Y en la segunda posición tengo un objeto json,
             Y el objeto json tiene por nombre "<nombre>"
             Y el objeto json tiene por apellidos: "<apellidos>"
             Y el objeto json tiene por edad: <edad>
             Y el objeto json tiene por email: "<email>"
          
          Ejemplos:
               | id | nombre | apellidos | edad | email          |
               |  1 | Ivan   | Osuna     | 44   | ivan@gmail.com |

    Escenario: Probar que no soy capaz de recuperar los datos de un usuario que no existe
        Dado un servicio backend de mentirijillla
             Y el servicio no tiene el usuario con id 2
         Cuando se invoca la función "getUsuario" del Servicio de Usuarios, con el valor 2 y una función de callback que captura su respuesta
         Entonces la respuesta debe ser una lista
             Y en la primera posición se devuelve el valor 404
             Y en la segunda posición no tengo nada

    Ejemplo: Probar que no soy capaz de recuperar los datos de un usuario si el servicio de backend está caido
        Dado que no hay servicio de backend operativo
         Cuando se invoca la función "getUsuario" del Servicio de Usuarios, con el valor 2 y una función de callback que captura su respuesta
         Entonces la respuesta debe ser una lista
             Y en la primera posición se devuelve el valor 5??
             Y en la segunda posición no tengo nada
