## Laravel

Laravel es un popular **framework** de desarrollo web basado en PHP que sigue el patrón de diseño MVC (Modelo-Vista-Controlador).

Ofrece una sintaxis elegante y expresiva que tiene como objetivo hacer que el desarrollo web sea más rápido y agradable, con características como una poderosa capa de ORM, enrutamiento simplificado, sistema de autenticación integrado y una gran cantidad de extensiones y paquetes adicionales.

## ✅ Características Principales

- **Elegante Sintaxis**: Laravel utiliza una sintaxis limpia y expresiva que permite a los desarrolladores escribir código más legible y mantenible.
- **ORM Eloquent**: Eloquent es el ORM integrado de Laravel que simplifica la interacción con la base de datos mediante el uso de modelos y relaciones entre ellos.
- **Enrutamiento Simple**: Laravel ofrece un sistema de enrutamiento simple y expresivo que permite definir fácilmente las rutas de la aplicación.
- **Sistema de Plantillas Blade**: Blade es el motor de plantillas integrado de Laravel que facilita la creación de vistas dinámicas y reutilizables.
- **Autenticación Integrada**: Laravel proporciona un sistema de autenticación completo y fácil de usar que permite gestionar la autenticación de usuarios de forma rápida y segura.
- **Migraciones de Bases de Datos**: Laravel incluye un sistema de migraciones de bases de datos que permite gestionar la estructura de la base de datos de forma programática y mantenerla sincronizada con el código.
- **Pruebas Automatizadas**: Laravel ofrece un sólido conjunto de herramientas para escribir pruebas automatizadas que garantizan la calidad y estabilidad del código.
- **Extensibilidad**: Laravel es altamente extensible y permite integrar fácilmente bibliotecas de terceros y paquetes adicionales a través de Composer.

## Instalación

Para instalar Laravel, asegúrate de tener PHP instalado en tu sistema y sigue estos pasos:

1. Instala **Composer**, el administrador de paquetes de PHP, si aún no lo tienes instalado.

2. Abre una terminal y ejecuta el siguiente comando para instalar Laravel a través de **Composer**:

   ```bash
   composer create-project laravel/laravel example-app
   ```

3. Una vez completada la instalación, accede al directorio de tu proyecto y ejecuta el servidor de desarrollo de Laravel con el siguiente comando:

   ```bash
   php artisan serve
   ```

4. Abre tu navegador y visita http://localhost:8000 para ver tu aplicación Laravel en funcionamiento.

## Componentes principales de Laravel

### Migraciones

Las **migraciones** en Laravel son una forma de definir y modificar la estructura de la base de datos de forma programática, utilizando código PHP en lugar de SQL directamente.

Esto permite a los desarrolladores mantener un registro de los cambios en la estructura de la base de datos a lo largo del tiempo y compartir esos cambios con otros miembros del equipo de desarrollo.

### ⭕ Pasos:

#### Crear una migración para crear una tabla de usuarios:

```bash
  php artisan make:migration create_users_table
```

#### Editar la migración recién creada en el archivo correspondiente en el directorio `database/migrations` para definir la estructura de la tabla de usuarios, por ejemplo:

```php
  public function up()
{
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email')->unique();
        $table->timestamp('email_verified_at')->nullable();
        $table->string('password');
        $table->rememberToken();
        $table->timestamps();
    });
}
```

#### Ejecutar la migración para aplicar los cambios a la base de datos:

```php
php artisan migrate
```

## Controladores

Los **controladores** en Laravel son clases PHP que gestionan la lógica de la aplicación y responden a las solicitudes HTTP entrantes.

Los **controladores** se utilizan para agrupar la lógica relacionada con un determinado conjunto de rutas y acciones de la aplicación, lo que hace que el código sea más organizado y mantenible.

### ⭕ Pasos:

#### Crear un controlador para gestionar los usuarios:

```php
php artisan make:controller UserController
```

#### Editar el controlador recién creado en el archivo correspondiente en el directorio `app/Http/Controller`s para definir las acciones relacionadas con los usuarios, por ejemplo:

```php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json(['users' => $users]);
    }

    public function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        return response()->json(['user' => $user]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json(['user' => $user], 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $user->id,
        ]);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json(['user' => $user]);
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'Usuario eliminado correctamente']);
    }
}
```

Este controlador utiliza el método `response()->json() `para devolver respuestas JSON en lugar de vistas HTML.

Cada método del controlador maneja una acción específica, como listar usuarios, mostrar un usuario, crear un nuevo usuario, actualizar un usuario existente y eliminar un usuario.

Además, se incluyen validaciones de solicitudes para garantizar la integridad de los datos y se devuelven códigos de estado HTTP apropiados junto con las respuestas JSON

## Rutas

### ⭕ Pasos:

#### Definir rutas en el archivo de rutas ``routes/web.php`` para asociar URL a acciones específicas del controlador:

```php
use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
```

## Laravel Sanctum

**Laravel Sanctum** es un paquete oficial de Laravel que proporciona una forma simple y fácil de autenticar APIs basadas en tokens. Es especialmente útil para crear aplicaciones de una sola página (SPA), aplicaciones móviles y cualquier otra aplicación que requiera autenticación de API.

**Sanctum** utiliza tokens CSRF (Cross-Site Request Forgery) para proteger las aplicaciones contra ataques CSRF y proporciona dos sistemas de autenticación principales:

- **Autenticación** basada en tokens de API (API Token Authentication): Los usuarios pueden autenticarse mediante tokens de acceso generados por la aplicación. 
    - Estos tokens se pasan con cada solicitud HTTP y se utilizan para identificar y autenticar al usuario.
- **Autenticación** de sesión (Session Authentication): Los usuarios pueden autenticarse utilizando las sesiones de Laravel tradicionales. 
    - Esto es útil cuando estás construyendo una aplicación web que también consume tu API, ya que puedes utilizar la autenticación de sesión para proteger las rutas web y la autenticación de tokens de API para proteger las rutas de la API.
- Además de la autenticación, **Sanctum** proporciona funcionalidades para generar, revocar y verificar tokens de acceso, así como para proteger rutas específicas de la API mediante middleware.

#### Para proteger rutas con autenticación basada en tokens de Sanctum en los archivos de rutas correspondientes:

```php
use App\Http\Controllers\UserController;

Route::middleware('auth:sanctum')->get('/users', [UserController::class, 'index']);
```

## Modelos

Los **modelos** en Laravel son clases PHP que representan y gestionan los datos almacenados en la base de datos. 

Los **modelos** se utilizan para interactuar con la base de datos utilizando Eloquent ORM, lo que simplifica las operaciones de lectura, escritura y actualización de datos en la base de datos.

### ⭕ Pasos:

#### Crear un modelo para la tabla de usuarios:

```php
php artisan make:model User
```

#### Aquí se muestra un ejemplo del modelo Users con su relacion correspondiente:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    public function roles()
    {
        return $this->hasMany(Role::class);
    }
}
```

En los **modelos** de Laravel, el atributo ``$fillable`` se utiliza para especificar qué campos pueden ser asignados en masa (mass assignable). Esto es útil cuando estás creando o actualizando registros en la base de datos utilizando el método ``create()`` o ``update()`` de Eloquent.

Por defecto, Eloquent protege contra la asignación en masa asignando valores solo a los campos que están en el array ``$fillable``. Si intentas asignar un campo que no está en ``$fillable``, Eloquent lo ignorará.

En cuanto a las **relaciones**, Eloquent permite definir **relaciones** entre diferentes modelos para representar las **relaciones** de la base de datos en la capa de aplicación. Por ejemplo, un usuario puede tener muchos roles, o un artículo puede pertenecer a una categoría.

En este **ejemplo**, estamos definiendo una relación ``roles()`` en el modelo User que indica que un usuario puede tener muchos roles. La relación ``hasMany()`` se utiliza para definir relaciones uno a muchos en Eloquent.

Laravel proporciona varios métodos de relación, como ``hasMany()``, ``belongsTo()``, ``hasOne()``, ``belongsToMany()``, etc., que puedes utilizar según las necesidades de tu aplicación y la estructura de tu base de datos. 

## Eloquent ORM
**Eloquent** es el ORM (Object-Relational Mapping) integrado de Laravel que proporciona una forma elegante y expresiva de interactuar con la base de datos utilizando objetos PHP en lugar de consultas SQL directamente. 

**Eloquent** simplifica la interacción con la base de datos al mapear objetos PHP a filas de la base de datos y viceversa, lo que permite realizar operaciones CRUD de manera intuitiva y eficiente.

### Aquí hay algunos ejemplos básicos de cómo utilizar Eloquent ORM en Laravel para interactuar con la base de datos:

#### Crear un Nuevo Registro

El método ``save()`` se encarga de insertar un nuevo registro en la tabla correspondiente de la base de datos.

```php
use App\Models\User;

// Crea un nuevo usuario
$user = new User();
$user->name = 'John Doe';
$user->email = 'john@example.com';
$user->password = bcrypt('secret');
$user->save();
```

#### Obtener un Registro por ID

El método ``find()`` busca un registro en la tabla de la base de datos correspondiente al modelo y devuelve un objeto del modelo si se encuentra, o ``null`` si no se encuentra ningún registro con el ID especificado.

```php
use App\Models\User;

// Obtiene un usuario por su ID
$user = User::find(1);
```

#### Actualizar un Registro

En este **ejemplo**, obtenemos un usuario de la base de datos por su ID utilizando el método ``find()``, luego actualizamos el valor de la propiedad name del usuario y llamamos al método ``save()`` para guardar los cambios en la base de datos. 

El método ``save()`` en este caso actualiza el registro existente en la base de datos con los nuevos valores especificados en el modelo.

```php
use App\Models\User;

// Obtiene un usuario por su ID
$user = User::find(1);

// Actualiza el nombre del usuario
$user->name = 'Jane Doe';
$user->save();
```

#### Consultar con Restricciones

En estos **ejemplos**, estamos utilizando el método ``where()`` para agregar restricciones a la consulta. 

El método ``where()`` permite especificar condiciones para filtrar los registros de la tabla de la base de datos. 

Luego, llamamos al método ``get()`` o ``first()`` para ejecutar la consulta y obtener los resultados.

```php
use App\Models\User;

// Obtiene todos los usuarios cuyo nombre sea 'John'
$users = User::where('name', 'John')->get();

// Obtiene el primer usuario cuyo email sea 'john@example.com'
$user = User::where('email', 'john@example.com')->first();
```

## PHPUnit

**PHPUnit** es un popular framework de pruebas unitarias para PHP, y Laravel viene integrado con **PHPUnit** para facilitar la escritura y ejecución de pruebas automatizadas.

 Las pruebas unitarias son una parte crucial del desarrollo de software, ya que te permiten verificar que cada componente de tu aplicación funciona como se espera de forma aislada.

 En **Laravel**, las pruebas unitarias se encuentran en el directorio ``tests/Unit``, y puedes ejecutarlas utilizando el comando ``php artisan test``. 
 
 **Laravel** también proporciona herramientas adicionales para escribir pruebas de características (feature tests) para simular la interacción del usuario con tu aplicación.

 #### Supongamos que tenemos una clase Calculator con un método ``add()`` que queremos probar:

 ```php
// app/Calculator.php
namespace App;

class Calculator
{
    public function add($a, $b)
    {
        return $a + $b;
    }
}
```
#### Y aquí está la prueba unitaria correspondiente:

 ```php
// tests/Unit/CalculatorTest.php
namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Calculator;

class CalculatorTest extends TestCase
{
    public function testAdd()
    {
        $calculator = new Calculator();
        $result = $calculator->add(2, 3);
        $this->assertEquals(5, $result);
    }
}
```

En este **ejemplo**, estamos probando el método ``add()`` de la clase ``Calculator`` para asegurarnos de que suma correctamente dos números. Utilizamos el método ``assertEquals()`` de PHPUnit para verificar que el resultado de la suma sea igual a 5.

Para ejecutar esta prueba, simplemente ejecutamos el comando php artisan test en la línea de comandos. **PHPUnit** ejecutará todas las pruebas unitarias y mostrará el resultado en la consola.

---
---

[🏠 Volver al Home](../README.md)