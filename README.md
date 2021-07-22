# workspace-postman

Funcionalidades :

* Testing API manual
* Mock servers
* Colaborar con una librería de equipoo
* Scripting
    * Creando workflows
    * Escribir tests
* Testing API automático
    * Collection runner
    * Newman
    * Jenkins u CI servers
    * Monitors
* Documentación APIs


http://www.jsondiff.com/
https://json-diff.com/
https://jsoncompare.com/#!/simple/


Apartados

- [Instalar Postman](#instalar-postman)
- [Request](#request)
	* Peticion HTTP (Request HTTP)
	* Respuesta HTTP (Response HTTP)
	* Query Parameters
	* Path Variables
	* Análisis de peticiones
- [Variables](#variables)
	* Global
	* Collection
	* Environment
	* Local
	* Data
- [Gestión de Entornos](#gestion-entornos)
- [Gestión de Colecciones](#gestion-colecciones)
- [Test](#test)
	* Uso Manual
	* Uso Automático
	* Uso de Asserts
	* Agrupación de Tests
	* Uso de Schemas JSON
	* Uso de BDD
	* Skippear un test
	* Deshabilitar un test
	* Fail test
	* Reutilizar código en un test
	* Test que prepara datos
	* Enfoque post-test script
- [Pre-Request Script](#pre-request-script)
	* Uso con variables de datos
	* Uso de JSON de intercambio en peticiones
	* Uso para preparar datos aleatorios
	* Uso de variables dinámicas
	* Uso para preparar datos aleatorios
	* Uso de Send Request
	* Reutilizar código en un pre-request script
- [Consola](#consola)
- [Collection Runner](#collection-runner)
- [Workflow](#workflow)
- [Monitor](#monitor)
- [Newman](#newman)
	* Integración con Gitlab
	* Integración con Docker
	* Integración con Jenkins
- [Documentación](#documentacion)
- [Seguridad](#seguridad)
- [Mock Server](#mock-server)
- [Uso de Librerias de Terceros](#use-3rd-party-lib)
	* Propias
	* Externas
- [Postman Echo](#postman-echo)




## <a name="instalar-postman">Instalar Postman</a>

Existen 2 opciones :

* Standalone (Windows, Mac y Linux)
* Desde el navegador





## <a name="request">Request</a>

* Las APIs deberían usar el protocolo HTTPS (Secure Hypertext Transfer Protocol) -> Encriptado


### Peticion HTTP (Request HTTP)

Contiene :

* URL (address)
* Request method (GET, POST, PUT, Etc,)
* Headers (User-Agent: Postman, etc.)
	* Generales
	* Propias
	* Cookies
* Body
	* form-data y x-www-form-urlencoded : simulan información enviada desde un formulario
		* form-data con cabecera "Content-type: multipart/form-data"
		* x-www-form-urlencoded con cabecera Content-type: application/x-www-form-urlencoded
	* raw data : usando normalmente con JSON
		* Con cabecera "Content-type: application/json"
	* binary data : usado con ficheros

### Respuesta HTTP (Response HTTP)

Contiene :

* Status code (200, 404, 500, ...)
* Mensaje
* Tamaño
* Headers
* Body


### Query Parameters

**Uso**

* Se usan en JSON para mandar información
* Query parameters empieza con ? en la URL -> {{baseUrl}}/users?type=vip
* Formato key=value
* Uso de múliples query parameters delimitados en la URL con un & -> foo=1&bar=2
* Los parámetros puede ser opcionales u obligatorios
* Se pueden habilitar / deshabilitar parametros desde el checkbox
* Una respuesta de HTTP 400 presenta problemas en la request



### Path Variables

* Se pueden crear variables de la URL
* Path variable empeza por : y continua con su nombre -> :<name>
* Se puede usar con elementos de la URL o bien con query parameters


### Análisis de peticiones

* Análisis de las acciones
* Mejoras en la descomposicion de acciones
* Composición de acciones
* Condiciones de ejecución
* Etc.





## <a name="variables">Variables</a>

Permiten hacer facilmente los cambios y reutilizar la información

Ejemplo : guardar la url base para ser utilizada en todas las peticiones de uan colección baseUrl -> {{baseUrl}} 

Son fundamentales en el testing

Una Postman variable tiene 2 estados :

* **INITIAL VALUE :** Será disponible a otros si compartes la colección
* **CURRENT VALUE :** Tiene un valor privadoy será el valor que usa postman

Se pueden clasificar segun su scope

Existen diferentes scopes de las variables (Muy similar a como se utilizan en programación)

* Global
* Collection
* Environment
* Local
* Data

Postman comprueba los scopes y funciona de fuera hacia dentro, por lo que el último scope que lee la variable es la que la define

Se acceden mediante la sintaxis :  {{[myVariable]}}

Pueden ser accedidas en :

* Request address
* Params
* Authorization
* Headers
* Body



### Variables Globales

**Uso**

* Resultados rápidos (empezar rápido, no preocuparse mucho, etc.)
* Prototipado
* Compartir datos entre colecciones de un workspace
* Pasar datos a otra request
* Pasar datos desde pre-request script a request / test

**Notas**

* Se aconseja limitar su uso
* Se aconseja limpiar de vez en cuando
* Reduce la posibilidad de perdida de datos
* Reduce la interferencia entre diferentes colecciones
* Se guardan en la herramienta



### Variables de Colección

Definen variables dentro de una colección

**Uso**

* Guardar información específica del entorno (URL, credenciales, etc.)
* Pasar datos a otra request
* Pasar datos desde la pre-request script a request y/o test
* Cuando solo se tiene un entorno

**Notas**

* Son independientes de cualquier entorno



### Variables de Entorno

Funciona muy bien cuando se tienen diferentes entornos de testing (localhost, testing, producción, etc.)

Se utilizan para usar la misma colección pero con cambios por entorno (ejecución, otras configuraciones, etc.)

**Uso**

* Guardar un indicador del entorno (opcional)
* Guardar información específica del entorno (URL, credenciales, etc.)
* Pasar datos a otra request
* Pasar datos desde la pre-request script a request y/o test

**Notas**

* No usar si NO se tienen entornos
* Limpieza de variables que NO se necesitan
* Nomenclatura clara para evitar confusión



### Variables Datos

Facilitan su uso para cargar datos desde ficheros

* CSV
* JSON

Se suelen disparar desde la opción de collection runner

Hacen uso del nombre de la variable definido en el fichero y se puede acceder desde test/script con pm.iterationData



### Variables Locales

FAcilitan pasar datos de la petición , coleccion o entre iteracciones de Collection Runner o Newman


**Uso**

* Se suelen crear en los scripts
* Pasar datos desde la pre-request script a request y/o test





## <a name="gestion-entornos">Gestión de Entornos</a>

Agrupaciones de varibles de entorno que se agrupan por nombre según un JSON de configuración

**Uso**

* Definir una nomenclatura
* Definir el ámbito de aplicación
* Definir las propiedades : entornos , url path, etc.
* Definir los valores 
	* Estáticos
	* Dinámicos





## <a name="gestion-colecciones">Gestión de Colecciones</a>

Agrupaciones de requests se agrupan por nombre según un JSON de implementación

Facilitan que se pueda reutilizarlas después

**Uso**

* Definir una nomenclatura
* Definir una clasificación
* Definir un enfoque
* Seleccion de entornos de ejecución
* Ficheros de propiedades : JSON peticion
* Orden de Ejecución
* Carpetas -> aislar su ejecución del resto de peticiones
* Ejecutar colección entera o carpeta







## <a name="test">Test</a>

Test para probar la petición que se ejecuta cuando esta se completa



### Uso Manual

* Se puede realizar testing manual analizando la respuesta de forma manual


### Uso Automático

```bash
// Ejemplo de test en JavaScript
tests["Status code is 200"] = responseCode.code === 200;


// Ejemplo de test funcional
pm.test('Status code is 200', () => {
  pm.response.to.have.status(200)
});

pm.test("Should return Value is 50", function () {
	// Parseo Json
    var jsonData = pm.response.json();
    pm.expect(jsonData.value).to.eql(50);
});
```

* Se puede realizar testing automático incorporando ciertos automaticos : assert, preparación de datos, etc.
    * El objetivo es probar lo mismo que se haría desde la parte manual
	* Se implementan mediante Javascript
* Definición de Métodos de desarrollo :
    * JavaScript
	* Método funcional
* Uso / adaptación de Snippets de métodos funcionales
* Ámbito de ejecución : request, directorio y/o colección
* Uso de pm.response
* Chai Assertion Library
	* https://www.chaijs.com/api/bdd/
	* pm.expect
* Actualizacion de variables : entorno o globales
* Resultados de test
* Usar la consola para ayudar a ver el contenido -> console.log()
* Usar Funciones de JavaScript
* Usar aspectos particulares de JavaScript
	* Array.prototype.filter() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	* Array.prototype.map() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	* ...



### Uso de Asserts

**Peticiones válidas**
	
* Verificar estatus de la respuesta → 200, 202,...
	* Individual
	* Múltiple
* Verificar formato de la respuesta → JSON , Text, HTML, ...
	* Probar JSON requiere parseo
* Verificar el tiempo de respuesta
* Verificar el tamaño de la petición
* Verificar propiedades del API
* Verificar tipos de datos o valores de las propiedades
* Verificar valores vacios, cadenas de texto, null y ceros
* Verificar valores estáticos para peticiones particulares
* Verificar valores de cabeceras y contenido
	* Valores concretos
	* Posiciones de arrays
* Verificar valores de texto en las respuestas
* Verificar validez de los datos (aparición, valores, cantidad, etc.)
* Verificar si un JSON estan contenido dentro de otro
* ...

**Peticiones inválidas**

* Verificar estatus de la respuesta → 404,...
* Verificar formato de la respuesta → JSON , Text, HTML, ...
	* Probar JSON requiere parseo
* Verificar String de la respuesta
* ...

> Nota :
> Cada test puede contener múltiples assertions



### Agrupación de Tests

Los test se pueden agrupar según algun criterio de ejecución

```bash
// Grouping Test
const groupType = 2;

if (groupType === 1) {
    console.log("Execute Group Test 1");

    // Verify Valid Content
    pm.test("GROUP 1 Should return data", function () {
        pm.expect(jsonData.data).to.not.empty
    })

}
```

**Uso**

* Definir el criterio de agrupación
* Definir los tests que se verán afectados por el criterio



### Uso de Schemas JSON

Validar la estructura de respuesta de un JSON

**Uso**

* Validar el schema de la respuesta : jsonSchema, tv4.validate, etc.
* Uso en respuestas vacias, con errores o valores válidos
* Definir un schema directo y/o como variable
* ...



### Uso de BDD

Se puede ejecutar los tests en Postman con formato BDD

Para ello se requiere cargar la librería de **postman-bdd**



### Skippear un test

Evitar la ejecución de un test pero que se muestre en los informes

**Uso**

* Skip Ad-hoc -> pm.test.skip
* Skip condicional
* Skip condicional segun una variable : criterio, entorno, etc.


```bash
// Skipped Ad-hoc Test
pm.test.skip('SKIPPED Ad-hoc Should get all users',()=>{
    pm.expect(jsonData.total).to.eql(12)
});

// Skipped with Collection Var Flag
let skipTestCollectionVar = eval(pm.collectionVariables.get("skip_test_collection_var"));

console.info("* skipTestCollectionVar :: "+ skipTestCollectionVar);

(skipTestCollectionVar ? pm.test.skip : pm.test)("SKIPPED Conditional Collection Var Should get all users", () => {
    pm.expect(jsonData.total).to.eql(12)
});
```

### Deshabilitar un test

Evitar la ejecución de un test y que NO se muestre en los informes


```bash
if (pm.response.code !== 300) {
    console.log("Exit code !== 300");
    return
}

console.log("Execute Tests");

// Verify Status code
pm.test("Should return status code is 200", function () {
    pm.response.to.have.status(200);
})
```

### Fail test

Finalizar un test con FAIL



### Reutilizar código en un test

Se puede utilizar código de test reutilizado para ejecutar tests comunes

**Uso**

* Permite utilizar el enfoque JavaScript y el funcional
* Se requiere inyectar el codigo en una variable y luego evaluar la variable
* Se puede utilizar de forma aislada o integrada con otros test



### Test que prepara datos

Se pueden crear variables durante la ejecución de los tests con los valores de salida de la respuesta o con valores calculados en su validación

**Uso**

* Integración de valores con otros test durante su uso



### Enfoque post-test script

Utilizar los tests para cargar variables y/o preparar datos que serán utilizados posteriormente

**Uso**

* Usar variables a nivel de colección, globales, entorno, etc.
	* Cargar valores
	* Cargar objetos
	* Cargar JSON





## <a name="pre-request-script">Pre-Request Script</a>

Permiten crear comportamientos dinámicos en peticiones y colecciones

**Uso**

* Se utiliza nivel de request, colección y/o directorio 
* Se escriben en Postman Sandbox
* Crear variables
* Generar datos de test random
* Soporte a test (cambio de datos, generar datos, etc.)


### Uso con variables de datos

Se utilizará en collection runner conficheros que precargan valores en determiandas variables

Recordar que hace uso de las variables "iterationData"


### Uso de JSON de intercambio en peticiones

Se pueden realizar diferentes trabajos con el JSON

* Crear nuevo
* Sobrescritura del facilitado en el body
* Modificar partes o la totalidad


### Uso para preparar datos aleatorios

Se pueden preparar valores a utilizar que se generen de forma aleatoria en base a funciones proporcionadas por JavaScript

```bash
// Between any two numbers
Math.floor(Math.random() * (max - min + 1)) + min;

// Between 0 and max
Math.floor(Math.random() * (max + 1));
```

**Uso**

* Uso y carga de valores directo sobre variables
* Uso y carga de valores mediante funciones



### Uso de variables dinámicas

https://postman-quick-reference-guide.readthedocs.io/en/latest/dynamic-variables.html

```bash
// Ejemplo en un Body
{"email": "john.doe.{{$timestamp}}@example.com"}

// Ejemplo en un Script
pm.variables.replaceIn('{{$randomFirstName}}'); 
```



### Uso para preparar datos

Combinación de :

* Generación de valores aleatorios
* Manipulación de datos
* Carga de variables
* Lógica de negocio
* Definición en la propia request
* Definición a partir de otra request
* Uso de workflow o no
* Uso de sendRequest



### Uso de Send Request

Uso en la sección de pre-request Script de la llamada a otro endpoint : propio o externo

**Uso**

* Se usa para preparar datos
* Se usa para cargar librerias JS
* Uso en combinación con la sección de tests para iterar tests sobre diferentes peticiones



### Reutilizar código en un pre-request script

Definir un conjunto de funciones reutilizables en esta sección

Diferentes enfoques : Util, Helper, etc.

**Uso**

* Uso en generación de datos
* Uso en validación
* Etc





## <a name="consola">Consola</a>

Proporciona una consola que se peude utilizar en Test y/o pre-request script

**Uso**

```bash
// Ejemplo de texto
console.log("Ejecutar Script");

// Ejemplo de mostrar el contenido
var valueVarGlobal = pm.globals.get("valueVarGlobal");

console.log(valueVarGlobal);
console.log("* valueVarGlobal ::" + valueVarGlobal);
```




## <a name="collection-runner">Collection Runner</a>

Facilitan ejecutar una colección entera desde un click

**Uso**

* Se construyen funcionalmente en Postman
* Facilita ejecutar una colección entera, un subconjunto de request o bien un directorio
* LAs peticiones se ejecutaran en el orden de la colección a menos que un workflow se encuentre activo




## <a name="workflow">Workflow</a>

**Uso**

* Default
	* Manual
	* Orden de la colección
* Sólo funcionan en collection runner o bien vía Newman
* Uso de orden por nombre
* Orden en runner
* Uso de : postman.setNextRequest en la sección de test
	* Para cambiar el orden : postman.setNextRequest(“Customer Api”)
	* Para parar la ejecuciíonn : postman.setNextRequest(null)
	* Cuidado con los buqles infinitos
	* Usar variables : pm.info.requestName y/o pm.info.requestId
	* Definir condiciones de uso de flujos segun variables
* Desactivar su uso a nivel de script

```bash
// Basico
postman.setNextRequest([next-request-name|next-request-id|null])

// Avanzado
if (pm.globals.get('hasRun')) {
  postman.setNextRequest(null)
}

pm.globals.set('hasRun', true)
```

https://learning.postman.com/docs/running-collections/intro-to-collection-runs/





## <a name="monitor">Monitor</a>

Facilitan ejecutar una colección entera de forma automática a intervalos regulares

Funcionalidad PRO

**Uso**

* Facilita la planificación de la ejecución de un Postman
* Facilita la ejecución de postman sin tener postman abierto
* Alternativa rápida al uso de servidores de IC
* Expone un API que debe ser accesible desde la RED
* NO esta en la misma red que tu aplicación
* Las variables Flobales no Pueden ser importadas
* Las variables globales y de entorno no se persisten
* Proporciona 100 peticiones gratis por mes
* FAcilitan la mopnitorizacion del rendimiento y a respuesta de las APIS





## <a name="newman">Newman</a>

Herramienta CLI que puede disparar colecciones, ejecutar los test y generar un report

Requiere tener node instalado -> npm install -g newman

Comprobar la version : newman --version

Puede acceder a una coleccion :

* Exportar la colección como un fichero JSON
* Compartir como un link público
* Usar el API de Postman para la coleccion

https://documenter.getpostman.com/view/631643/JsLs/?version=latest

https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/

**Uso**

* No tiene interfaz -> uso desde terminal
* Se suele instalar para ser usado por un servidor CI
* Exportar entorno y coleccion desde postman
* Ejecutar un directorio dentro de una colección
* Utilizar variables de entorno usando Newman


```bash
newman run collection.json --delay 10000

newman run collection.json --disable-unicode

newman run collection.json --color off

// Usa la URL : https://{machineName{}}:{‌{machinePort}}
newman run my-collection.json --global-var "machineName=mymachine1234" --global-var "machinePort=8080"
```

* htmlextra is the most popular reporter in the Postman community
### Integración con Gitlab

https://www.youtube.com/watch?v=H0WiDqhDIOs


### Integración con Docker


```bash
docker run \
    # run collections locally from a ~/collections folder
    -v ~/collections:/etc/newman \
    # using the postman/newman:ubuntu image
    -t postman/newman:ubuntu \
    # running a specific collection
    run "XXXNewmanTest.json.postman_collection" \
    # Define specific environment
    --environment="XXXNewmanTestEnv.json.postman_environment" \
    # Define  newman options
    --reporters="json,cli" --reporter-json-export="newman-results.json"
```


### 
Integración con Jenkins

https://www.youtube.com/watch?v=7ar4-O3vNiM

* Log Parser Plugin: Para analizar sintácticamente la salida.	
* Email Extension Plugin: Para recibir un email si algún test falla.






## <a name="documentacion">Documentación</a>

**Uso**

* APIS separadas
* Markdown





## <a name="Seguridad">Seguridad</a>

Es un aspecto muy importante pero no se ha implementado nada





## <a name="mock-server">Mock Server</a>

Se utilizan para simular las respuestas de un servidor de API Fake

Puede responder a diferentes peticiones con diferentes respuestas

Se usan para diseñar APIs, prototiapdo y API testing

Funcionalidad PRO

**Uso**

* Integración con el servicio de Postman
* Configuración vía Postman
* Requiere tener CORS habilitado
* La capa gratuita permite 1000 peticiones al mes 





## <a name="use-3rd-party-lib">Uso de Librerias de Terceros</a>

Facilita usar librerias de terceros en las peticiones

Se requiere :

* Identificar la librería
* Acceder a ella mediante una petición GET
	* Acceso directo a la URL
	* Raw URL de Github
	* CDN (unpkg, etc.)
	* Etc,
* Asignar el responseBody a una variable de entorno/global
* Usar eval para ejecutar la librería como un string

**Uso**

* Usar para preparar datos, testing, etc.
* Se pueden definir librerías propias
* Se puede incorporar por acciones : preparación & uso, directo


```bash
pm.sendRequest("https://acme.com/custom-script.js", (error, response) => {
    
	if (error || response.code !== 200) {
        pm.expect.fail("No puede cargar la librería externa");
    }

    eval(response.text());

    // Añdir el código aqui
});
```



### Propias

* Requiere definir alguna librería propia de javascript y exponerla vía servidor de aplicaciones / estáticos para ser consumida por Postman mediante una variable
* Evaluar su uso en : pre-request script y/o test



### Externas

* Requiere acceder a la URL disponible y cargarla en una variable
* Evaluar su uso en : pre-request script y/o test

```bash
// *** Ejemplo carga con preparación ***

// Petición
GET https://jamesmessinger.com/postman-bdd/dist/postman-bdd.min.js

// Test
postman.setGlobalVariable('lib_postmanBDD', responseBody);

// *** Ejemplo de uso ***

// Evaluación
eval(globals.lib_postmanBDD);

// Uso en test
describe('Assertions for response',()=>{

    it('BDD Should return status code 200',()=>{
        response.should.have.status(200);
    });
	...
}
```





## <a name="postman-echo">Postman Echo</a>

Helper API para facilitar el testing requests

https://docs.postman-echo.com

```bash
pm.sendRequest('https://postman-echo.com/time/now', function (err, res) {
    if (err) { console.log(err); }
    else {
        var currentTime = res.stream.toString();
        console.log(currentTime);
        pm.environment.set("currentTime", currentTime);
    }
});
```
