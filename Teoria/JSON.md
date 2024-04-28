# JSON (JavaScript Object Notation)

JSON es un formato de intercambio de datos ligero y fácil de leer. Se utiliza comúnmente para representar información estructurada en pares clave-valor, similar a la estructura de un objeto JavaScript.

Es ampliamente utilizado en aplicaciones web para enviar y recibir datos entre el servidor y el cliente.

## Historia de JSON:

JSON (JavaScript Object Notation) fue creado por Douglas Crockford en la década de 2000, inspirado en la notación de objetos de JavaScript.

Se convirtió rápidamente en un estándar (RFC 4627) gracias a su simplicidad y legibilidad. JSON se volvió fundamental en el intercambio de datos en aplicaciones web y APIs RESTful.

A lo largo del tiempo, ha mantenido su relevancia y sigue siendo ampliamente utilizado. Su historia refleja la necesidad de un formato ligero y fácil de usar para el intercambio de datos en el desarrollo web.

---

### Tipos de Datos Soportados:

JSON admite tipos de datos como cadenas de texto, números, booleanos, arrays, objetos y valores nulos.

### Formato de Intercambio Ligero:

La simplicidad y la legibilidad son clave en JSON. Su estructura fácil de entender lo hace ideal para el intercambio de datos entre aplicaciones y servicios web.

### Extensibilidad:

Aunque la sintaxis básica es simple, JSON puede ser extendido para soportar estructuras más complejas mediante la anidación de objetos y arrays.

### Soporte en Diversos Lenguajes:

JSON es compatible con la mayoría de los lenguajes de programación. Casi todos los lenguajes tienen funciones o bibliotecas para trabajar con datos en formato JSON.

### Anidamiento:

Los objetos y arrays pueden anidarse dentro de otros objetos o arrays.
Esto permite representar estructuras de datos más complejas.

## Estructura Básica

```json
{
  "nombre": "Juan",
  "edad": 30,
  "ciudad": "Ejemploville",
  "casado": false,
  "hobbies": ["leer", "correr", "programar"],
  "direccion": {
    "calle": "123 Calle Principal",
    "ciudad": "Ejemploville",
    "codigo_postal": "12345"
  }
}
```

En este ejemplo:

- "nombre", "edad", "ciudad", y "casado" son propiedades con valores de cadena, número y booleano.
- "hobbies" es una propiedad que contiene un arreglo.
- "direccion" es una propiedad que contiene otro objeto JSON.

## Usos Comunes

### 1. Configuración y Almacenamiento de Datos

JSON se utiliza para configurar y almacenar datos en diversos contextos, como archivos de configuración, bases de datos y archivos de intercambio de datos.

```js
// Configuración de una aplicación
{
  "idioma": "es",
  "tema": "oscuro",
  "notificaciones": true
}
```

### 2. Respuestas de API

Las respuestas de API a menudo se envían en formato JSON para transmitir datos estructurados entre el servidor y el cliente.

```js
// Respuesta de una API de clima
{
  "ciudad": "Ciudad de Ejemplo",
  "temperatura": 25,
  "condiciones": "soleado"
}
```

### 3. Intercambio de Datos en Aplicaciones Web

En aplicaciones web, JSON es esencial para enviar y recibir datos entre el frontend y el backend.

```js
// Datos de un formulario de registro
{
  "nombre": "Maria",
  "email": "maria@email.com",
  "contrasena": "contrasena_segura"
}
```

### 4. Representación de Objetos en JavaScript

JSON se utiliza para representar objetos en JavaScript, facilitando la comunicación y el intercambio de datos entre diferentes partes de una aplicación.

```js
// Objeto JavaScript representado en JSON
{
  "tipo": "objeto",
  "propiedades": ["clave1", "clave2"],
  "activo": true
}
```

## Parsear y Generar JSON en JavaScript:

### En JavaScript, puedes trabajar con JSON utilizando dos funciones principales:

### 1 - JSON.stringify() - Para convertir un objeto JavaScript a una cadena JSON:

```js
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Ejemploville",
  casado: false,
  hobbies: ["leer", "correr", "programar"],
  direccion: {
    calle: "123 Calle Principal",
    ciudad: "Ejemploville",
    codigo_postal: "12345",
  },
};

const jsonPersona = JSON.stringify(persona);
console.log(jsonPersona);
```

### 2 - JSON.parse() - Para convertir una cadena JSON a un objeto JavaScript:

```js
const jsonPersona =
{"nombre":"Juan",
"edad":30,
"ciudad":"Ejemploville",
"casado":false,
"hobbies":["leer","correr","programar"],
"direccion":{"calle":"123 Calle Principal",
"ciudad":"Ejemploville",
"codigo_postal":"12345"}};

const persona = JSON.parse(jsonPersona);
console.log(persona);

```

JSON proporciona una forma eficiente y legible de estructurar datos, lo que lo convierte en una opción popular en el desarrollo de software.

---
---

[🏠 Volver al Home](../README.md)