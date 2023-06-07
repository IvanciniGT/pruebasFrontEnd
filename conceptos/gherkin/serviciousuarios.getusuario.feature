
Feature: Función getUsuario del Servicio de Usuarios

     # Scenario Outline:
    Scenario Template: Probar que soy capaz de recuperar los datos de un usuario que existe desde su id
        Given un usuario con el id <id>
          And con nombre: "<nombre>"
          And con apellidos: "<apellidos>"
          And con edad: <edad>
          And con email: "<email>"
          And el usuario es accesible usando un servicio backend de mentirijillla
         When se invoca la función "getUsuario" del Servicio de Usuarios, con el valor <id> y una función de callback que captura su respuesta
         Then la respuesta debe ser una lista
          And en la primera posición se devuelve el valor 200
          And en la segunda posición tengo un objeto json,
          And el objeto json tiene por nombre "<nombre>"
          And el objeto json tiene por apellidos: "<apellidos>"
          And el objeto json tiene por edad: <edad>
          And el objeto json tiene por email: "<email>"
          
          Examples:
               | id | nombre | apellidos | edad | email          |
               |  1 | Ivan   | Osuna     | 44   | ivan@gmail.com |

    Scenario: Probar que no soy capaz de recuperar los datos de un usuario que no existe
        Given un servicio backend de mentirijillla
          And el servicio no tiene el usuario con id 2
         When se invoca la función "getUsuario" del Servicio de Usuarios, con el valor 2 y una función de callback que captura su respuesta
         Then la respuesta debe ser una lista
          And en la primera posición se devuelve el valor 404
          And en la segunda posición no tengo nada

    Scenario: Probar que no soy capaz de recuperar los datos de un usuario si el servicio de backend está caido
        Given que no hay servicio de backend operativo
         When se invoca la función "getUsuario" del Servicio de Usuarios, con el valor 2 y una función de callback que captura su respuesta
         Then la respuesta debe ser una lista
          And en la primera posición se devuelve el valor 5??
          And en la segunda posición no tengo nada
