# Newman

Neuman es una herramienta open source para ejecutar postman desde línea de comandos

Se trata por tanto de un runner de Postman


Puede presentar la información con diferentes formatos
https://github.com/postmanlabs/newman#html-reporter

Apartados

- [Newman](#newman)
  - [Instalar Newman](#instalar-newman)
  - [Newman CLI](#newman-cli)
  - [Ejemplo Newman CLI/a\>](#ejemplo-newman-clia)
  - [Newman Reporter/a\>](#newman-reportera)
    - [newman-reporter-html](#newman-reporter-html)
    - [newman-reporter-htmlextra](#newman-reporter-htmlextra)
    - [newman-reporter-htmlextra](#newman-reporter-htmlextra-1)
  - [Newman Docker/a\>](#newman-dockera)



## <a name="instalar-newman">Instalar Newman</a>

Requiere utilizar Node.js >= v10

```bash
npm install -g newman
```

Instalación con Homebrew

```bash
brew install newman
```

Ver versión

```bash
newman -v
```

Tener en cuenta que se puede cambiar la version con nvm

```bash
nvm ls
```




## <a name="newman-cli">Newman CLI</a>

* -h : Opciones
* -v : Versión
* --folder : Directorio
* -e / --environment [file|URL] : Indicar el fichero de entorno
* -d / --iteration-data [file] : Indicar el fichero de datos
* -g / --globals [file] : Indicar el fichero de valores Globales
* -n, --iteration-count [number] : Numero de Iteraciones

**Extra**

* --bail : Para de ejecutar cuando un test case falla
* --vervose : Devuelve información detallada

```bash
newman run examples/sample-collection.json -e dev_environment.json
```

Funciona con : fichero y API de getPostman

Puede lanzarse o bien con la colección en un formato de JSON o bien atacando a una URL donde se encuentre la colección publicada

Para su ejecución bastaría con exportar la colección de Postman que se quiere utilizar

Tras ejecutar el comando se devuelve el resultado en la salida



## <a name="newman-cli">Ejemplo Newman CLI/a>

Pasos a seguir :

* Ubicarse en el directorio **/postman/collections/reqres**

* Ejecutar el siguiente comando :

```bash
newman run Test-Lab-Reqres.in.postman_collection.json -e ./environments/Test-Lab-Environment.postman_environment.json
```





## <a name="newman-reporter">Newman Reporter/a>



### newman-reporter-html

Instalar el modulo de reporter :**newman-reporter-html**

```bash
npm install -g newman-reporter-html
```

Pasos a seguir :

* Ubicarse en el directorio **/postman/collections/reqres**

* Ejecutar el siguiente comando :

```bash
newman run Test-Lab-Reqres.in.postman_collection.json -e ./environments/Test-Lab-Environment.postman_environment.json -r html,cli

newman run Test-Lab-Reqres.in.postman_collection.json -e ./environments/Test-Lab-Environment.postman_environment.json -r html,cli --reporter-html-export ./reports/result.html
```

### newman-reporter-htmlextra

Instalar el modulo de reporter :**newman-reporter-htmlextra**

```bash
npm install -g newman-reporter-htmlextra
```





### newman-reporter-htmlextra

https://github.com/DannyDainton/newman-reporter-htmlextra

Instalar el modulo de reporter :**newman-reporter-htmlextra**

```bash
npm install -g newman-reporter-htmlextra
```

Pasos a seguir :

* Ubicarse en el directorio **/postman/collections/reqres**

* Ejecutar el siguiente comando :

```bash
newman run Test-Lab-Reqres.in.postman_collection.json -e ./environments/Test-Lab-Environment.postman_environment.json -r htmlextra --reporter-htmlextra-export ./reports/result-extra.html
```





## <a name="newman-docker">Newman Docker/a>

Pasos a seguir :

* Ubicarse en el directorio **/newman/docker**

* Ejecutar el siguiente comando :

```bash
docker-compose -f docker-compose-extra.yaml up --build
```
