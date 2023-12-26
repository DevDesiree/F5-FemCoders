# JavaScript (JS)

JavaScript es un lenguaje de programación ampliamente utilizado en desarrollo web para agregar interactividad y dinamismo a las páginas web. A menudo se usa en conjunto con HTML y CSS para crear aplicaciones web ricas y dinámicas.

## Historia de JavaScript

- JavaScript fue creado por Brendan Eich en 1995 mientras trabajaba en Netscape Communications Corporation. Originalmente se llamó "LiveScript", pero se renombró a "JavaScript" para capitalizar la popularidad del lenguaje Java en ese momento.

- En 1996, JavaScript se estandarizó con la ayuda de Ecma International, y se publicó como ECMAScript 1 (ES1).

- Las versiones posteriores de ECMAScript, como ES3 (1999) y ES5 (2009), introdujeron mejoras significativas en el lenguaje, incluyendo nuevas características y funcionalidades.

- En 2015, se lanzó ECMAScript 2015 (también conocido como ES6), que incluyó una serie de adiciones importantes al lenguaje, como clases, módulos y promesas.

- A partir de ES6, se decidió publicar nuevas versiones de ECMAScript cada año, lo que ha llevado a un rápido desarrollo de JavaScript.

- JavaScript ha experimentado un crecimiento significativo en su popularidad y utilidad en el desarrollo web, gracias a la creación de bibliotecas y marcos populares como jQuery, React, Angular y Vue.js.


## A continuación, se presentan conceptos fundamentales de JavaScript:


## Comillas
En JavaScript, las comillas se utilizan para delimitar cadenas de texto. Hay tres formas principales de definir cadenas de texto en JavaScript:

## Comillas Simples (') y Dobles (")

Puedes utilizar comillas simples o dobles para definir cadenas de texto. Ambas formas son equivalentes en términos de funcionalidad.


### Concatenación con Comillas Simples:


```js
let nombre = 'Juan';
let saludo = 'Hola, ' + nombre + '!';

console.log(saludo); // Output: Hola, Juan!
```

### Concatenación con Comillas Dobles:

```js
let nombre = "Juan";
let saludo = "Hola, " + nombre + "!";

console.log(saludo); // Output: Hola, Juan!
```

## Template Strings (Comillas Invertidas o Acento Grave):

Los template strings te permiten crear cadenas de texto de manera más legible y con la capacidad de incluir expresiones dentro de la cadena utilizando ${}.

```js
let nombre = "Juan";
let edad = 30;

let mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
```

## Variables y Tipos de Datos

En JavaScript, puedes declarar variables utilizando las palabras clave var, let o const. Además, existen varios tipos de datos, como números, cadenas de texto, booleanos, objetos, arreglos, entre otros.

```js
// Declaración de variables
var numero = 42;
let texto = "Hola, mundo!";
const PI = 3.14;

// Tipos de datos
let esVerdadero = true;
let arreglo = [1, 2, 3];
let objeto = { nombre: "John", edad: 30 };
```

## Arrays (Arreglos)

Los arreglos son estructuras de datos que te permiten almacenar varios elementos en una única variable. Puedes acceder a los elementos mediante índices. Aquí hay un ejemplo:

```js
let frutas = ["Manzana", "Banana", "Uva"];
console.log(frutas[1]); // Output: Banana
```

## Objetos

Los objetos son colecciones de pares clave-valor y son fundamentales en JavaScript. Pueden representar entidades del mundo real y contener propiedades y métodos. Aquí hay un ejemplo:

```js
let persona = {
  nombre: "Juan",
  edad: 25,
  decirHola: function () {
    console.log("¡Hola!");
  },
};

console.log(persona.nombre); // Output: Juan
persona.decirHola(); // Output: ¡Hola!
```

## Bucles (For Loop)

Un bucle for es una estructura que permite ejecutar un bloque de código varias veces. Aquí tienes un ejemplo que imprime los números del 1 al 5:

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

## Condicionales (If-Else Statement)

Los condicionales permiten ejecutar diferentes bloques de código según si una condición es verdadera o falsa. Aquí hay un ejemplo que verifica si un número es positivo, negativo o cero:

```js
let numero = 0;

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}
```

## Operadores Lógicos

Los operadores lógicos permiten combinar o modificar valores booleanos. Los operadores más comunes son && (AND), || (OR) y ! (NOT). Aquí tienes un ejemplo:

```js
let esMayorDeEdad = true;
let tieneLicencia = false;

if (esMayorDeEdad && tieneLicencia) {
  console.log("Puede conducir");
} else {
  console.log("No puede conducir");
}
```

## Bucle while

El bucle while permite ejecutar un bloque de código mientras una condición especificada sea verdadera. Aquí tienes un ejemplo de un bucle while en el que el bucle se ejecutará mientras contador sea menor o igual a 5:

```js
let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}
```

## Switch

La estructura switch permite realizar múltiples comparaciones y ejecutar diferentes bloques de código según el valor de una expresión. Aquí hay un ejemplo:

```js
let diaDeLaSemana = "Lunes";

switch (diaDeLaSemana) {
  case "Lunes":
    console.log("Comienzo de la semana");
    break;
  case "Viernes":
    console.log("¡Por fin es viernes!");
    break;
  default:
    console.log("Otros días");
}
```

## Funciones

Las funciones en JavaScript permiten encapsular bloques de código y reutilizarlos. Aquí tienes un ejemplo de una función que suma dos números:

```js
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(3, 4);
console.log(resultado); // Output: 7
```

## Funciones de Flecha

Las funciones de flecha son una forma más concisa de escribir funciones en JavaScript. Son especialmente útiles para funciones anónimas y funciones de devolución de llamada. Aquí tienes un ejemplo:

```js
// Función tradicional
function sumar(a, b) {
  return a + b;
}

// Función de flecha
let sumarFlecha = (a, b) => a + b;

console.log(sumar(2, 3)); // Output: 5
console.log(sumarFlecha(2, 3)); // Output: 5
```

Hoy en día, JavaScript es esencial en el desarrollo web moderno y se utiliza tanto en el lado del cliente como en el servidor (Node.js), lo que lo convierte en un lenguaje fundamental para la construcción de aplicaciones web interactivas y dinámicas.

---
---

[🏠 Volver al Home](../README.md)
