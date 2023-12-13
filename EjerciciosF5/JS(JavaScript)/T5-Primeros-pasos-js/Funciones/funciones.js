
// (1) Function for greeting with parameters
function greet(namePerson){
    document.write(`Hola, ${namePerson} <br> <br>`);

    // document.write("Hola " + namePerson + " como estas" );

    console.log(`Hola, ${namePerson}`);
}

greet("Paco");


// (2) Function sum with 2 parameters
function getSum(num1, num2){
    let sum = num1 + num2;
    document.write(`La suma de ${num1} + ${num2} es ${sum} <br> <br>`);
    console.log(`La suma de ${num1} + ${num2} es ${sum}`);
}

getSum(5,3);

// (3) Function Pair - Odd
function pairOdd(num){
    if (num % 2 == 0){
        document.write(`El número ${num} es par <br>`);
        console.log(`El número ${num} es par`);
    } else {
        document.write(`El número ${num} es impar <br>`);
        console.log(`El número ${num} es impar`);
    }
}

pairOdd(2)
pairOdd(7)

// let nombre;

// function saludo(valorNombre, valorSaludo){
//     nombre = valorNombre;
//     console.log(valorSaludo,nombre);
//     document.write(valorSaludo,nombre);
// }
// saludo(" Juanito", "Que tal");


function saludo(valorNombre, valorSaludo){
    console.log(valorSaludo,valorNombre);
    document.write(valorSaludo,valorNombre);
}

saludo("Juanito", "Que tal ");