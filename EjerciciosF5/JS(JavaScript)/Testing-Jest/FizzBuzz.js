class FizzBuzz{
    validar_primos_3_5(numero){
        if (numero % 3 == 0 && numero % 5 == 0) {
            return "FizzBuzz";
        } else if (numero % 5 == 0){
            return "Buzz";
        } else if (numero % 3 == 0){
            return "Fizz"
        } else {
            return numero
        }
    } 
}

const fizzBuzzClass = new FizzBuzz();

for (let i = 1; i <= 15; i++) {
    console.log(fizzBuzzClass.validar_primos_3_5(i));
}

module.exports = FizzBuzz;