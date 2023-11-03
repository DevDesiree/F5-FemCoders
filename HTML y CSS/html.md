# HTML (HyperText Markup Language)

HTML es el lenguaje de marcado utilizado para crear y estructurar contenido en la World Wide Web. Permite a los desarrolladores web definir la estructura y presentación de una página web mediante etiquetas y atributos.

## Historia de HTML

- HTML fue creado por Tim Berners-Lee en 1990 como parte del proyecto WorldWideWeb en el CERN (Organización Europea para la Investigación Nuclear). La primera versión se denominó HTML 1.0.

- A medida que la web creció, se hicieron esfuerzos para estandarizar HTML. El HTML 2.0 se publicó en 1995.

- En 1997, se lanzó HTML 3.2, que introdujo nuevas características y mejoras en la presentación.

- La transición más significativa llegó con HTML 4.0 en 1997, que ofreció mayor control de diseño y semántica.

- HTML5, la versión actual, se introdujo en 2014. Marcó un gran avance al incluir nuevas etiquetas y capacidades, como audio, video y elementos de formulario avanzados.

HTML continúa evolucionando, y los estándares se mantienen a través del trabajo del World Wide Web Consortium (W3C). HTML5 sigue siendo ampliamente utilizado para el desarrollo web moderno.


## Etiquetas HTML y Atributos Comunes

- `<html>`: Define el comienzo de un documento HTML.
  - Atributo `lang`: Define el idioma del contenido.

- `<head>`: Contiene metadatos y enlaces a recursos externos. Tambien el SEO
  - `<meta>`: Puede tener atributos adicionales como `name` y `content` para proporcionar información adicional, como metadatos de autor, descripciones, palabras clave, etc. Define metainformación como el conjunto de caracteres y la escala de la vista.

  - `<title>`: Define el título de la página.

  - `<link>`: Utilizado para vincular hojas de estilo externas (CSS).
    - Atributo `rel`: Define la relación del recurso.
    - Atributo `href`: Especifica la URL de la hoja de estilo.
  - `<link>`: Se utiliza para vincular a iconos de sitios web (favicons).

  - `<style>`: Utilizado para incluir estilos CSS en línea.

  - `<script>`: Se utiliza para incluir scripts JavaScript en la página.
    - Atributo `src`: Define la URL del archivo de script externo.
    - Atributo `type`: Especifica el tipo de script.
    - *Mas aconsejable poner el script debajo del todo o sino un defer

- `<body>`: Contiene el contenido visible de la página.

- `<div>`: Utilizada para agrupar y estilizar elementos de manera conjunta.
  - No afecta al contenido directamente, pero es útil para aplicar estilos o scripts a un grupo de elementos.

- `<span>`: Similar a `<div>`, pero se utiliza para aplicar estilos o scripts a elementos en línea.

- `<h1>`, `<h2>`, `<h3>`, ...: Encabezados que indican la jerarquía del contenido.

- `<p>`: Párrafos de texto.

- `<br>`: Utilizada para insertar un salto de línea en el texto. No tiene atributos, solo se usa como un elemento de autocierra.

- `<hr>`: Utilizada para crear una línea horizontal y no tiene atributos.

- `<strong>`: Texto en negrita para enfatizar.

- `<em>`: Texto en cursiva para enfatizar.

- `<a>`: Utilizada para crear hipervínculos.
  - El atributo `href` se utiliza para especificar la URL a la que se debe vincular.
  - El atributo `target` se usa para controlar cómo se abre el enlace, como "_blank" para abrir en una nueva ventana.


- `<img>`: Utilizada para incrustar imágenes en una página web.
  - Atributo `src`: Define la URL de la imagen.
  - Atributo `alt`: Proporciona un texto alternativo para la imagen.

- `<ul>`: Crea una lista no ordenada.
  - Atributo `type`: Define el tipo de viñeta, como "disc", "circle", o "square".

- `<ol>`: Crea una lista ordenada.
  - Atributo `type`: Define el tipo de numeración, como "1", "A", "a", "I", "i".
  - Atributo `start`: Especifica el número de inicio de la lista.
  - Atributo `reversed`: Invierte el orden de la lista.

- `<li>`: Elementos en listas, ya sea ordenadas o no ordenadas.

- `<table>`: Crea una tabla para organizar datos tabulares.
  - Atributo `border`: Define el ancho del borde de la tabla.
  
- `<tr>`: Define una fila en la tabla.
  
- `<th>`: Define una celda de encabezado en la tabla.
  - Atributo `colspan`: Especifica cuántas columnas abarca la celda de encabezado.
  - Atributo `rowspan`: Especifica cuántas filas abarca la celda de encabezado.

- `<td>`: Define una celda de datos en la tabla.

- `<form>`: Utilizada para crear un formulario interactivo.
  - Atributo `action`: Define la URL a la que se enviarán los datos del formulario.
  - Atributo `method`: Especifica el método de envío, como "get" o "post".
  
- `<input>`: Utilizada dentro de un formulario para permitir que los usuarios ingresen datos.
  - Atributo `type`: Define el tipo de entrada, como "text", "password", "radio", "checkbox", etc.
  - Atributo `name`: Identifica el campo de entrada.
  - Atributo `value`: Especifica el valor predeterminado del campo de entrada.

- `<textarea>`: Utilizada para permitir a los usuarios ingresar texto largo en un formulario.
  - Atributo `name`: Identifica el campo de entrada.
  
- `<button>`: Utilizado para crear botones en un formulario.
  - Atributo `type`: Define el tipo de botón, como "submit", "reset" o "button".

- `<select>`: Crea una lista desplegable en un formulario.
  - Atributo `name`: Identifica el campo de entrada.
  
- `<option>`: Define una opción dentro de una lista desplegable.

- `<figure>`: Utilizada para incluir contenido multimedia, como imágenes, videos, etc.
  - Añade un contenedor para el contenido multimedia.
  
- `<figcaption>`: Utilizada junto con `<figure>` para proporcionar una descripción o título para el contenido multimedia.

---
---