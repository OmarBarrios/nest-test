<div align="center">

# nestTest

> Api con Nestjs y Veryfi para procesar imágenes
 <br />

</div>

## :hammer_and_wrench: Entorno Desarrollo

- Nestjs
- MongoDb
- nestTest-Back

## :heavy_plus_sign: Implementación del proyecto:
> Pasos que debes de utilizar para crear los contenedores.

1. Crear el archivo .env y agrega las variables de entorno que están en .env.example
2. Crear directorio `mongodb` en la raíz del proyecto
3. dentro del directorio crear la carpeta `data`
4. Ejecute `npm i` para que existan los `node_modules` en su proyecto
5. Ejecutar el siguiente comando en la raíz del proyecto:

```
docker-compose up -d
```

### Mongodb
Acceso a Instancia local: 
- host `localhost`
- puerto: `3500`
- username: `guest`
- password: `guest`
- database: `nesttest`

## :page_facing_up: Variables de entorno:

- PORT: `puerto del servidor`
- NODE_ENV: `nombre del ambiente de trabajo`
- MONGODB_HOST: `nombre del contenedor de la base de datos`
- MONGODB_USER: `usuario de la base de datos`
- MONGODB_PASSWORD: `contraseña del usuario de la base de datos`
- MONGODB_DATABASE: `nombre de la base de datos`
- VERIFY_URL: `api externa para las imagenes`
- CLIENT_ID: `id del cliente de la api externa`
- AUTHORIZATION: `api key de la api externa`

## :computer: Comandos del proyecto:

- Comando para ejecutar en desarrollo con nodemon: `npm run dev`

- Comando para ejecutar en stage o producción: `npm run start`

- Comando para compilar: `npm run build`

## :books: Recursos:

- [Nestjs](https://nestjs.com/)
- [npm](https://www.npmjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [mongoose](https://www.npmjs.com/package/mongoose)