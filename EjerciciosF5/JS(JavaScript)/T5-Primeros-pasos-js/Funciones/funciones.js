
// Punto 1
function saludar(namePerson){
    document.write(`Hola, ${namePerson} <br> <br>`);
    console.log(`Hola, ${namePerson}`);
}

saludar("Paco");

// Punto 2
function sum(num1, num2){
    let suma = num1 + num2;
    document.write(`La suma de ${num1} + ${num2} es ${suma} <br> <br>`)
    console.log(`La suma de ${num1} + ${num2} es ${suma}`);
}

sum(5,3);

// Punto 3
function pairOdd(num){
    if (num % 2 == 0){
        document.write(`El número ${num} es par <br>`)
        console.log(`El número ${num} es par`);
    } else {
        document.write(`El número ${num} es impar`)
        console.log(`El número ${num} es impar`);
    }
}

pairOdd(2)
pairOdd(7)