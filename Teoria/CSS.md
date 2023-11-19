# CSS (Cascading Style Sheets)

CSS es un lenguaje utilizado para definir la presentación y el diseño de documentos HTML. Permite a los desarrolladores web controlar aspectos como colores, fuentes, márgenes y diseños en una página web, separando la estructura del contenido (HTML) de su apariencia.

## Historia de CSS

- El concepto de separar el contenido y la presentación se introdujo por primera vez en 1994 por Håkon Wium Lie, quien propuso el uso de hojas de estilo en cascada para controlar la apariencia de documentos web.

- El primer borrador de CSS se publicó en 1996 como CSS1, ofreciendo un conjunto limitado de propiedades de estilo.

- CSS2 se introdujo en 1998 y amplió las capacidades de CSS1, agregando soporte para posicionamiento y diseño avanzado.

- Sin embargo, la adopción de CSS2 fue lenta debido a problemas de compatibilidad entre navegadores.

- CSS3, que se comenzó a desarrollar en la década de 1990, se convirtió en un conjunto de módulos independientes que se implementaron gradualmente en los navegadores a lo largo del tiempo. Estos módulos incluyen funcionalidades como sombras, transformaciones, animaciones y fuentes personalizadas.

- La especificación CSS3 no se finalizó como una única versión, sino que evolucionó continuamente.

- En la actualidad, CSS se encuentra en constante desarrollo y se implementa a medida que se introducen nuevos módulos de CSS.

CSS ha sido fundamental para la apariencia y el diseño de la web moderna, permitiendo una mayor flexibilidad y creatividad en el diseño de sitios web.

## Reglas CSS

- Formas de vincular un archivo css
    - Vincular un archivo CSS externo en el <head> usando <link> (RECOMENDADO):
        ```html
        <head>
        <link rel="stylesheet" type="text/css" href="styles.css">
        </head>
        ```

    - Incluir estilos CSS en línea en el `<head>` usando la etiqueta `<style>`:
        ```html
        <head>
            <style>
            body {
                background-color: #f0f0f0;
            }
            h1 {
                color: blue;
            }
            </style>
        </head>
        ```

    - Incluir estilos CSS en línea en un elemento HTML específico:
        ```html
        <h1 style="color: red;">Este es un encabezado rojo</h1>
        <p style="font-size: 16px; margin: 10px;">Este es un párrafo con estilos en línea.</p>
        ```


En CSS , las reglas se utilizan para aplicar estilos a elementos HTML. Cada regla CSS consta de tres partes:

1. **Selector**: El selector es el elemento HTML al que deseas aplicar el estilo. Puede ser un elemento HTML, una clase, un ID u otro selector.

2. **Propiedad**: La propiedad es la característica que deseas cambiar en el elemento seleccionado. Puede ser el color del texto, la fuente, el tamaño, el fondo, el margen, etc.

3. **Valor**: El valor es el valor que deseas asignar a la propiedad. Por ejemplo, si estás cambiando el color del texto, el valor podría ser "rojo" o "#FF0000".

La estructura de una regla CSS es la siguiente:

```css
selector {
  propiedad: valor;
}
```

## Propiedades CSS Comunes

- `color`: Define el color del texto.
  - Valores: nombres de colores, códigos de colores hexadecimales o RGB.

- `font-family`: Define la fuente o tipo de letra.
  - Valores: nombres de fuentes o familias de fuentes, como "Arial", "Helvetica", "sans-serif".

- `font-size`: Define el tamaño de la fuente.
  - Valores: tamaños de fuente en píxeles, em, rem, porcentaje, etc.

- `font-weight`: Define el grosor de la fuente (negrita o normal).
  - Valores: "normal", "bold", números (100-900).

- `text-align`: Alinea el texto en un elemento.
  - Valores: "left", "right", "center", "justify".

- `background-color`: Define el color de fondo de un elemento.
  - Valores: nombres de colores, códigos de colores hexadecimales o RGB.

- `margin`: Establece márgenes externos alrededor de un elemento.
  - Valores: píxeles, em, porcentaje.

- `padding`: Establece relleno interno para un elemento.
  - Valores: píxeles, em, porcentaje.

- `border`: Define un borde alrededor de un elemento.
  - Valores: ancho, estilo (solid, dashed, dotted, etc.), color.

- `width`: Define el ancho de un elemento.
  - Valores: píxeles, em, porcentaje.

- `height`: Define la altura de un elemento.
  - Valores: píxeles, em, porcentaje.

- `display`: Controla el comportamiento de visualización de un elemento.
  - Valores: "block", "inline", "inline-block", "none".

- `position`: Define la posición de un elemento en relación con su contenedor.
  - Valores: "relative", "absolute", "fixed", "static".

- `top`, `right`, `bottom`, `left`: Utilizado con `position` para controlar la posición exacta de un elemento.
  - Valores: píxeles, em, porcentaje.

- `z-index`: Controla el apilamiento de elementos superpuestos.
  - Valores: números enteros.

- `text-decoration`: Define la decoración del texto, como subrayado.
  - Valores: "none", "underline", "overline", "line-through".

- `line-height`: Establece la altura de línea en un elemento de texto.
  - Valores: píxeles, em, porcentaje.

- `text-transform`: Controla la transformación de texto, como mayúsculas o minúsculas.
  - Valores: "uppercase", "lowercase", "capitalize".

- `opacity`: Define la opacidad de un elemento.
  - Valores: números decimales de 0 a 1.

- `border-radius`: Define el radio de las esquinas de un elemento.
  - Valores: píxeles, em, porcentaje.

- `text-indent`: Establece la sangría de la primera línea de un párrafo.
  - Valores: píxeles, em, porcentaje.

- `box-sizing`: Controla cómo se calcula el tamaño total de un elemento.
  - Valores: "content-box", "border-box".

- `background-image`: Establece una imagen de fondo para un elemento.
  - Valores: URL de la imagen.

- `background-repeat`: Define cómo se repite la imagen de fondo.
  - Valores: "repeat", "repeat-x", "repeat-y", "no-repeat".

- `background-position`: Controla la posición de la imagen de fondo.
  - Valores: coordenadas ("left top", "center center", "right bottom").

- `list-style-type`: Define el tipo de marcador en una lista.
  - Valores: "disc", "circle", "square", "decimal", "lower-roman", "upper-alpha", etc.

- `text-shadow`: Agrega una sombra al texto.
  - Valores: desplazamiento horizontal, desplazamiento vertical, desenfoque, color.

- `box-shadow`: Agrega una sombra a un elemento.
  - Valores: desplazamiento horizontal, desplazamiento vertical, desenfoque, color.

- `transition`: Controla la animación de transición entre estados de un elemento.
  - Valores: propiedad a animar, duración, función de temporización.

- `transform`: Aplica transformaciones 2D o 3D a un elemento.
  - Valores: escala, rotación, traslación, inclinación, etc.

- `font-style`: Define el estilo de la fuente, como cursiva.
  - Valores: "normal", "italic", "oblique".

- `text-overflow`: Controla qué sucede cuando el texto desborda un contenedor.
  - Valores: "ellipsis", "clip".

- `cursor`: Cambia el cursor del mouse cuando se coloca sobre un elemento.
  - Valores: "pointer", "default", "crosshair", "move", etc.

- `user-select`: Controla si el texto es seleccionable por el usuario.
  - Valores: "auto", "none", "text", "all".



## Variables en CSS

En CSS puro (sin preprocesadores como SASS o LESS), no hay soporte nativo para variables como las conocemos en lenguajes de programación. Sin embargo, CSS ha introducido la capacidad de utilizar variables personalizadas mediante la notación --nombre-variable. Esta característica se conoce como "Variables CSS" o "CSS Custom Properties". Aquí tienes una descripción en formato Markdown:

En CSS, las variables son conocidas como "CSS Custom Properties". Estas permiten definir valores reutilizables y dinámicamente actualizables en una hoja de estilo. La sintaxis es la siguiente:

```css
/* Definición de una variable */
:root {
  --color-primario: #3498db;
}

/* Uso de la variable */
body {
  background-color: var(--color-primario);
}
```

En este ejemplo:

- :root se utiliza para definir las variables a nivel de documento. También puedes definir variables específicas para ciertos elementos.
- --color-primario es el nombre de la variable.
- var(--color-primario) se utiliza para acceder al valor de la variable.

---
---

[🏠 Volver al Home](../README.md)
