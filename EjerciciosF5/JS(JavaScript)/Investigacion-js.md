
### CONCEPTOS BÁSICOS:

1. **¿Qué es la programación y cuál es su propósito?**
   - La programación es el proceso de crear conjuntos de instrucciones de tareas específicas. Su propósito es automatizar y resolver problemas.

2. **¿Define algoritmo y da un ejemplo?**
   - Un algoritmo es un conjunto de pasos ordenados para realizar una tarea. Ejemplo: receta de cocina para hacer una tarta.

3. **¿Qué es una variable y cómo se utiliza en programación?**
   - Una variable es un espacio de almacenamiento con un nombre simbólico que contiene un valor. Se utiliza para almacenar información que puede cambiar durante la ejecución del programa. En JavaScript, las variables se pueden declarar con `var`, `let`, o `const`. 
      - `var` era la forma tradicional de declarar variables.
      - `let` se introdujo en ES6 y tiene ámbito de bloque, evitando algunos problemas de `var`.
      - `const` se usa para declarar constantes y tiene ámbito de bloque. Una vez asignado, su valor no puede cambiar.

4. **¿Explica la diferencia entre JavaScript, HTML y CSS?**
   - JavaScript se usa para la interactividad en la web, HTML estructura el contenido y CSS estiliza la presentación.

### CONCEPTOS ESPECÍFICOS:

5. **¿Define variables en JavaScript y menciona los tipos de datos básicos?**
   - En JavaScript, las variables se declaran con `var`(Se usaba antes), `let` o `const`. Tipos de datos básicos incluyen números, cadenas, booleanos, objetos y arreglos.

6. **¿Qué es una función en JavaScript y cómo se declara?**
   - Una función en JavaScript es un conjunto de instrucciones reutilizables. Se declara con la palabra clave `function`. Ejemplo: `function sumar(a, b) { return a + b; }`.

7. **¿Explica el concepto de "scope" en JavaScript?**
   - El "scope" en JavaScript se refiere a la visibilidad y accesibilidad de variables. Puede ser global o local dentro de una función.

8. **¿Explica qué es el asincronismo?**
   - El asincronismo permite realizar tareas sin bloquear la ejecución del programa, utilizando conceptos como callbacks, promesas o async/await.

### ESTRUCTURAS DE CONTROL:

9. **¿Qué son las estructuras de control en programación?**
   - Las estructuras de control son bloques de código que permiten tomar decisiones o repetir tareas. Ejemplos incluyen `if`, `else`, y bucles como `for`.

10. **¿Describe la diferencia entre if, else if y else?**
    - `if` se utiliza para tomar decisiones simples, `else if` para múltiples condiciones y `else` para acciones predeterminadas ( default) si ninguna condición es verdadera.

11. **¿Explica el bucle for y proporciona un ejemplo?**
    - El bucle `for` se utiliza para repetir un bloque de código un número específico de veces. Ejemplo: ```javascript for (let i = 0; i < 5; i++) { console.log(i); }```.

### MANIPULACIÓN DEL DOM:

12. **¿Qué es el DOM y cómo se relaciona con HTML?**
    - El DOM (Document Object Model) es una representación estructurada del documento HTML, permitiendo la manipulación dinámica de su contenido mediante JavaScript.

13. **¿Por qué el DOM es importante en el desarrollo web?**
    - El DOM permite actualizar y modificar la interfaz de usuario de una página web de forma dinámica, brindando una experiencia interactiva al usuario.

14. **¿Cómo se seleccionan elementos en el DOM con JavaScript?**
    - Seleccionamos elementos usando métodos como `getElementById`, `getElementsByClassName`, `querySelector`, etc.

15. **¿Explica cómo se añaden y eliminan elementos del DOM?**
    - Para añadir elementos, se utiliza `createElement` y `appendChild`. Para eliminar, `removeChild` o `parentNode.removeChild`.

### EVENTOS:

16. **¿Qué son los eventos en el contexto de desarrollo web?**
    - Los eventos son acciones del usuario o del navegador que pueden ser detectadas y manejadas en JavaScript, como hacer clic o cargar una página.

17. **¿Proporciona ejemplos de eventos comunes?**
    - Ejemplos de eventos incluyen `click`, `submit`, `mouseover`, y `keydown`.

### FETCH - AJAX:

18. **¿Define AJAX y explica su importancia en el desarrollo web?**
    - AJAX (Asynchronous JavaScript and XML) es una técnica que permite actualizar partes de una página web sin recargarla por completo, mejorando la experiencia del usuario.

19. **¿Qué es la Fetch API y para qué se utiliza?**
    - La Fetch API es una interfaz de JavaScript para realizar peticiones HTTP. Se utiliza para obtener y enviar datos de forma asíncrona.

### FRAMEWORKS Y LIBRERÍAS:

20. **¿Menciona algunos frameworks y bibliotecas populares de JavaScript y sus usos?**
    - Algunos ejemplos son React (para construir interfaces de usuario)
    - Angular (para desarrollo web).
    - Next.js (Facilita la creacion de paginas web con React.)