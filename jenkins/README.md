# Jenkins

Apartados

- [Jenkins Docker](#jenkins-docker)


https://www.digitalocean.com/community/tutorials/how-to-automate-jenkins-setup-with-docker-and-jenkins-configuration-as-code
https://github.com/jenkinsci/jenkins/blob/master/core/src/main/resources/jenkins/install/platform-plugins.json
https://technologyconversations.com/2017/06/16/automating-jenkins-docker-setup/


Configuration as Code plugin (JCasC) facilita configurar Jenkins de una manera declarariva y mantenible a partir de ficheros de configuracion

URL de acceso a la administración de plugins de Jenkins
http://server_ip:8080/pluginManager/installed

## <a name="jenkins-docker">Jenkins Docker/a>

Pasos a seguir :

* Ubicarse en el directorio **/newman/docker**

* Ejecutar el siguiente comando :

```bash
docker-compose up --build
```

**Validar**

* Mirar que en la pagina principal pone el mensaje de jenkins.systemMessage
* Ir a Manage Jenkins -> Configure system -> ** # of executors* = 3
* Ir a Manage Jenkins -> Configuration as Code y verificar que el path ha sido leido y configurado : /var/jenkins_conf
* Ir a Manage Jenkins -> Configure Global Security -> Authorization -> Matrix-based security


**Ver Documentacion Jenkins**

http://localhost:8080/configuration-as-code/reference



## <a name="jenkins-configuracion-para-newman">Congiguración Jenkins para Newman/a>

Pasos a seguir para crear un proyecto :


### Sección General

* Rellenar el campo "Descripción"
* NO seleccionar nada



### Sección Source Code Management

* Seleccionar : None



### Sección Build Triggers

Establecer el intervalo de ejecución de test

* Seleccionar : Build periodically

* Establecer los valores :

```bash
//Ejecutar cada 5 minutos
*/5 * * * *
```



### Sección Build

* Acceder a : Build > Add build step > Execute shell 

* Establecer los valores :

```bash
newman run /var/jenkins_home/postman_collections/collection.json
```



### Sección Post-build Actions

* No seleccionar nada