
Feature: Servicio de Usuarios

     # Scenario Outline:
    Scenario Template: Probar que soy capaz de recuperar los datos de un usuario que existe desde su id
        Given un usuario con el id <id>
          And con "nombre": "<nombre>"
          And con "apellidos": "<apellidos>"
          And con "edad": <edad>
          And con "email": "<email>"
          #And el usuario es accesible usando un servicio backend real
          And el usuario es accesible usando un servicio backend de mentirijillla
         When se invoca la función "getUser", con el valor <id> y una función de callback que captura su respuesta
         Then la respuesta debe contener 2 argumentos
          And el argumento 1 debe llegar vacio
          And el argumento 2 debe tener un "objeto json"
          And el argumento 2 tiene por "nombre": "<nombre>"
          And el argumento 2 tiene por "apellidos": "<apellidos>"
          And el argumento 2 tiene por "edad": <edad>
          And el argumento 2 tiene por "email": "<email>"
          
          Examples:
               | id | nombre | apellidos | edad | email          |
               |  1 | Ivan   | Osuna     | 44   | ivan@gmail.com |

    Scenario: Probar que no soy capaz de recuperar los datos de un usuario que no existe
        Given un servicio backend de mentirijillla
          And el servicio no tiene el usuario con id 2
         When se invoca la función "getUser", con el valor 2 y una función de callback que captura su respuesta
         Then la respuesta debe contener 2 argumentos
          And el argumento 1 no debe llegar vacio
          And el argumento 2 debe llegar vacio

    Scenario: Probar que no soy capaz de recuperar los datos de un usuario si el servicio de backend está caido
        Given que no hay servicio de backend operativo
         When se invoca la función "getUser", con el valor 2 y una función de callback que captura su respuesta
         Then la respuesta debe contener 2 argumentos
          And el argumento 1 no debe llegar vacio
          And el argumento 2 debe llegar vacio
