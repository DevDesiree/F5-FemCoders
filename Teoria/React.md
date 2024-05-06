# React

React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables.

Desarrollada por Facebook, React se ha convertido en una de las herramientas más populares para la construcción de aplicaciones web modernas.

## Características principales

**Componentes**: React se basa en el concepto de componentes. Los componentes son bloques de construcción de una interfaz de usuario en React, que pueden ser reutilizados y compuestos para crear interfaces más complejas.

**Virtual DOM**: React utiliza un Virtual DOM para mejorar el rendimiento de las aplicaciones. En lugar de manipular directamente el DOM del navegador, React crea una representación virtual de los elementos y los compara con el DOM real para determinar los cambios que deben realizarse.

**Unidireccionalidad de datos**: React sigue el principio de unidireccionalidad de datos, lo que significa que los datos fluyen en una dirección, desde los componentes principales hacia abajo a través de los componentes secundarios.

## 🛠 Instalación

## 👉 Con Vite

- Vite es una herramienta de desarrollo rápida y moderna que puede ser utilizada para iniciar proyectos de React de forma rápida y sencilla.

Para crear un nuevo proyecto de React con Vite, primero asegúrate de tener Node.js instalado en tu sistema. Luego, utiliza los siguientes comandos en tu terminal:

**Primero** (Reemplaza my-react-app con el nombre que desees para tu proyecto):

```bash
npm create vite@latest my-react-app -- --template react
```

**Segundo** (1. Reemplaza my-react-app con el nombre que elegiste para tu proyecto. 2. Luego, accede al directorio de tu aplicación e inicia el servidor de desarrollo, todo en orden)

```bash
cd my-react-app
npm install
npm run dev
```

### 👉 Con Create React App

Puedes comenzar a utilizar React en tu proyecto instalando la biblioteca a través de npm:

**Primero** (puedes crear un nuevo proyecto de React ejecutando el siguiente comando en tu terminal y sustituir my-app por el nombre que quieras):

```bash
npx create-react-app my-app
```

**Segundo** (Reemplaza my-app con el nombre que creaste para tu proyecto de React):

```bash
cd my-app
```

**Tercero** (Finalmente, puedes iniciar el servidor de desarrollo ejecutando el siguiente comando):

```bash
npm start
```

# 🧩 Componentes

Los componentes son bloques de construcción básicos en React que te permiten dividir la interfaz de usuario en piezas independientes y reutilizables.

Puedes pensar en ellos como funciones de JavaScript que reciben entradas (llamadas props) y devuelven elementos de React que describen lo que debería aparecer en la pantalla.

**Ejemplo:**

```jsx
// Ejemplo de un componente funcional en React
import React from "react";

function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

export default Saludo;
```

## 🧪 Atomic Design

El diseño atómico es una metodología de diseño que descompone la interfaz de usuario en componentes más pequeños y reutilizables, comenzando desde los elementos más básicos y simples (átomos) hasta los componentes más complejos (organismos y plantillas). 

Esta metodología se basa en la idea de que construir interfaces de usuario de manera modular y escalable puede mejorar la coherencia, la mantenibilidad y la eficiencia del desarrollo.

### En React, puedes aplicar los principios del diseño atómico de varias maneras:

## Componentes Atómicos (Átomos)
Los componentes atómicos son los elementos más básicos de una interfaz de usuario, como botones, entradas de texto, etiquetas, iconos, etc. 

Estos componentes son simples y reutilizables, y pueden ser utilizados como bloques de construcción para construir componentes más complejos.

**Ejemplo:**

```jsx
// Ejemplo de un componente atómico en React
function Boton(props) {
  return <button onClick={props.onClick}>{props.texto}</button>;
}
```

## Componentes Moleculares (Moléculas)
Los componentes moleculares son combinaciones de componentes atómicos que forman unidades más grandes y complejas. 

Estos componentes representan patrones de diseño comunes en una interfaz de usuario y pueden ser reutilizados en diferentes partes de una aplicación.

**Ejemplo:**

```jsx
// Ejemplo de un componente molecular en React
function BarraDeNavegacion() {
  return (
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}
```

## Componentes Organismos y Plantillas
Los componentes organismos y plantillas son componentes más grandes que representan secciones completas de una interfaz de usuario, como encabezados, pies de página, barras laterales, etc. 

Estos componentes pueden contener múltiples componentes atómicos y moleculares y se utilizan para construir páginas completas de la aplicación.

**Ejemplo:**

```jsx
// Ejemplo de un componente organismo en React
function Encabezado() {
  return (
    <header>
      <h1>Mi Aplicación</h1>
      <BarraDeNavegacion />
    </header>
  );
}
```

## Componentes de Vistas o Páginas
Los componentes de vistas o páginas son los componentes más grandes de una aplicación en React y representan las diferentes pantallas o vistas de la aplicación, como la página de inicio, la página de perfil de usuario, la página de detalles del producto, etc. 

Estos componentes combinan y organizan otros componentes más pequeños (como componentes atómicos, moleculares y organismos) para construir la estructura general de la interfaz de usuario de cada página.

**Ejemplo:**

```jsx
// Ejemplo de un componente de vista en React
function PaginaDeInicio() {
  return (
    <div>
      <Encabezado />
      <Contenido />
      <PieDePagina />
    </div>
  );
}
```

## ✅ Beneficios de aplicar Atomic Design en React
- Reutilización de componentes: La metodología del diseño atómico fomenta la creación de componentes reutilizables que pueden ser utilizados en diferentes partes de la aplicación

- Coherencia visual: Al descomponer la interfaz de usuario en componentes más pequeños y coherentes, se puede mejorar la consistencia visual de la aplicación.

- Mantenibilidad: La modularidad y la reutilización de componentes facilitan la mantenibilidad del código y permiten realizar cambios de manera más eficiente.

- Escalabilidad: La metodología del diseño atómico facilita la escalabilidad de la aplicación, ya que los componentes pueden ser agregados, modificados o eliminados fácilmente según sea necesario.

# Props

Props (abreviatura de propiedades) son datos que se pasan a los componentes de React como argumentos. 

Las props se utilizan para pasar datos de un componente a otro componente. 

Los componentes hijos pueden acceder a las props a través del objeto props y utilizar los datos pasados para renderizar su contenido.

**Ejemplo:**

```jsx
// Ejemplo de cómo pasar props a un componente en React
<Saludo nombre="Juan" />
```


# useState
``useState`` es un hook que te permite añadir estado a componentes funcionales en React. Te proporciona una forma de almacenar y actualizar datos en el componente. 

Cuando llamas a useState, devuelve un array con dos elementos: el valor actual del estado y una función para actualizar ese valor. 

Puedes usar esta función para actualizar el estado y React volverá a renderizar el componente con el nuevo estado.

**Ejemplo 1:**

```jsx
import React, { useState } from 'react';

function Contador() {
  // Declaramos el estado del contador con useState
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      {/* Al hacer clic en el botón, llamamos a setContador para actualizar el estado */}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```
En este **ejemplo**, estamos creando un componente Contador que utiliza useState para mantener un contador. 

La función setContador se utiliza para actualizar el estado del contador cada vez que hacemos clic en el botón.

**Ejemplo 2:**

```jsx
import React, { useState } from 'react';

function CampoDeTexto() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>Texto ingresado: {texto}</p>
    </div>
  );
}
```

En este **ejemplo**, ``texto`` es el estado que almacena el valor del campo de entrada y ``setTexto`` es la función que utilizamos para actualizar ese estado. 

Cada vez que el usuario escribe en el campo de entrada, el estado ``texto`` se actualiza con el nuevo valor.

# useEffect
``useEffect`` es un hook que te permite realizar efectos secundarios en componentes funcionales. 

Puedes utilizarlo para realizar tareas como suscripciones a eventos, peticiones de red, o limpieza de recursos cuando el componente se monta, se actualiza o se desmonta. 

``useEffect`` acepta una función como primer argumento, que se ejecutará después de que React haya renderizado el componente.

**Ejemplo 1:**

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DatosDeAPI() {
  // Declaramos el estado para almacenar los datos de la API
  const [datos, setDatos] = useState(null);

  // Utilizamos useEffect para realizar una solicitud a la API cuando el componente se monta
  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => {
        // Actualizamos el estado con los datos recibidos de la API
        setDatos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []); // El segundo argumento de useEffect es un array de dependencias

  return (
    <div>
      {/* Mostramos los datos de la API */}
      {datos && (
        <ul>
          {datos.map(item => (
            <li key={item.id}>{item.nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

En este **ejemplo**, estamos utilizando ``useEffect`` para realizar una solicitud a una API cuando el componente DatosDeAPI se monta. 

La función que pasamos a ``useEffect`` se ejecutará después de que React haya renderizado el componente por primera vez.

Dentro de esta función, realizamos la solicitud a la API utilizando Axios y actualizamos el estado con los datos recibidos. 

El segundo argumento de ``useEffect`` es un array vacío [], lo que significa que el efecto solo se ejecutará una vez cuando el componente se monte.

**Ejemplo 2:**

```jsx
import React, { useState, useEffect } from 'react';

function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    // Inicia el temporizador cuando el componente se monte
    const intervalo = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);

    // Detiene el temporizador cuando el componente se desmonte
    return () => {
      clearInterval(intervalo);
    };
  }, []); // El segundo argumento de useEffect es un array vacío

  return (
    <div>
      <p>Tiempo transcurrido: {segundos} segundos</p>
    </div>
  );
}
```

En este **ejemplo**, utilizamos ``useEffect`` para iniciar un temporizador cuando el componente se monta. 

La función que pasamos a ``useEffect`` se ejecutará después de que React haya renderizado el componente por primera vez. 

Dentro de esta función, utilizamos setInterval para aumentar el estado segundos cada segundo. 

También proporcionamos una función de limpieza que detiene el temporizador cuando el componente se desmonta.

## Diferencias entre useState y useEffect

``useState`` y ``useEffect`` son dos hooks diferentes en React y tienen propósitos diferentes:

- ``useState``: Este hook se utiliza para añadir estado a componentes funcionales en React. Te permite declarar una variable de estado y una función para actualizar esa variable. 

    - Cuando el estado cambia, React vuelve a renderizar el componente para reflejar el nuevo estado. ``useState`` es útil cuando necesitas mantener y actualizar datos dentro de un componente, como el valor de un campo de entrada, el estado de un botón, etc.

- ``useEffect``: Este hook se utiliza para realizar efectos secundarios en componentes funcionales en React. Puedes utilizar ``useEffect`` para realizar tareas como suscripciones a eventos, peticiones de red, o limpieza de recursos cuando el componente se monta, se actualiza o se desmonta. 

    - ``useEffect`` acepta una función como primer argumento, que se ejecutará después de que React haya renderizado el componente. También puedes proporcionar un array de dependencias como segundo argumento para controlar cuándo se debe ejecutar el efecto.

En **resumen**, ``useState`` se utiliza para manejar el estado interno de un componente (como variables locales), mientras que ``useEffect`` se utiliza para manejar efectos secundarios relacionados con la interacción del componente con el entorno exterior (como solicitudes de red, suscripciones a eventos, etc.). 

---
---

[🏠 Volver al Home](../README.md)