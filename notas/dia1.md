
# Pruebas de software

Los desarrolladores AMAMOS LAS PRUEBAS !

## Para qué sirven las pruebas?

- Para verificar el cumplimiento de un requisito
- Para identificar la mayor cantidad posible de FALLOS antes de pasar un código a producción.
    Nosotros, como desarrolladores, no arreglamos FALLOS... sino DEFECTOS.
    Una vez identificado un FALLO, será necesario identificar el DEFECTO que lo provoca...
    Ese proceso recibe el nombre de: DEPURACION, DEBUGGING < Desarrollo y es ajeno al testing
    En este sentido, como derivada de lo anterior, las pruebas también sirven para: 
        Ayudar a una rápida identificación de los DEFECTOS
- Para identificar la mayor cantidad posible de DEFECTOS antes de pasar un código a producción.
- Aportan información que posibilite un análisis de causas raices: IDENTIFICAR ERRORES.
  - Medidas preventivas, que eviten nuevos ERRORES > DEFECTOS > FALLOS en el futuro
- Ayudarnos con el desarrollo
  - Desarrollos exploratorios
  - Para mejorar la forma en la que genero código: TDD, BDD
- Ayudarnos a entender mejor el producto que hemos creado
- Ayudarnos en la toma de decisiones y en la gestión del día a día del proyecto.

---

## Metodologías ágiles (SCRUM)

Entregar el producto de forma incremental a mi cliente... para conseguir retroalimentación (feedback) rápido.

Manifiesto ágil:

    Entregamos software FUNCIONAL frecuentemente, entre dos semanas y dos meses, con preferencia al periodo de tiempo más corto posible.
        Software funcional = Software que funciona...
        Quién dice que un software funciona? PRUEBAS !

    El software FUNCIONANDO es la **medida** principal de *progreso*.
        Para medir qué tal va un proyecto vamos a usar el concepto: SOFTWARE FUNCIONANDO
        
        Para medir qué tal va un proyecto vamos a usar el número de pruebas que se han superado en un determinado periodo de tiempo!

    Cómo medir que tal voy en el proyecto?
        ANTES: Con las metodologías tradicionales (en cascada)
        - HITO 1: Fecha + **Paquete de tareas / Requisitos**
                Qué pasaba si el día D a la hora H no había acabado de implementar todos los requisitos:
                    - SUENAN LAS ALARMAS
                    - SE REPARTEN OSTIAS PA TOS LOS LAOS !
                    - El proyecto va en retraso!
                    - Y se replanificaba el hito: D -> D2

        HOY en DIA: Con las metodologías ágiles
        - SPRINT 1: **Fecha** + Paquete de tareas / Requisitos
                Qué pasaba si el día D a la hora H no he acabado de implementar todos los requisitos:
                    - Cambio la fecha?  NI DE COÑA !!!!
                    - Quito requisitos y los paso a la siguiente iteración... Pero ese día SE ENTREGA !

Entrega 1 a los 15 días de comenzar el proyecto. Entrega 100% funcional. En producción.
    + 5% de la funcionalidad
        Pruebas a nivel de producción!  5%
Entrega 2 a los 30 días de comenzar el proyecto. Entrega 100% funcional. En producción.
    + 10% de la funcionalidad
        Pruebas a nivel de producción!  10% + 5%
Entrega 3 a los 45 días de comenzar el proyecto. Entrega 100% funcional. En producción.
    + 5% de la funcionalidad
        Pruebas a nivel de producción!  5% + 10% + 5%
Entrega 4 a los 60 días de comenzar el proyecto. Entrega 100% funcional. En producción.
    + 10% de la funcionalidad
        Pruebas a nivel de producción!  10% + 5% + 10% + 5%

Al usar este tipo de procesos de trabajo... las pruebas se me multiplican !!!!
De donde sale la pasta? los recursos? el tiempo? para tan magna tarea!
NO LA HAY !!!
SOLUCIÓN : AUTOMATIZAR LAS PRUEBAS !
---

## Vocabulario que usamos en el mundo del testing

- Errores       Los errores son cometidos por humanos.
- Defectos      Al cometer un error, los humanos, introducimos un DEFECTO en un producto
- Fallos        Un fallo es la manifestación de un defecto... Si bien NO TODO DEFECTO tiene porque
                manifestarse en forma de fallo

---

# Tipos de pruebas

Cualquier prueba, del tipo que sea, se centra (y debe centrarse) en una UNICA CARACTERISTICA del sistema
Por qué? 
- Si una prueba falla, queremos ser capaces de identificar rápidamente el origen del problema (DEFECTO)
- Si la prueba se centra en MULTIPLES CARACTERISTICAS... y falla... no sabré por dónde comenzar a buscar el DEFECTO!

Las pruebas se clasifican en base a diferentes taxonomías... clasficaciones que se realizan en paralelo entre si.

## En base al nivel de la prueba

- Pruebas unitarias                 Prueba que se centra en una única característica de un componente AISLADO
                                    del sistema.
                                    Si he hecho TODAS las posibles pruebas UNITARIAS de un sistema, 
                                    es necesario hacer más pruebas? SI:

                                        MOTOR   BIELA   RUEDAS  FRENOS

- Pruebas de integración            Prueba que se centra en la COMUNICACION entre componentes.

                                        MOTOR -> BIELA
                                        BIELA -> RUEDA
                                        FRENOS -> RUEDA

- Pruebas de sistema (End2End)      Pruebas que se centran en el COMPORTAMIENTO del sistema en su conjunto.

- Pruebas de aceptación             Son las que me piden... y habitualmente un subconjunto de las anteriores.
    Si hago todas las pruebas de aceptación y van bien... necesito hacer pruebas de sistema, de integración o unitarias para estar tranquilo?
        NO... si me han pedido que supere unas pruebas de aceptación... y las he superado... para mi TODO ESTA OK !
        La trampa aquí está en 2 sitios:
        - Hemos supuesto que las pruebas van bien... y si van mal? Dónde está el problema? Ni idea... investiga
        - Cuando puedo hacer este tipo de pruebas? Cuando tengo el sistema completo...
            Y hasta entonces, no hago pruebas? 


Estoy montando una aplicación:
- Un componente WEB js: <Persona>
    ---> Servicio js
        ---> El componente obtiene la información de Microservicio REST en backend que provee la información

                    Pruebas unitarias
                            v
    componente WEB --> Servicio js -> Microservicio en backend
        ^                fetch               ^
    Pruebas unitarias                     Pruebas unitarias


        //import ServicioPersonas from './servicios/servicio.personas.js'
        Inversión de dependencias. No me importa quien me dé una funcionalidad... ma importa la funcionalidad
            ^^^^
        Inyección de dependencias


                    | Servicio js | < Mock >> Microservicio
    Las herramientas de mock, como Sinon.js

    componente2 Web ->

## En base al procedimiento de ejecución de la prueba

- Estáticas     Son las que NO necesitan poner el sistema en funcionamiento para realizarse
                Las pruebas estáticas permiten identificar: DEFECTOS 
                Revisión del producto... de alguna de sus características
                SonarQube, Lint
                Revisión de requisitos:
                    R1: El sistema debe ofrecer unos tiempos de respuesta aceptables a los usuarios.
                    R1v2: El sistema debe realizar tal operación (o secuencia de operaciones) con un tiempo inferior a 200ms.
                    R1v3: El sistema, instalado o ejecutándose en un entorno con tales características 
                    estando sometido a una determina carga de trabajo (X) debe realizar una determinada secuencia de operaciones con un percentil 95 inferior a 200ms.

- Dinámicas     Son las que necesitan poner el sistema en funcionamiento para realizarse
                Las pruebas estáticas permiten identificar: FALLOS 

### En base al objeto de prueba

- Funcionales       Se centran en la funcionalidad
- No funcionales    Se centran en otros aspectos
  - Rendimiento
  - Carga
  - Estres
  - HA
  - UX
  - ...

### En base al conocimiento que tengo del objeto de prueba

- Caja blanca: Diseño la prueba conociendo cómo funciona y está diseñado el sistema / componente
- Caja negra:  Diseño la prueba conociendo únicamente la entrada y salida del sistema / componente

### Pruebas de regresión

Cualquier prueba que ejecuto de nuevo debido a cambios en el sistema.

Por el hecho de volver a ejecutar las mismas pruebas... una y otra y otra vez... me va a interesar AUTOMATIZARLAS !

----

### SonarQube

Pruebas de calidad de código:
- Cobertura
- Duplicaciones
- Bugs
- Code smells < Mierdas (que huelen a lo lejos) que tienes en el código > DEUDA TECNICA
- Complejidad cognitiva / Complejidad ciclomática
  - Complejidad ciclomática: Es el número de caminos posibles que puede tomar un código al ejecutarse
        Para qué sirve ese número? ES EL MINIMO DE PRUEBAS QUE TENGO QUE REALIZAR

        Tarea1
        SI (condicion1)
            Tarea2
            SI(condicion2)
                Tarea3
            SINO
                Tarea 4
        SI NO
            Tarea5
            SI (condicion3)
                Tarea 6
            SINO, SI (condicion4)
                Tarea 7
            SINO 
                Tarea 8
            
            Complejidad ciclomática 5
            COMPLEJIDAD COGNITIVA: ALTA

        condicion1  condicion2  condicion3   condicion4
         
         Tarea 1 se ejecuta siempre
         Si condicion 1: Tarea 2
            condicion 2: tarea3
            no condicion 2: tarea 4

    - Complejidad cognitiva: Cómo de complejo es para un humano entender un código

        switch(variable1)
            caso 1
                Tarea 1         COMPLEJIDAD CICLOMATICA: 7
            caso 2              COMPLEJIDAD COGNITIVA: BAJA
                Tarea 2
            caso 3
                Tarea 3
            caso 4
                Tarea 4
            caso 5
                Tarea 5
            caso 6
                Tarea 6
            caso pòr defecto
                Tarea 7

--- 

# DEV--->OPS

Cultura, filosofía, movimiento en pro de LA AUTOMATIZACION... de qué? de todo lo que hay entre desarrollo y operaciones.

Desarrollo y Operaciones
Conjunto de herramientas que ayudan a Integración, Entrega, Despliegue Continuo

---

npm es una herramienta de AUTOMATIZACIÓN... Equivalente a:
maven, ant, gradle, sbt, msbuild, dotnet, nuget, poetry

Me permiten automatizar tareas comunes y habituales en los proyectos.

npm: packages.json:
1º Datos identificativos del proyecto
2º Dependencias
3º Scripts de qué? de automatización!
- lint
- montame un servidor de pruebas
- empaqueta
- ejecutame las pruebas!

---

# Qué significa automatizar un trabajo?

Hacer un programa que haga lo que antes hacía yo a manita (humano)!

## Qué significa automatizar pruebas?

Hacer programas que prueben mi programa.

## Para automatizar pruebas echamos mano de frameworks/librerías de automatización de pruebas

- mocha.js          Librería que me permite definir casos de prueba en lenguaje JS
- chai.js           Librería que nos permite crear ASERCIONES

Mocha era el nombre original del lenguaje JAVASCRIPT antes de que lee cambiasesn el nombre.

---

# En qué consiste hacer una prueba dinámica?

PRUEBAS QUE HAGO MEDIANTE INTERFAZ GRAFICA

mocha:  
    Hacer alguna operación sobre un sistema (con unos datos de entrada)    |    Automatizar trabajos
    Y Recopilar los datos de salida                                        |    SELENIUM
    Y validar que esos datos son los esperados < chai.js

cypress.js

webdriver.io

---

sinon.js        Me permite montar y usar MOCKS: Para aislar componentes de mi sistema que quiero someter a pruebas unitarias

---

Gherkin         Lenguaje para definir REQUISITOS, en forma de Ejemplos de uso de un sistema
                que a su vez puedo considerarlos PRUEBAS.
                Me permite tener una UNICA FUENTE DE VERDAD ! 
                Con una gracia adicional, comparado por ejemplo con mocha
                Gherkin es un conjunto de restricciones al uso de un lenguaje natural (inglés, español...)
Cucumber        Es la librería que permite procesar esos ficheros gherkin

A día de hoy, los TESTERS que son los primeros que echan mano en un proyecto, definen los requisitos en Gherkin
Con cucumber, generan el esquelo de unos programas de pruebas, que suministran a los desarrolladores.
La misión de un desarrollador es escribir la MINIMA CANTIDAD DE CODIGO POSIBLE que haga que las pruebas se superen.

Eso es usar una metodología TDD.
Con guerkin habitualmente (cuando lo que definen son los requisitos de alto nivel) lo que aplicamos es una metodología BDD.

---

## Cómo escribir pruebas

- Descripción
- Precondiciones
- Tareas
  - Datos de prueba
- Validaciones/Comprobaciones
-> Ha ido guay
-> Ruina

### Lenguajes con los que escribir pruebas:

- gherkin
- javascript: mocha

---
Fichero Javscript
Este fichero tiene una serie de funciones definidas

ServicioUsuarios.js
    .getUsuario(id)                                                             GET /api/v2/usuarios/{id}
    .updateUsuario(id, datos)           ----> Backend (CRUD) - API REST
    .deleteUsuario(id)                                                          DELETE /api/v2/usuarios/{id}
    .createUsuario(datos)
    .existsUsuario(id)                                                          HEAD /api/v2/usuarios/{id}
    .getUsuarios()                                                              GET /api/v2/usuarios
                                                                                 200   [
                                                                                            {...},
                                                                                            {...},
                                                                                            {...},
                                                                                            {
                                                                                                nombre: "",
                                                                                                apellidos: "",
                                                                                                email: "",
                                                                                                edad: 33,
                                                                                            },
                                                                                        ]

    function transformar(datos){
        return datos // .map( usuario => ({...usuario}) )
    }
    function getUsuarios(callback) {
        fetch("https://miservidor:8080/api/v2/usuarios")
            .then( (datos) =>  callback(transformar(datos)))
    }
    function getUsuarios() {
        return fetch("https://miservidor:8080/api/v2/usuarios")
    }

[
    {...},
    {...},
    {...},
    {
        nombre: "",
        apellidos: "",
        email: "",
        edad: 33,
    },
]

----

ServicioUsuarios.js
    .getUsuario(id)                                                             GET /api/v2/usuarios/{id}
    .updateUsuario(id, datos)           ----> Backend (CRUD) - API REST
    .deleteUsuario(id)                                                          DELETE /api/v2/usuarios/{id}
    .createUsuario(datos)
    .existsUsuario(id)                                                          HEAD /api/v2/usuarios/{id}
    .getUsuarios()                                                              GET /api/v2/usuarios


QUIERO PROBAR ServicioUsuarios.getUsuario(id)... qué hago?
A qué nivel?
- Unitaria. Si ... pero... Necesito aislar la función, porque la función depende de un backend... MOCK !!!
- Integración. Bueno... Que yo recuerde la prueba de integración prueba la comunicación entre componentes
                Si estamos hablando solo de un componente... puedo hacer prueba de integración?? Con quién?
                ServicioUsuarios.getUsuario(id) **->** GET /api/v2/usuarios/{id}
- Sistema.  Sistema? Que tengo una función... Puedo mirar el comportamiento pero de la función...

----
Prueba unitaria del ServicioUsuarios.getUsuario(id)

- Descripción
    Probar que soy capaz de recuperar los datos de un usuario desde su id a través del Servicio de Usuarios
- Datos de prueba
    - Usuario con id 1 y datos:
      - nombre: Ivan
      - apellidos: Osuna
      - edad: 44
      - email: ivan@gmail.com
- Precondiciones
    - Tengo un id de un usuario
    - Tengo un servicio de mentirijilla al que putear
- Tareas
    - Llamar a la función getUsuario del ServicioUsuarios, pasándole el id 1
    - Capturar la respuesta
- Validaciones/Comprobaciones
    - La respuesta debe ser un objeto JS
    - que debe contener:
      - un campo nombre, con valor Ivan
      - un campo apellidos, con valor Osuna
      - un campo edad, con valor 44
      - un campo email, con valor ivan@gmail.com

Prueba? Si... aunque realmente es otra cosa... Lo que he definido es EL COMPORTAMIENTO de la función.
Eso sí, he definido ese comportamiento mediante un EJEMPLO de uso.

O mejor dicho... parte del comportamiento... hay otros comportamientos que no haya definido


-> Ha ido guay
-> Ruina

---

http://miservidormentirijilla:3000/api/v1/users
[
    {.. usuario 1},
    {.. usuario 2},
]

http://miservidormentirijilla:3000/api/v1/users/1
{.. usuario 1}