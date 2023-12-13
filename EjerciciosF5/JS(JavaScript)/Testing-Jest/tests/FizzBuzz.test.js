// Imports

const {expect} = require("@jest/globals");
const Fizzbuzz = require("../FizzBuzz.js")

/*
Feature para saber cuando un numero es primo de 3 y 5
1.Cuando el usuario digite un numero divisible por 3, devuelve Fizz.
2.Cuando el usuario digite un numero divisible por 5, devuelve Buzz.
3.Cuando el usuario digite un numero divisible por 3 y 5, devuelve FizzBuzz.
4.Cuando el usuario digite un numero que no es divisible por 3 ni por 5, devuelve el numero.
*/


const fizz_buzz = new Fizzbuzz();

describe("Tests que validan los multiplos de 3 y 5", () =>  {

    test("Test devuelve Fizz cuando es divisible por 3", () =>{
        // Metodologia Gherkin Test
        // GIVEN / ARRANGE: un numero
        // WHEN / ACT: cuando este sea divisible por 3
        // THEN / ASSERT: Devuelve Fizz como resultado

        // //ARRANGE: preparar el escenario
        // const numero_ingresado = 3;
        // const respuesta_esperada = "Fizz";
        
        // // ACT: Ejecutar el escenario
        // const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        // // ASSERT: Comprobar el escenario
        // expect(respuesta_recibida).toBe(respuesta_esperada);


        //Refactor
        expect(fizz_buzz.validar_primos_3_5(3)).toBe("Fizz")

    
    })

    test("Test devuelve Buzz cuando es divisible por 5", () =>{
 
        //ARRANGE: preparar el escenario
        
        const numero_ingresado = 5;
        const respuesta_esperada = "Buzz";
        
        // ACT: Ejecutar el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        // ASSERT: Comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    
    })

    test("Test devuelve FizzBuzz cuando es divisible por 3 y 5", () =>{
 
        //ARRANGE: preparar el escenario
        
        const numero_ingresado = 15;
        const respuesta_esperada = "FizzBuzz";
        
        // ACT: Ejecutar el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        // ASSERT: Comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

    test("Test devuelve el numero cuando no es divisible ni por 5 ni 3", () =>{
 
        //ARRANGE: preparar el escenario
        
        const numero_ingresado = 1;
        const respuesta_esperada = numero_ingresado;
        
        // ACT: Ejecutar el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        // ASSERT: Comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

})

