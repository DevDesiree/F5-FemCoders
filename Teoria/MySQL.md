# ¿Qué es MySQL?

MySQL es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto ampliamente utilizado. 

Fue lanzado por primera vez en 1995 y se ha convertido en una de las bases de datos más populares del mundo, especialmente en entornos web.

### ✅ Características Principales:
- **Relacional:** MySQL es una base de datos relacional, lo que significa que organiza los datos en tablas relacionadas entre sí.
- **Multiplataforma**: MySQL es compatible con una amplia gama de plataformas, incluyendo Linux, Windows y macOS.
- **Lenguaje SQ**L: Utiliza el lenguaje estándar de consultas SQL (Structured Query Language) para realizar operaciones de base de datos como consultas, inserciones, actualizaciones y eliminaciones.
- **Escalabilidad**: MySQL es escalable, lo que significa que puede manejar grandes volúmenes de datos y cargas de trabajo.
- **Rendimiento**: MySQL está optimizado para un rendimiento rápido y eficiente, lo que lo hace adecuado para aplicaciones web de alta demanda.
- **Seguridad**: Proporciona funciones de seguridad robustas, como autenticación de usuarios, control de acceso y cifrado de datos.


## Componentes:
- **Servidor MySQL**: El servidor MySQL es el motor de base de datos que gestiona el almacenamiento, la recuperación y la manipulación de los datos.
- **Cliente MySQL**: El cliente MySQL es una aplicación que se utiliza para interactuar con el servidor MySQL. Puede ser una interfaz de línea de comandos (CLI) o una interfaz gráfica de usuario (GUI).
- **Base de Datos y Tablas**: Una base de datos es un contenedor que almacena tablas relacionadas. Cada tabla contiene filas y columnas que representan los datos.

## 🔒 Acceso

Para acceder a MySQL y comenzar a trabajar con la base de datos, necesitarás un cliente MySQL, que puede ser una aplicación de línea de comandos (CLI) o una interfaz gráfica de usuario (GUI). 

**Aquí tienes algunas opciones:**

### Cliente MySQL de Línea de Comandos (CLI)
El cliente MySQL de línea de comandos es una herramienta de línea de comandos que te permite interactuar directamente con el servidor MySQL. 

Puedes ejecutar consultas SQL, administrar bases de datos y usuarios, y realizar otras operaciones de administración.

Para acceder al cliente MySQL de línea de comandos, abre una terminal y ejecuta el siguiente comando, reemplazando "usuario" y "contraseña" con las credenciales adecuadas:

```bash
mysql -u usuario -p
```
***Esto te pedirá la contraseña del usuario especificado y luego te llevará al prompt de MySQL, donde puedes comenzar a ejecutar consultas y comandos.***

### Interfaz Gráfica de Usuario (GUI)

También puedes utilizar una interfaz gráfica de usuario (GUI) para acceder a MySQL. Hay varias opciones disponibles, algunas de las cuales son:

- **phpMyAdmin**: Una herramienta web gratuita y de código abierto que proporciona una interfaz gráfica para administrar bases de datos MySQL.
- **MySQL Workbench**: Una herramienta oficial de MySQL que ofrece funcionalidades avanzadas para el diseño de bases de datos, la administración y la visualización de datos.
- **Navicat for MySQL**: Un cliente de base de datos comercial con una interfaz intuitiva y potente para MySQL y otras bases de datos.

> [!NOTE]  
> Para utilizar una interfaz gráfica de usuario, primero necesitarás instalar la herramienta en tu sistema y luego configurar la conexión a tu servidor MySQL proporcionando la dirección IP, el nombre de usuario y la contraseña.


## 🔑 Clave Primaria
Una clave primaria es un campo o conjunto de campos en una tabla de base de datos que identifica de forma única cada fila en esa tabla. 

- Cada tabla debe tener una clave primaria para garantizar la integridad de los datos y facilitar la búsqueda y manipulación de los registros.

- Una clave primaria debe ser única para cada fila en la tabla.
- No puede contener valores nulos (NULL).
- Puede consistir en uno o más campos.

***La clave primaria se define al crear la tabla utilizando la sintaxis PRIMARY KEY.***

**Ejemplo**

```sql
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    salario DECIMAL(10, 2)
);
```
En este **ejemplo**, ``id`` se define como la clave primaria de la tabla ``empleados``. 

La opción ``AUTO_INCREMENT`` asegura que cada nuevo registro tenga un valor único e incremental para el campo ``id``.


## 🗝 Clave Foránea
Una clave foránea es un campo en una tabla que establece una relación entre dos tablas. 

- Representa el enlace entre una columna en una tabla (la tabla secundaria o hija) y la columna primaria correspondiente en otra tabla (la tabla principal o padre).

- La clave foránea en la tabla secundaria hace referencia a la clave primaria en la tabla principal.
- Se utiliza para establecer y mantener la integridad referencial entre las tablas.
- Puede permitir operaciones de JOIN para recuperar datos relacionados de múltiples tablas.

**Ejemplo**

```sql
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    fecha_pedido DATE,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);
```

En este **ejemplo**, ``id_cliente`` se define como una clave foránea en la tabla ``pedidos``, que hace referencia a la columna ``id`` en la tabla ``clientes``. 

Esto establece una relación entre las tablas ``pedidos`` y ``clientes``, donde cada pedido está asociado con un cliente específico mediante su identificador único.


## Conexión a la Base de Datos (Usando PHP)

Para conectarte a una base de datos MySQL desde PHP, puedes usar la extensión MySQLi (Improved MySQL) o PDO (PHP Data Objects). Aquí tienes un ejemplo utilizando MySQLi:

```php
$servername = "localhost";
$username = "usuario";
$password = "contraseña";
$database = "nombre_basedatos";

// Crea conexión
$conexion = new mysqli($servername, $username, $password, $database);

// Comprueba conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
echo "Conexión exitosa";
```

## Consulta de Datos

```php
$sql = "SELECT id, nombre, email FROM usuarios";
$resultado = $conexion->query($sql);

// Verifica si hay resultados
if ($resultado->num_rows > 0) {
    // Itera sobre cada fila de resultados
    while ($fila = $resultado->fetch_assoc()) {
        // Imprime los datos de cada fila
        echo "ID: " . $fila["id"] . " - Nombre: " . $fila["nombre"] . " - Email: " . $fila["email"] . "<br>";
    }
} else {
    // Imprime un mensaje si no hay resultados
    echo "0 resultados";
}
```

**Este bloque de código ejecuta una consulta SQL para seleccionar los campos id, nombre y email de la tabla usuarios.**

**Luego, itera sobre los resultados y muestra cada fila con el formato "ID: nombre - Nombre: email". Si no hay resultados, imprime "0 resultados".**

## Inserción de Datos

```php
$sql = "INSERT INTO usuarios (nombre, email) VALUES ('Juan', 'juan@example.com')";

// Ejecuta la consulta de inserción
if ($conexion->query($sql) === TRUE) {
    // Imprime un mensaje si la inserción fue exitosa
    echo "Nuevo registro creado correctamente";
} else {
    // Imprime un mensaje de error si la inserción falló
    echo "Error: " . $sql . "<br>" . $conexion->error;
}
```

**Este bloque de código ejecuta una consulta SQL para insertar un nuevo registro en la tabla usuarios con el nombre "Juan" y el correo electrónico "juan@example.com".** 

**Luego, verifica si la consulta se ejecutó correctamente y muestra un mensaje correspondiente.**


## Actualización de Datos

```php
$sql = "UPDATE usuarios SET email='nuevoemail@example.com' WHERE nombre='Juan'";

// Ejecuta la consulta de actualización
if ($conexion->query($sql) === TRUE) {
    // Imprime un mensaje si la actualización fue exitosa
    echo "Registro actualizado correctamente";
} else {
    // Imprime un mensaje de error si la actualización falló
    echo "Error: " . $sql . "<br>" . $conexion->error;
}
```

**Este bloque de código ejecuta una consulta SQL para actualizar el correo electrónico de los usuarios con el nombre "Juan" a "nuevoemail@example.com".**

**Luego, verifica si la consulta se ejecutó correctamente y muestra un mensaje correspondiente.**

## Eliminación de Datos

```php
$sql = "INSERT INTO usuarios (nombre, email) VALUES ('Juan', 'juan@example.com')";

// Ejecuta la consulta de inserción
if ($conexion->query($sql) === TRUE) {
    // Imprime un mensaje si la inserción fue exitosa
    echo "Nuevo registro creado correctamente";
} else {
    // Imprime un mensaje de error si la inserción falló
    echo "Error: " . $sql . "<br>" . $conexion->error;
}
```
**Este bloque de código ejecuta una consulta SQL para eliminar los usuarios con el nombre "Juan" de la tabla usuarios.**

**Luego, verifica si la consulta se ejecutó correctamente y muestra un mensaje correspondiente.**


---
---

[🏠 Volver al Home](../README.md)