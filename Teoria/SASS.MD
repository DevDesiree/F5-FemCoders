# Preprocesadores SASS

SASS (Syntactically Awesome Stylesheets) es un preprocesador de CSS que agrega funcionalidades y características adicionales a la sintaxis estándar de CSS. Utiliza una sintaxis propia que incluye características como variables, anidamiento, funciones y mixins, lo que facilita la creación y gestión de estilos más complejos y reutilizables.


# Instalación de Sass

Para utilizar Sass en tu proyecto, sigue estos pasos:

## 1. Instalación de Sass

Asegúrate de tener Node.js y npm instalados en tu ordenador.

Luego, instala Sass globalmente o como una dependencia de desarrollo utilizando uno de los siguientes comandos:

### Instalación global:

```bash
npm install -g sass
```

### Instalación como dependencia de desarrollo:

```bash
npm install sass --save-dev
```

## 2. Configuración del Script de Observación

En tu archivo `package.json`, agrega el siguiente script en la sección de "scripts":

```json
{
  "scripts": {
    "sass-watcher": "npx sass --watch src/sass/styles.scss:public/css/styles.css"
  }
}
```

Este script, llamado "sass-watcher", empleará Sass en modo de observación para compilar automáticamente tus archivos Sass en CSS cada vez que realices cambios y para que el navegador pueda interpretarlo.

## 3. Ejecución del Observador de Sass

Ejecuta el siguiente comando en tu terminal para iniciar el observador de Sass:

```bash
npm run sass-watcher
```

## Características Principales:

1. **Variables:**

   - Permite definir variables para almacenar valores que se pueden reutilizar en todo el código.

   ```scss
   $color-primary: #3498db;
   body {
     background-color: $color-primary;
   }
   ```

2. **Anidamientos:**

   - Permite anidar selectores para reflejar la estructura HTML de manera más clara.

   ```scss
   nav {
     ul {
       margin: 0;
       padding: 0;
       list-style: none;
     }
     li {
       display: inline-block;
     }
   }
   ```

3. **Partials y @import:**

   - Facilita la organización del código al dividirlo en archivos más pequeños y luego importarlos según sea necesario.

   ```scss
   // _variables.scss
   $font-stack: Helvetica, sans-serif;
   $primary-color: #333;

   // style.scss
   @import "variables";
   body {
     font: 100% $font-stack;
     color: $primary-color;
   }
   ```

4. **Mixins:**

   - Permite definir bloques de estilos reutilizables que se pueden aplicar en múltiples lugares.

   ```scss
   @mixin border-radius($radius) {
     -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
     border-radius: $radius;
   }

   .box {
     @include border-radius(10px);
   }
   ```

5. **Herencia:**

   - Permite que un selector herede estilos de otro selector.

   ```scss
   .btn {
     padding: 10px;
     font-size: 14px;
   }

   .btn-primary {
     @extend .btn;
     background-color: #3498db;
     color: #fff;
   }
   ```

6. **Operadores y Funciones Matemáticas:**

   - Sass permite realizar operaciones matemáticas directamente en las hojas de estilo, lo que facilita los cálculos.

   ```scss
   $base-font-size: 16px;

   body {
     font-size: $base-font-size;

     h1 {
       font-size: $base-font-size * 2;
     }

     p {
       font-size: $base-font-size * 1.2;
     }
   }
   ```

7. **Condicionales:**

   - Sass proporciona estructuras condicionales que te permiten aplicar estilos basados en condiciones.

   ```scss
   $theme: light;

   .card {
     @if $theme == light {
       background-color: #fff;
       color: #333;
     } @else {
       background-color: #333;
       color: #fff;
     }
   }
   ```

En resumen, SASS es un preprocesador que facilita la escritura de código CSS más eficiente y reutilizable al proporcionar características adicionales y una sintaxis más avanzada.

---

---

[🏠 Volver al Home](../README.md)
