# Qué es el Testing

El testing, o prueba de software, es el proceso de evaluación de un sistema o aplicación para identificar defectos, asegurar que cumple con los requisitos especificados y garantizar su calidad. 

El objetivo principal es detectar errores antes de que el software sea puesto en producción. Existen varios tipos de pruebas, como pruebas unitarias, pruebas de integración, pruebas de sistema y pruebas de aceptación, entre otras.


### Testing TDD:

TDD, o Desarrollo Guiado por Pruebas (Test-Driven Development en inglés), es una metodología de desarrollo de software que se centra en escribir pruebas antes de escribir el código de la funcionalidad. El ciclo de desarrollo en TDD sigue estos pasos:

- Escribir una Prueba (Test): Antes de implementar una nueva característica o hacer cambios en el código existente, el desarrollador escribe una prueba que define una pequeña porción de la funcionalidad deseada. Esta prueba inicialmente debería fallar ya que la funcionalidad aún no ha sido implementada.

- Escribir el Código Mínimo para Pasar la Prueba: El desarrollador implementa el código mínimo necesario para que la prueba pase satisfactoriamente. El enfoque aquí es hacer lo justo y necesario para que la prueba sea exitosa, sin preocuparse aún por la eficiencia o la optimización.

- Refactorizar el Código (si es necesario): Después de que la prueba ha pasado, el desarrollador puede refactorizar el código para mejorarlo sin cambiar su comportamiento. La idea es mantener el código limpio y mantenible.

- Repetir el Proceso: El desarrollador vuelve a empezar el ciclo escribiendo otra prueba para la próxima porción de funcionalidad. Este proceso se repite de manera iterativa, y cada ciclo agrega pequeñas incrementaciones a la funcionalidad general del software.

#### Las principales ventajas del TDD incluyen:

Detección Temprana de Errores: Las pruebas se ejecutan de manera continua, lo que ayuda a detectar y corregir errores rápidamente.

Código Más Confiable: La implementación se ajusta a los requisitos de las pruebas, lo que contribuye a un código más confiable y menos propenso a errores.

Documentación Automática: Las pruebas sirven como documentación automática del comportamiento esperado del software.

Facilita el Refactorizado: Como las pruebas proporcionan una red de seguridad, los desarrolladores pueden refactorizar el código con confianza, sabiendo que las pruebas ayudarán a identificar cualquier regresión.


## Caja Negra

La caja negra es una técnica de prueba que evalúa el software sin conocer los detalles internos de su implementación. Se centra en las entradas y salidas del sistema, tratando al software como una "caja negra" cuyo funcionamiento interno no se revela.

### Ejemplo Práctico de Caja Negra:
Imagina un software de calculadora. En un enfoque de caja negra, solo te preocuparías por las funciones proporcionadas y sus resultados, sin conocer cómo se realiza internamente cada cálculo. 

Podrías ingresar números y operaciones, observar las salidas y verificar que los resultados sean correctos.

```js
// Función de la calculadora (implementación interna desconocida)
function calcular(operacion, num1, num2) {
  // Implementación interna no revelada
  // ...
}

// Pruebas de caja negra
console.log(calcular("suma", 2, 3));      // Resultado esperado: 5
console.log(calcular("resta", 5, 2));     // Resultado esperado: 3
console.log(calcular("multiplicacion", 4, 2)); // Resultado esperado: 8
```


## Qué es Jest

Jest es un framework de pruebas para JavaScript, especialmente diseñado para aplicaciones basadas en React. Fue desarrollado por Facebook y se utiliza ampliamente en la comunidad de desarrollo web. Jest facilita la creación, ejecución y mantenimiento de pruebas en proyectos JavaScript.

### Ejemplo de Pruebas Unitarias con Jest

1 - Supongamos que tienes una función que suma dos números en un archivo llamado sumar.js:

```js
// sumar.js
function sumar(a, b) {
  return a + b;
}

module.exports = sumar;
```

2 - Ahora, puedes escribir pruebas unitarias para esta función utilizando Jest. Pero primero, hay que instalar Jest en tu proyecto:

```
npm install --save-dev jest
```

3 - Luego, crea un archivo de prueba llamado sumar.test.js:

```js
// sumar.test.js
const sumar = require('./sumar');

test('sumar dos números', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('sumar números negativos', () => {
  expect(sumar(-1, 1)).toBe(0);
});

test('sumar números decimales', () => {
  expect(sumar(0.1, 0.2)).toBeCloseTo(0.3);
});
```

**En este ejemplo:**

- 1 - Importamos la función sumar que queremos probar.
- 2 - Utilizamos la función test de Jest para definir casos de prueba.
- 3 - Dentro de cada prueba, utilizamos la función expect para expresar nuestras expectativas sobre el resultado de la función sumar.
- 4 - Jest proporciona varios métodos como toBe para comparar resultados exactos y toBeCloseTo para comparar resultados que pueden tener pequeñas variaciones debido a cuestiones de precisión con números decimales.

### Para ejecutar las pruebas, puedes agregar el siguiente script en tu archivo package.json:

```
"scripts": {
  "test": "jest"
}
```

Después, ejecuta las pruebas con el comando:

```
npm run test
```
Con esto, Jest ejecutará las pruebas y te mostrará los resultados en la consola.