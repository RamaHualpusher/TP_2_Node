# TP_2_NODE

Este es un proyecto para realizar una llamada a una API REST y guardar la respuesta en una base de datos MySQL como objetos tipo Pais. Para esto, se usará Node.js y TypeScript.

## Instalación

### Clonar el repositorio

Para clonar el repositorio, ejecuta el siguiente comando en tu terminal:

```
git clone https://github.com/tu_usuario/tp_2_node.git
```

### Instalar las dependencias

Una vez que hayas clonado el repositorio, ingresa a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm install
```

### Configurar la base de datos

Antes de iniciar el servidor, debes crear una base de datos MySQL y configurar las credenciales correspondientes en el archivo `src/config/database.ts`. Allí encontrarás los siguientes campos que deberás completar con tus propias credenciales:

```typescript
{
  "username": "tu_usuario",
  "password": "tu_contraseña",
  "database": "tp_2_node",
  "host": "localhost",
  "dialect": "mysql"
}
```

Además, para crear la tabla correspondiente al objeto Pais, puedes ejecutar el siguiente script SQL:
```sql
CREATE TABLE pais (
  id INT(11) NOT NULL AUTO_INCREMENT,
  codigoPais VARCHAR(3) NOT NULL DEFAULT '---',
  nombrePais VARCHAR(100) NOT NULL DEFAULT 'unknown',
  capitalPais VARCHAR(100) NOT NULL DEFAULT 'unknown',
  region VARCHAR(100) NOT NULL DEFAULT 'unknown',
  poblacion BIGINT(15) NOT NULL DEFAULT 0,
  latitud DECIMAL(10, 8) NOT NULL DEFAULT 0,
  longitud DECIMAL(11, 8) NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);
```

### Compilar los archivos TypeScript

Para compilar los archivos TypeScript a JavaScript, ejecuta el siguiente comando:

```
tsc
```

Este comando transpilará los archivos TypeScript y creará la carpeta `dist` con los archivos JavaScript.

### Iniciar el servidor

Una vez que hayas compilado los archivos TypeScript, puedes iniciar el servidor ejecutando el siguiente comando:

```
node ./dist/index.js
```

Si todo ha ido bien, deberías ver un mensaje en la terminal que indica que el servidor se está ejecutando en el puerto 3000.

## Uso

Denes iniciar el servidor para que se ejecute el código que se encuentra en el archivo `src/index.ts`. Este archivo contiene el código necesario para realizar una llamada a la API REST de [restcountries.eu](https://restcountries.eu/) y guardar la respuesta en la base de datos MySQL.


Recuerda que siempre que realices cambios en tus archivos TypeScript, deberás volver a compilarlos utilizando `tsc` antes de reiniciar tu aplicación Node.js.