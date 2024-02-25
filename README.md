# React App Dockerizada

Este proyecto contiene una aplicación React Dockerizada, la cual obtiene datos de una API y los muestra en una tabla. Es el test FrontEnd para Red Efectiva.

## Puesta en Marcha

Para ejectuar la aplciacion, debes de tener Docker instalado en tu equipo.

1. **Construye la Imagen Docker**:

   Abre un terminal y navega hasta el directorio raiz del proyecto. Ejecuta el siguiente comando para construir la imagen Docker:

   docker build -t redefectiva-frontend .


2. **Ejectuta el contenedor Docker**:

luego de construir la imagen,  ejecuta el contenedor basado en la imagen creada anteriormente utilizando el siguiente comando:

docker run -p 3000:3000 redefectiva-frontend


3. **Accediento a la Aplicacion**:

Abre el navegador e ingresa a la siguiente direccion [http://localhost:3000](http://localhost:3000) para acceder a la aplicacion que esta ejecutandose dentro del contenedor docker.

## Notas Adicionales

- El archivo Dockerfile en el directorio raiz contiene la configuracion para construir la imagen docker.
- El archivo .dockerignore especifica los archivos y directorios que son excluidos al momento de construir la imagen Docker.


