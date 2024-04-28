# Async/Await y Promesas

## 👉 Introducción a Sincronía y Asincronía en Programación

## Sincronía:
En la programación sincrónica, las operaciones se ejecutan en secuencia, una después de la otra. Cada operación debe completarse antes de que la siguiente pueda comenzar. 

Esto significa que si una operación lleva mucho tiempo, puede bloquear la ejecución de otras operaciones, haciendo que el programa parezca "congelado" o "lento" para el usuario.

### Ejemplo

```javascript
console.log("Inicio");

// Operación 1
console.log("Operación 1");

// Operación 2
console.log("Operación 2");

// Operación 3
console.log("Operación 3");

console.log("Fin");
```

## Asincronía:
En la programación asincrónica, las operaciones no se ejecutan en secuencia una después de la otra. 

En lugar de eso, las operaciones pueden comenzar y finalizar en momentos diferentes, y el programa puede continuar ejecutando otras operaciones en lugar de esperar a que una operación se complete antes de iniciar la siguiente. 

Esto es especialmente útil para tareas que llevan tiempo, como realizar solicitudes de red o leer archivos, donde no queremos bloquear la ejecución del programa mientras esperamos la respuesta.

### Ejemplo

```javascript
// Imprime un mensaje al inicio de la aplicación
console.log("Inicio de la aplicación");

// Simulación de una solicitud al servidor que tarda 2 segundos en responder
setTimeout(() => {
  // Esta función se ejecutará después de 2 segundos

  // Información del perfil del usuario obtenida del servidor
  const perfilUsuario = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Barcelona"
  };

  // Muestra un mensaje de bienvenida al usuario, utilizando la información del perfil
  console.log(`¡Bienvenido, ${perfilUsuario.nombre}!`);
}, 2000); // Espera 2 segundos antes de ejecutar la función

// Imprime un mensaje al final de la aplicación
console.log("Fin de la aplicación");
```

### 📖 Explicación:

En este ejemplo, utilizamos setTimeout() para simular la solicitud al servidor que tarda 2 segundos en responder. Mientras tanto, el programa continúa ejecutando el código que sigue después de setTimeout(), en este caso, el mensaje "Fin de la aplicación".

 Luego, cuando la respuesta del servidor llega después de 2 segundos, se ejecuta la función de retorno de ``setTimeout()``, que muestra el mensaje de bienvenida al usuario


# Async/Await y Promesas

## Promesas
Las promesas en JavaScript son objetos que representan la eventual completitud o falla de una operación asincrónica. Son ampliamente utilizadas para trabajar con código asincrónico de una manera más legible y manejable.

### Ejemplo

```javascript
// Función que simula una operación asincrónica que tarda un tiempo en completarse
function operacionAsincronica() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("¡Operación asincrónica completada!");
    }, 2000); // Simulamos un retardo de 2 segundos
  });
}

// Llamamos a la función que realiza la operación asincrónica utilizando Promesas
operacionAsincronica()
  .then(resultado => {
    // La operación asincrónica se completó con éxito, mostramos el resultado
    console.log(resultado);
    
    // Después de completar la operación asincrónica, se puede continuar con otras tareas
    console.log("¡Continuando con otras tareas después de la operación asincrónica!");
  })
  .catch(error => {
    // Si hubo un error en la operación asincrónica, lo manejamos aquí
    console.error("Error:", error);
  });
```

### 📖 Explicación:

En este ejemplo, operacionAsincronica() es una función que devuelve una Promesa que simula una operación asincrónica. 

Utilizamos el método then() para manejar el caso en que la Promesa se resuelve exitosamente y mostrar el resultado. 

Utilizamos catch() para manejar cualquier error que ocurra durante la operación asincrónica.


## Async/Await
Async/Await es una forma más moderna y legible de trabajar con código asincrónico, construida sobre promesas. 

Permite escribir código asincrónico como si fuera sincrónico, lo que hace que sea más fácil de entender y mantener. 

Con Async/Await, puedes esperar hasta que se resuelva una promesa antes de continuar con la ejecución del código.

```javascript
// Función que simula una operación asincrónica que tarda un tiempo en completarse
function operacionAsincronica() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("¡Operación asincrónica completada!");
    }, 2000); // Simulamos un retardo de 2 segundos
  });
}

// Función async que realiza la operación asincrónica utilizando Async/Await
async function realizarOperacion() {
  try {
    // Espera a que la operación asincrónica se complete y obtiene el resultado
    const resultado = await operacionAsincronica();
    console.log(resultado);
    
    // Después de completar la operación asincrónica, se puede continuar con otras tareas
    console.log("¡Continuando con otras tareas después de la operación asincrónica!");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamamos a la función que realiza la operación asincrónica
realizarOperacion();
```

### 📖 Explicación:
En este ejemplo, operacionAsincronica() es una función que devuelve una Promesa que simula una operación asincrónica. 

La función realizarOperacion() es async y utiliza await para esperar a que la operación asincrónica se complete antes de continuar con otras tareas. 

Esto hace que el código sea más fácil de entender y seguir, ya que parece que estamos escribiendo código síncrono.


## Diferencias y Ventajas
### Promesas:
- Representan una operación asincrónica y permiten encadenar acciones que se ejecutarán cuando la operación se complete.
- Proporcionan métodos then() y catch() para manejar el éxito y el fracaso respectivamente.
- Son útiles cuando necesitas trabajar con múltiples operaciones asincrónicas en secuencia.

## Async/Await:
- Proporciona una sintaxis más limpia y fácil de entender para trabajar con código asincrónico.
- Utiliza la palabra clave async para definir funciones asincrónicas y await para esperar que se resuelvan promesas dentro de esas funciones.
- Simplifica el manejo de errores usando bloques try...catch, haciéndolo más similar a la programación sincrónica.
- Es particularmente útil cuando necesitas realizar operaciones asincrónicas en paralelo o manejar errores de manera más clara.

## Por tanto...
Las **Promesas** son como un contrato que garantiza que una tarea asincrónica se completará en el futuro, mientras que **Async/Await** es una forma más fácil y clara de escribir código asincrónico utilizando la misma idea de promesas, pero con una sintaxis más parecida a la programación sincrónica