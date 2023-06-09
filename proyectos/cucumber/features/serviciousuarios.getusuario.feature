
Feature: Servicio de Usuarios

      # Servicio backend REST < [Servicio JS] < Prueba
      #     ^
      #    IVAN
     # Scenario Outline:
    Scenario Template: Probar que soy capaz de recuperar los datos de un usuario que existe desde su id
        # Preparar un Servicio de menrtirijilla, con datos, para mi prueba
        # Y así poder hacer una prueba UNITARIA de mi servicio JS
        # Sin que me afecte el Servicio backend.... que lo mismo ni siquiera existe... no lo han creado aún
        # Pero eso no debe limitarme para YO ser capaz de hacer mi prueba UNITARIA
        # Y asegurarme que mi servicio JS funciona correctamente
        Given un servicio backend de mentirijillla
          And un objeto json,
          And con "id": <id>
          And con "nombre": "<nombre>"
          And con "apellidos": "<apellidos>"
          And con "edad": <edad>
          And con "email": "<email>"
          And que el objeto json esté cargado en el servicio backend de mentirijillla
        # Prueba del Servicio JS (ServicioUsuarios)
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
