# Eventos en JavaScript

En JavaScript, los eventos permiten que tu código responda a las acciones del usuario o a cambios en el entorno. Aquí hay una breve descripción de algunos eventos comunes:

## Eventos del Ratón

- **click**: Se dispara cuando se hace clic en un elemento.
- **mouseover**: Ocurre cuando el puntero del ratón se mueve sobre un elemento.
- **mouseout**: Se dispara cuando el puntero del ratón sale de un elemento.

## Eventos del Teclado

- **keydown**: Se activa cuando una tecla se presiona.
- **keyup**: Ocurre cuando una tecla se suelta.

## Eventos de Formulario

- **submit**: Se dispara cuando se envía un formulario.
- **change**: Ocurre cuando el valor de un elemento de formulario cambia.

## Eventos de Documento

- **DOMContentLoaded**: Ocurre cuando el documento HTML ha sido completamente cargado y parseado.

## Uso Básico

Puedes manejar eventos en JavaScript asignando funciones a propiedades de eventos en elementos HTML o utilizando el método `addEventListener`. Aquí hay un ejemplo básico de cómo usarlo:

```javascript
// Asignación directa de una función a un evento
document.getElementById('miBoton').onclick = function() {
  alert('Has hecho click en el botón!');
};

// Uso de addEventListener
document.getElementById('miOtroBoton').addEventListener('mouseover', function() {
  console.log('El ratón está sobre el botón.');
});
```

Aquí otro ejemplo usando funciones y llamando directamente al elemento declarado anteriormente:

```js
// Declara la variable que referencia al botón por su ID
let miBoton = document.getElementById('miBoton');

// Declara una funcion que se ejecutará cuando se haga clic en el botón
function clicEnBotonHandler() {
  alert('Has hecho click en el botón!');
}

// Asigna el event listener al botón utilizando addEventListener
miBoton.addEventListener('click', clicEnBotonHandler);

// También puedes declarar la funcion directamente en el addEventListener
let miOtroBoton = document.getElementById('miOtroBoton');
miOtroBoton.addEventListener('mouseover', function() {
  console.log('El ratón está sobre el otro botón.');
});
```

## Prevenir Comportamientos Predeterminados:
Puedes usar preventDefault() para evitar que ocurra el comportamiento predeterminado asociado con un evento. Por ejemplo, prevenir el envío de un formulario cuando se presiona Enter.

```js
document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario
  console.log('Formulario no enviado.');
});
```

El manejo efectivo de eventos es fundamental para crear aplicaciones web interactivas y receptivas, permitiendo una experiencia de usuario más dinámica.

---
---

[🏠 Volver al Home](../README.md)