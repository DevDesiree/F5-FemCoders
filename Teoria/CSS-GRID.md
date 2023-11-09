# CSS Grid

CSS Grid es un sistema de diseño bidimensional en el ámbito de las hojas de estilo en cascada (CSS) que permite a los desarrolladores web crear diseños más complejos y flexibles en las páginas web. Se introdujo como una nueva forma de organizar y estructurar el contenido de una página, complementando las capacidades existentes de Flexbox.

## Características Principales:

- **Bidimensional:** CSS Grid organiza el contenido en dos dimensiones: filas y columnas. Esto proporciona una mayor flexibilidad en comparación con el modelo de caja unidimensional de Flexbox.

- **Contenedor y Elementos Hijos:** Se define un contenedor como cuadrícula utilizando la propiedad `display: grid;`. Los elementos hijos dentro de este contenedor se colocan en celdas específicas de la cuadrícula.

- **Fraccionamiento:** CSS Grid permite especificar tamaños de columnas y filas utilizando fracciones, porcentajes, píxeles u otras unidades, facilitando la creación de diseños fluidos y adaptables.

- **Posicionamiento Absoluto:** Los elementos dentro de la cuadrícula pueden posicionarse de forma absoluta, proporcionando un control preciso sobre su ubicación en la cuadrícula.

- **Responsividad:** CSS Grid facilita la creación de diseños responsivos mediante la reorganización automática de elementos en la cuadrícula en función del tamaño de la pantalla.

## Ejemplo Básico:

    En este ejemplo, se crea una cuadrícula con tres columnas de tamaño igual y dos filas con alturas específicas. El elemento con la clase "item" se extiende a través de dos columnas.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 10px;
}

.item {
  grid-column: span 2;
}
```


## Propiedades de CSS Grid

- `display`: Define cómo se muestra un elemento en forma de grid.
  - Valor: `grid`.

- `grid-template-columns`: Define el ancho de las columnas del grid.
  - Valores: tamaños de columnas, como `auto`, porcentaje, fracciones, píxeles.

- `grid-template-rows`: Define la altura de las filas del grid.
  - Valores: tamaños de filas, como `auto`, porcentaje, fracciones, píxeles.

- `grid-template-areas`: Define áreas del grid con nombres para organizar el contenido.
  - Valores: nombres de áreas, como `"header header" "sidebar main" "footer footer"`.

- `grid-column-gap`: Establece el espacio entre las columnas del grid.
  - Valores: píxeles, em, porcentaje.

- `grid-row-gap`: Establece el espacio entre las filas del grid.
  - Valores: píxeles, em, porcentaje.

- `grid-gap`: Define el espacio entre columnas y filas del grid.
  - Valores: píxeles, em, porcentaje.

- `grid-auto-columns`: Establece el ancho predeterminado para columnas creadas automáticamente.
  - Valores: tamaños de columnas, como `auto`, porcentaje, fracciones, píxeles.

- `grid-auto-rows`: Define la altura predeterminada para filas creadas automáticamente.
  - Valores: tamaños de filas, como `auto`, porcentaje, fracciones, píxeles.

- `grid-auto-flow`: Controla la dirección en la que se agregan elementos automáticamente.
  - Valores: `row`, `column`, `dense`.

- `grid-column`: Define en qué columnas se encuentra un elemento.
  - Valores: números de columna, como `1`, `span 2`.

- `grid-row`: Define en qué filas se encuentra un elemento.
  - Valores: números de fila, como `1`, `span 2`.

- `grid-area`: Coloca un elemento en un área del grid predefinida.
  - Valores: nombres de áreas, como `"header"`.

- `justify-items`: Alinea elementos dentro de su espacio en una celda.
  - Valores: `start`, `end`, `center`, `stretch`.

- `align-items`: Alinea elementos verticalmente dentro de su espacio en una celda.
  - Valores: `start`, `end`, `center`, `stretch`.

- `justify-content`: Alinea elementos horizontalmente en el grid.
  - Valores: `start`, `end`, `center`, `space-between`, `space-around`.

- `align-content`: Alinea elementos verticalmente en el grid.
  - Valores: `start`, `end`, `center`, `space-between`, `space-around`.

- `justify-self`: Alinea un elemento horizontalmente dentro de su celda.
  - Valores: `start`, `end`, `center`, `stretch`.

- `align-self`: Alinea un elemento verticalmente dentro de su celda.
  - Valores: `start`, `end`, `center`, `stretch`.

https://css-tricks.com/snippets/css/complete-guide-grid/

---
---

[🏠 Volver al Home](../README.md)