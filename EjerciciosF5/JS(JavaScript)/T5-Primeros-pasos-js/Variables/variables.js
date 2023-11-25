// (1) Create the variables and write them in the browser
let number1 = 28;
let number2 = 7;
let greeting = "Hola";
let namePerson = "Lucia"
let boolean = true;

document.write(`El Numero es : ${number1}  y el tipo es : ${typeof(number1)} <br>`);
console.log(`El Numero es :  ${number1}  y el tipo es : ${typeof(number1)}`);

document.write(`El Numero es : ${number2}  y el tipo es : ${typeof(number2)} <br>`);
console.log(`El Numero es :  ${number2}  y el tipo es : ${typeof(number2)}`);

document.write(`La Palabra es : ${greeting}  y el tipo es : ${typeof(greeting)} <br>`)
console.log(`La Palabra es : ${greeting}  y el tipo es : ${typeof(greeting)}`);

document.write(`La Palabra es : ${namePerson}  y el tipo es : ${typeof(namePerson)} <br>`)
console.log(`La Palabra es : ${namePerson}  y el tipo es : ${typeof(namePerson)}`);

document.write(`El Booleano es : ${boolean} y el tipo es : ${typeof(boolean)} <br> <br>`);
console.log(`El Booleano es : ${boolean}  y el tipo es : ${typeof(boolean)}`);

// (2) Variable Operations with numbers
let sum = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;

document.write(`La Suma de ${number1} y ${number2} es ${sum} <br>`);
console.log(`La Suma de ${number1} y ${number2} es ${sum}`);

document.write(`La Resta de ${number1} y ${number2} es ${subtraction} <br>`);
console.log(`La Resta de ${number1} y ${number2} es ${subtraction}`);

document.write(`La Multiplicacion de  de ${number1} y ${number2} es ${multiplication} <br>`);
console.log(`La Multiplicacion de  de ${number1} y ${number2} es ${multiplication}`);

document.write(`La Division de ${number1} y ${number2} es ${division} <br> <br>`);
console.log(`La Division de ${number1} y ${number2} es ${division}`);

// (3) Concatenate the variables
document.write(`${greeting} ${namePerson}, que tal!`);
console.log(`${greeting} ${namePerson}, que tal!`);