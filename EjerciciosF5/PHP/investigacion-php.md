### Ruta de Investigación / Conceptos básicos:

1.  **¿Qué es PHP y cuál es su función principal en el desarrollo web?**

    - PHP es un lenguaje de código abierto, orientado de lado del servidor, permitiendo cargar los elementos de una página antes de mostrarlos al usuario que accede a un sitio web. Es utilizado para crear aplicaciones web dinámicas.

2.  **¿Cuáles son las características clave de PHP que lo diferencian de otros lenguajes de programación?**

    - Integración con HTML
    - Compatibilidad con bases de datos
    - Comunidad activa de desarrolladores

3.  **¿Cuál es la sintaxis básica de PHP y cuáles son las convenciones de nomenclatura utilizadas?**

    - Su sintaxis básica comienza con unas etiquetas de inicio y final de script:

    ```php
    <?php

    ?>
    ```

    - Podemos usar `echo` para imprimir contenido en la pantalla del navegador:

    ```php
    <?php
        echo "Hola, mundo!"
    ?>
    ```

    - Comentarios:

    ```php
    <?php
     // Esto es un comentario de una sola línea
     /* Esto es un comentario multilínea*/
    ?>
    ```

4.  **¿Cuáles son los tipos de datos admitidos en PHP y cómo se manejan?**

    - PHP admite tipos de datos como enteros, decimales, cadenas, booleanos, arrays, etc..

    - **Ejemplos**:

    ```php
     // String y cadena de Strings
     $nombre = "Desiree";
     $mensaje = "Que tal estas";

     // Enteros (int)
     $numeroEntero = 5;

     // Floats (Decimales)
     $numeroFloat = 12.5;

     // Booleanos
     $esBoolean = true;

     // Arrays
     $colores = array("rojo", "verde", "azul");
    ```

5.  **¿Cuál es la diferencia entre una variable local y una variable global en PHP?**

    - Las variables locales se definen dentro de una función y tienen un alcance limitado a esa función. Las variables globales se declaran fuera de las funciones y pueden accederse desde cualquier parte del código.

6.  **¿Qué son los arrays en PHP y cómo se utilizan para almacenar y manipular datos?**

    - Los arrays en PHP permiten almacenar conjuntos de datos. Pueden ser indexados o asociativos.

      - **Los arrays indexados, utilizan indices númericos para poder acceder a sus elementos. El indice comienza desde 0 y se va incrementando.**

        - **Ejemplo de Array indexado:**

        ```php
        $cars = array("Volvo", "BMW", "Toyota");

        echo $cars[0]; // Salida: Volvo
        echo $cars[1]; // Salida: BMW
        echo $cars[2]; // Salida: Toyota
        ```

      - **Los Arrays asociativos, utilizan pares de clave-valor para asociar sus valores a elementos específicos**

        - **Ejemplo de Array Asociativo:**

        ```php
        $persona = array(
            "nombre" => "Juan";
            "edad" => 50;
            "casado" => false;

        );

        echo $persona["edad"]; // Salida: 50
        ```

    - A la hora de manipular datos, tenemos varias funciones:

      - `count()` Devuelve la cantidad de elementos de un array:

      ```php
      $cantidad = count($cars);
      ```

      - `array_push()` Agrega uno o más elementos al final de un array:

      ```php
      array_push($cars, "mercedes", "mini");
      ```

      - `array_pop()` Elimina el último elemento del array:

      ```php
      $lastCar = array_pop($cars)
      ```

7.  **¿Cómo declarar variables en PHP?**

    - A la hora de declarar variables en PHP, se utiliza el signo del dolar "$" seguido del nombre de la variable. Ya que es un lenguaje débilmente tipado, no es necesario declarar el tipo de la variable.

      **Ejemplo:**

      ```php
      $nombre_variable = valor;
      ```

8.  **¿Cómo declarar funciones en PHP?**

    - Las funciones se declaran de la siguiente manera:

      ```php
      function saludar($nombre){
          return "Hola! $nombre!"
      }
      echo saludar("Pepe"); // Salida: Hola! Pepe!
      ```

9.  **¿Cómo conectar PHP con HTML y mostrar un “Hola Mundo” en el browser a través del servidor de PHPmyAdmin?**

    - Podemos usar este ejemplo de estructura:

      ```php
      <?php
      $mensaje = "Hola Mundo";
      ?>

      <!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <title>Saludo PHP</title>
      </head>
      <body>
          <h1><?php echo $mensaje; ?></h1>
      </body>
      </html>
      ```

10. **¿Cómo uso la consola con PHP?**

    - Pueden ejecutarse scripts de PHP desde consola utilizando el comando `php`

      **Ejemplo:**

      ```hash
      php mi_script.php
      ```

11. **¿Cómo reutilizar funciones desde otros documentos de PHP?**

    - Para reutilizar funciones desde otros documentos PHP, se pueden incluir esos documentos usando include o require. Ejemplo:

      ```php
      // Archivo de funciones.php
      function sumar($a,$b){
          return $a + $b
      }
      ```

      ```php
      // En otro archivo
      include "archivo_funciones.php"
      echo sumar(3,5); // Salida: 8
      ```

12. **¿Qué son los modificadores de acceso?**

    - Los modificadores de acceso son palabras clave que se utilizan para controlar el acceso a las propiedades y métodos de una clase. Entre ellos tenemos public, private y protected.

13. **¿Qué es public?**

    - Es un modificador de acceso en el nivel mas permisivo. Es accesible desde cualquier lugar, dentro o fuera de la clase. Por ejemplo:

    ```php
        class Animal {
        public $nombre;
        }

        $miMascota = new Animal();
        $miMascota->nombre = "Pistacho"; // Acceso directo a la propiedad pública. Podemos cambiar su valor directamente haciendo uso de la propiedad.
    ```

14. **¿Qué es private?**

    - Es un modificador de acceso en el nivel más restrictivo. Sirve para indicar que esa variable solo se va a poder acceder desde el propio objeto, nunca desde fuera. Solo se puede acceder y modificar dentro de la propia clase. Por ejemplo:

    ```php
        class Animal {
        private $nombre;

        public function asignarNombre($nuevoNombre) {
            $this->nombre = $nuevoNombre;  //Cambiamos el valor al atributo privado
        }

        public function obtenerNombre() {
            return $this->nombre;  //Obtenemos el valor del atributo privado
        }
    }
    $miMascota = new Animal();
    $miMascota->asignarNombre("Pipo");  //Se interactua con la propiedad mediante un método público asignarNombre()
    $nombre = $miMascota->obtenerNombre();  //Se interactua con la propiedad mediante un método público obtenerNombre()
    ```

15. **¿Qué es protected?**

    - Es un modificador de acceso a nivel medio. Sirve para que el metodo o atributo sea público dentro del código de la propia clase y de cualquier clase que herede de aquella donde esté el metodo o la propiedad protected. Es privado y no accesible desde cualquier otra parte. Por ejemplo:

    ```php
        class Animal {
        private $nombre;

        public function asignarNombre($nuevoNombre) {
            $this->nombre = $nuevoNombre;  //Cambiamos el valor al atributo privado
        }

        public function obtenerNombre() {
            return $this->nombre;  //Obtenemos el valor del atributo privado
        }
    }
    $miMascota = new Animal();
    $miMascota->asignarNombre("Toby");  //Se interactua con la propiedad mediante un método público asignarNombre()
    $nombre = $miMascota->obtenerNombre();  //Se interactua con la propiedad mediante un método público obtenerNombre()
    ```
    **La diferencia con `protected` en lugar de `private` es que ``$nombre`` será accesible desde sus clases derivadas, o sea clases heredadas (hijas). Eso quiere decir que las clases hijas pueden acceder a esta propiedad protegida.**
