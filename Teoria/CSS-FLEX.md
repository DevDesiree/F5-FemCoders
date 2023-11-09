# Flexbox (Flexible Box)

Flexbox, o "Flexible Box", es un modelo de diseño en CSS que facilita el diseño y alineación de elementos en una página web, especialmente cuando se trata de diseño responsive y distribución de espacio en el contenedor padre.

## Características Principales de Flexbox

- **Contenedor Padre (Flex Container):** Se define utilizando la propiedad CSS `display: flex;` en el contenedor padre. Este contenedor se convierte en un contexto flex donde los elementos hijos se organizan según las reglas de Flexbox.

- **Elementos Hijos (Flex Items):** Cada elemento dentro del contenedor flex se convierte en un "elemento flexible" y puede ajustarse automáticamente según las propiedades de Flexbox.

- **Dirección Principal (Main Axis) y Transversal (Cross Axis):** Flexbox trabaja en dos dimensiones, con una dirección principal y una transversal. La dirección principal se define con la propiedad `flex-direction` y determina cómo se alinearán los elementos (horizontal o verticalmente).

- **Espaciado y Alineación:** Flexbox proporciona propiedades como `justify-content` para controlar el espaciado entre elementos en la dirección principal, y `align-items` para alinear elementos en la dirección transversal.

- **Ordenamiento:** Los elementos flexibles pueden ser reorganizados fácilmente utilizando la propiedad `order`.

## Beneficios de Flexbox

- **Diseño Responsivo:** Facilita la creación de diseños que se adaptan a diferentes tamaños de pantalla.

- **Alineación Simple:** Permite alinear fácilmente elementos en una fila o columna, distribuyendo el espacio disponible de manera eficiente.

- **Reorganización Dinámica:** Los elementos pueden ser reorganizados de manera dinámica sin cambiar el orden en el HTML.

- **Espaciado Uniforme:** Proporciona herramientas para distribuir y espaciar elementos de manera uniforme.

Flexbox se ha vuelto esencial en el diseño web moderno y ha simplificado la tarea de crear interfaces flexibles y atractivas.


## Propiedades de Flexbox


- `display: flex;`: Esta propiedad se aplica al contenedor y establece un contexto de diseño flexible para sus elementos secundarios. Los elementos secundarios se convierten en "flex items."

- `flex-direction`: Define la dirección principal en la que los elementos secundarios se distribuyen.
  - Valores: "row" (por defecto), "row-reverse", "column", "column-reverse".

- `justify-content`: Controla la alineación de los elementos secundarios a lo largo del eje principal.
  - Valores: "flex-start", "flex-end", "center", "space-between", "space-around".

- `align-items`: Alinea los elementos secundarios a lo largo del eje transversal.
  - Valores: "flex-start", "flex-end", "center", "baseline", "stretch".

- `align-content`: Controla el espacio entre las filas de elementos secundarios cuando hay múltiples filas.
  - Valores: "flex-start", "flex-end", "center", "space-between", "space-around", "stretch".

- `flex-grow`: Determina cómo se distribuirá el espacio adicional entre los elementos secundarios.
  - Valores: número (0 por defecto).

- `flex-shrink`: Controla cómo se contraerán los elementos secundarios cuando no haya suficiente espacio disponible.
  - Valores: número (1 por defecto).

- `flex-basis`: Establece el tamaño base de un elemento secundario antes de distribuir el espacio adicional.
  - Valores: tamaño, porcentaje.

- `flex`: Una propiedad abreviada que combina `flex-grow`, `flex-shrink`, y `flex-basis` en un solo valor.

- `order`: Define el orden en el que se muestran los elementos secundarios.
  - Valores: número (0 por defecto).


https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---
---

[🏠 Volver al Home](../README.md)