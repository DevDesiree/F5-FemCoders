# PHP (Hypertext Preprocessor)

PHP es un lenguaje de programación de código abierto especialmente diseñado para el desarrollo de aplicaciones web dinámicas y sitios web.

Originalmente, PHP significaba "Personal Home Page" (Página Personal), pero ahora se interpreta como "Hypertext Preprocessor" (Hypertexto Preprocesado).

## 📕 Características de PHP

- Lenguaje de scripting del lado del servidor: PHP se ejecuta en el servidor, generando contenido dinámico que se envía al navegador del cliente.
- Sintaxis similar a C: PHP tiene una sintaxis similar a otros lenguajes de programación como C, Java y Perl, lo que facilita la transición para los desarrolladores que ya están familiarizados con estos lenguajes.
- Integración con HTML: PHP se puede integrar fácilmente con HTML, lo que permite a los desarrolladores incrustar código PHP directamente en las páginas web para generar contenido dinámico.
- Amplia disponibilidad: PHP es compatible con una amplia variedad de servidores web y sistemas operativos, incluyendo Apache, Nginx e IIS, y se ejecuta en plataformas como Windows, Linux y macOS

## 🛠 Instalación de PHP en un Servidor Web

1.  **Preparativos del Servidor**:
    Asegúrate de tener acceso al servidor web donde deseas instalar PHP. - Si estás utilizando un servidor local, como XAMPP, asegúrate de tenerlo instalado y funcionando correctamente.

2.  **Descarga de PHP**:
    Visita el sitio web oficial de PHP en php.net y descarga la última versión estable de PHP compatible con tu sistema operativo. - Si estás utilizando un sistema basado en Unix (Linux, macOS), también puedes instalar PHP a través del administrador de paquetes de tu distribución.

3.  **Instalación de PHP en Windows**:
    Para instalar PHP en Windows, puedes utilizar un paquete como XAMPP o WampServer, que incluyen PHP, Apache y MySQL en un solo instalador. - Sigue las instrucciones proporcionadas por el paquete de instalación para completar la instalación de PHP.

4.  **Encuentra la Carpeta htdocs**:
    Después de instalar XAMPP, busca la carpeta htdocs. Por lo general, esta carpeta se encuentra dentro del directorio donde instalaste XAMPP. - En sistemas Windows, la ruta predeterminada podría ser C:\xampp\htdocs, mientras que en sistemas macOS o Linux, la ruta podría ser /Applications/XAMPP/htdocs o /opt/lampp/htdocs.
5.  **Coloca tu Proyecto en htdocs**:
    Copia los archivos de tu proyecto (incluidos los archivos PHP, HTML, CSS, JavaScript, etc.) y pégalo dentro de la carpeta htdocs. - Puedes crear una carpeta específica para tu proyecto dentro de htdocs si lo deseas.

6.  **Accede a tu Proyecto desde el Navegador**:
    Después de colocar tus archivos en la carpeta htdocs, puedes acceder a tu proyecto desde el navegador web. - Abre tu navegador y visita la dirección http://localhost/tu-proyecto (reemplaza tu-proyecto con el nombre de la carpeta de tu proyecto dentro de htdocs). Esto cargará tu proyecto y podrás interactuar con él como lo harías con cualquier otro sitio web.

## ❓ Definición de Variables en PHP

Las variables en PHP se definen con el símbolo $ seguido del nombre de la variable. Los nombres de las variables en PHP son sensibles a mayúsculas y minúsculas.

**Ejemplo:**

```php
<?php
$nombre = "Juan";
$edad = 25;
$precio_producto = 10.50;
$mensaje = "Hola Mundo";
?>
```

## Tipos de Datos en PHP

PHP es un lenguaje de tipado débil, lo que significa que no es necesario declarar explícitamente el tipo de dato de una variable.

PHP determina automáticamente el tipo de dato en función del valor asignado a la variable. Los tipos de datos en PHP incluyen:

- `string`: Cadenas de texto.
- `int`: Números enteros.
- `float`: Números de punto flotante (decimales).
- `bool`: Valores booleanos (true o false).
- `array`: Arreglos.
- `object`: Objetos.
- `null`: Valor nulo.
- `resource`: Recursos externos (por ejemplo, conexiones a bases de datos).

**Ejemplo:**

```php
<?php
$nombre = "Juan";       // string
$edad = 25;             // int
$precio_producto = 10.50; // float
$activo = true;         // bool
$colores = array("rojo", "verde", "azul"); // array
$usuario = new Usuario(); // object
$archivo = null;        // null
?>
```

## Definición de Arrays en PHP

Los arrays en PHP pueden ser de dos tipos principales: arrays indexados y arrays asociativos.

### Arrays Indexados

Los arrays indexados utilizan índices numéricos para acceder a los elementos del array. El primer elemento tiene un índice de 0, el segundo un índice de 1, y así sucesivamente.

**Ejemplo:**

```php
<?php
// Array indexado
$colores = ["rojo", "verde", "azul"];
?>
```

## Arrays Asociativos

Los arrays asociativos utilizan claves personalizadas en lugar de índices numéricos. Cada elemento del array está asociado con una clave y un valor.

**Ejemplo:**

```php
<?php
// Array asociativo
$edades = ["Juan" => 25, "María" => 30, "Pedro" => 28];
?>
```

## Arrays Multidimensionales

Los arrays multidimensionales son arrays que contienen otros arrays como elementos de sus elementos.

Es decir, cada elemento de un array multidimensional puede ser otro array, lo que crea una estructura de datos bidimensional, tridimensional o de dimensiones superiores.

Ejemplo:

```php
<?php
// Array multidimensional representando una tabla de multiplicar
$tabla_multiplicar = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
?>
```

### Acceso a Elementos de un Array Multidimensional

Para acceder a los elementos de un array multidimensional, se utilizan múltiples índices o claves.

**Por ejemplo**, para acceder al número 5 en la tabla de multiplicar, se usaría la sintaxis $tabla_multiplicar[1][1] porque el número 5 está en la segunda fila y segunda columna (teniendo en cuenta que los índices comienzan desde 0).

```php
<?php
echo $tabla_multiplicar[1][1]; // Salida: 5
?>
```

## Bucles

Los bucles en PHP te permiten ejecutar un bloque de código repetidamente, mientras se cumpla una condición específica. Aquí tienes ejemplos de los bucles más comunes en PHP:

### Bucle While

El bucle while ejecuta un bloque de código mientras una condición especificada sea verdadera.

**Ejemplo:**

```php
<?php
$contador = 1;
while ($contador <= 5) {
    echo "El contador es: " . $contador . "<br>";
    $contador++;
}
?>
```

### Bucle Do-While

El bucle do-while es similar al bucle while, pero primero ejecuta el bloque de código y luego verifica la condición.

**Ejemplo:**

```php
<?php
$contador = 1;
do {
    echo "El contador es: " . $contador . "<br>";
    $contador++;
} while ($contador <= 5);
?>
```

### Bucle For

El bucle for ejecuta un bloque de código un número específico de veces.

**Ejemplo:**

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo "El contador es: " . $i . "<br>";
}
?>
```

### Bucle Foreach

El bucle foreach se utiliza para recorrer arrays o colecciones de datos.

**Ejemplo:**

```php
<?php
$colores = ["rojo", "verde", "azul"];
foreach ($colores as $color) {
    echo "El color es: " . $color . "<br>";
}
?>
```

### Bucle Break y Continue
La declaración break se utiliza para salir del bucle actual.
La declaración continue se utiliza para pasar a la siguiente iteración del bucle actual.

**Ejemplo:**

```php
<?php
for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) {
        break; // Sale del bucle cuando $i es igual a 5
    }
    if ($i % 2 == 0) {
        continue; // Salta a la siguiente iteración si $i es par
    }
    echo $i . "<br>";
}
?>
```

## Condicionales

Los condicionales en PHP te permiten ejecutar diferentes bloques de código basados en condiciones específicas. Aquí tienes ejemplos de los condicionales más comunes en PHP:

### Declaración If
La declaración if se utiliza para ejecutar un bloque de código si una condición especificada es verdadera.

**Ejemplo:**

```php
<?php
$edad = 18;
if ($edad >= 18) {
    echo "Eres mayor de edad.";
}
?>
```

### Declaración If-Else
La declaración if-else se utiliza para ejecutar un bloque de código si la condición especificada es verdadera y otro bloque de código si la condición es falsa.

**Ejemplo:**

```php
<?php
$edad = 16;
if ($edad >= 18) {
    echo "Eres mayor de edad.";
} else {
    echo "Eres menor de edad.";
}
?>
```
### Declaración If-Elseif-Else
La declaración if-elseif-else se utiliza para ejecutar diferentes bloques de código según múltiples condiciones.

**Ejemplo:**

```php
<?php
$nota = 75;
if ($nota >= 90) {
    echo "Excelente.";
} elseif ($nota >= 70) {
    echo "Buen trabajo.";
} else {
    echo "Necesitas mejorar.";
}
?>
```

### Operador Ternario
El operador ternario ? : es una forma abreviada de escribir una declaración if-else.

```php
<?php
$edad = 20;
$mensaje = ($edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad.";
echo $mensaje;
?>
```
### Declaración Switch
La declaración switch se utiliza para ejecutar diferentes bloques de código según el valor de una expresión

**Ejemplo:**

```php
<?php
$día = "Lunes";
switch ($día) {
    case "Lunes":
        echo "Hoy es lunes.";
        break;
    case "Martes":
        echo "Hoy es martes.";
        break;
    default:
        echo "Hoy no es ni lunes ni martes.";
}
?>
```

## Clases y Objetos
En PHP, puedes definir clases para representar entidades o conceptos en tu aplicación. Una clase es un plano para crear objetos, que son instancias de esa clase. 

Las clases pueden contener propiedades (variables) y métodos (funciones).

**Ejemplo:**

```php
<?php
class Coche {
    // Propiedades
    public $marca;
    public $modelo;
    
    // Método constructor
    public function __construct($marca, $modelo) {
        $this->marca = $marca;
        $this->modelo = $modelo;
    }
    
    // Método
    public function mostrarInformacion() {
        return "Coche: " . $this->marca . " " . $this->modelo;
    }
}

// Crear un objeto de la clase Coche
$miCoche = new Coche("Toyota", "Corolla");

// Accede a propiedades y métodos
echo $miCoche->mostrarInformacion(); // Salida: Coche: Toyota Corolla
?>
```

## Funciones
Las funciones en PHP te permiten encapsular un bloque de código que puedes reutilizar en diferentes partes de tu aplicación. 

Puedes definir funciones con o sin parámetros y con o sin valor de retorno.

**Ejemplo:**

```php
<?php
// Define una función
function suma($a, $b) {
    return $a + $b;
}

// Llama a la función
$resultado = suma(5, 3);
echo "El resultado de la suma es: " . $resultado; // Salida: El resultado de la suma es: 8
?>
```

## 📇 Inclusión de Archivos
En PHP, puedes incluir otros archivos PHP en tus scripts utilizando las funciones include o require. 

Esto te permite reutilizar código y mantener tu aplicación organizada.

### Ejemplo 1: include
La función include incluye y evalúa el archivo especificado durante el tiempo de ejecución del script. 

Si el archivo no se encuentra, PHP emite una advertencia, pero continúa ejecutando el script.

```php
<?php
// Ejemplo de include
include "archivo.php";
?>
```

### Ejemplo 2: require
La función require es similar a include, pero si el archivo no se encuentra, PHP emite un error fatal y detiene la ejecución del script.

```php
<?php
// Ejemplo de require
require "archivo.php";
?>
```

### Ejemplo 3: include_once y require_once
Estas funciones se utilizan para incluir un archivo solo una vez en un script, incluso si se llama a la función múltiples veces.

```php
<?php
// Ejemplo de include_once
include_once "archivo.php";

// Ejemplo de require_once
require_once "archivo.php";
?>
```

### 💡 Consideraciones
- **include vs. require**: Usa include si el archivo es opcional para el funcionamiento del script y require si es necesario. Por ejemplo, si el archivo contiene una función que puede no ser esencial, puedes usar include. Si el archivo contiene una biblioteca fundamental para el funcionamiento del script, usa require.

- **include_once vs. require_once**: Si el archivo puede ser incluido en varias partes del script pero solo necesitas una instancia de él, usa include_once o require_once. Esto evita problemas de redefinición de funciones o variables.

- **Rendimiento**: require es ligeramente más rápido que include porque emite un error fatal en lugar de una advertencia si el archivo no se encuentra. Sin embargo, la diferencia de rendimiento es mínima y generalmente no significativa a menos que estés incluyendo una gran cantidad de archivos en un script.

- **Seguridad**: Siempre debes validar y sanear cualquier entrada de usuario antes de incluir archivos en tu script. Esto evita ataques de inclusión de archivos no deseados.

## 📚 Trabajo con Archivos
PHP te proporciona funciones para trabajar con archivos en el sistema de archivos del servidor, como leer, escribir, copiar, eliminar, etc.

### 👁‍🗨Lectura de Archivos
#### Leer todo el contenido de un archivo y mostrarlo:

**Ejemplo:**

```php
$contenido = file_get_contents("archivo.txt");
echo $contenido;
```
#### Leer un archivo línea por línea y mostrarlo:

**Ejemplo:**

```php
$archivo = fopen("archivo.txt", "r");
if ($archivo) {
    while (($linea = fgets($archivo)) !== false) {
        echo $linea;
    }
    fclose($archivo);
}
```

### 🖊 Escritura de Archivos

#### Escribir en un archivo y agregar contenido al final:

**Ejemplo:**

```php
$archivo = fopen("archivo.txt", "a");
fwrite($archivo, "Nuevo contenido\n");
fclose($archivo);
```

#### Sobrescribir un archivo con nuevo contenido:

**Ejemplo:**

```php
$archivo = fopen("archivo.txt", "w");
fwrite($archivo, "Nuevo contenido");
fclose($archivo);
```

### 📓 Copia de Archivos

#### Copiar un archivo a otro lugar:

**Ejemplo:**

```php
if (copy("origen.txt", "destino.txt")) {
    echo "El archivo se ha copiado correctamente.";
} else {
    echo "Ha ocurrido un error al copiar el archivo.";
}
```
### 🗑 Eliminación de Archivos

#### Eliminar un archivo:

**Ejemplo:**

```php
if (unlink("archivo.txt")) {
    echo "El archivo se ha eliminado correctamente.";
} else {
    echo "Ha ocurrido un error al eliminar el archivo.";
}
```

## 📧 Envío de Correo Electrónico
Puedes enviar correos electrónicos desde tu aplicación PHP utilizando la función mail() de PHP o bibliotecas externas como PHPMailer.

**Ejemplo:**

```php
$destinatario = "destinatario@example.com";
$asunto = "Prueba de correo electrónico";
$mensaje = "Hola, esto es una prueba de correo electrónico.";

// Enviar correo electrónico
mail($destinatario, $asunto, $mensaje);
```

---
---

[🏠 Volver al Home](../README.md)