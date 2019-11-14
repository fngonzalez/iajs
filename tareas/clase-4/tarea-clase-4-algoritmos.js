//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1



 for (i=10;i>0;i--){
   console.log (i)   //ok
 }


 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99

let numeroParaSumarleDos
for (numeroParaSumarleDos=0; numeroParaSumarleDos < 100; numeroParaSumarleDos++){
  if (numeroParaSumarleDos % 2 === 0 ){}    //ok
  else {console.log(numeroParaSumarleDos)}
};




Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63

for (i=0; i<=10; i++){
  console.log('7 x', i,' = ', 7*i)  //ok
}


Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81

let n
for (i = 0; i <= 10; i++) {
  for (n = 0; n<=10; n++) {
    console.log (i,' x ',n, '=', i*n)   //ok
  }
}

Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

 let unoAlDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i
let contador = 0
for (i = 0; i < unoAlDiez.length; i++) {            //OK
  contador = contador + unoAlDiez[i]
}
alert(contador)


Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1

let unoAlDiez=[1,2,3,4,5,6,7,8,9,10]
let contador = 1
let i
for (i=0;i<unoAlDiez.length;i++){      //OK
  contador=contador*unoAlDiez[i]
}
alert(contador)

Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

for (i=10;i<30;i++){
  if(i%2==0){}             //OK
  else{console.log(i)}
}

   Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit


alert('Hola! Bienvenido al conversor de grados Celsius a grados Fahrenheit')
let n1=Number(prompt('Por favor, ingresá en números el valor a convertir:'))
let convertirCelsiusAFarenheit= function (numeroParaConvertirAF){
  return alert(1.8*numeroParaConvertirAF+32)
}
convertirCelsiusAFarenheit(n1)

   Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius


alert('Hola! Bienvenido al convertidor de grados Fahrenheit a grados Celsius')
let numeroParaConvertirAC = Number(prompt('Por favor, ingresá el número para convertirlo:'))

let convertirFahrenheitACelsius = function (numeroParaConvertirAC)  {               //OK
    if (numeroParaConvertirAC < 0 || numeroParaConvertirAC >= 0) {
        return (alert((numeroParaConvertirAC - 32) / 1.8))
    } else { alert('Por favor, ingresa un numero') }
}
convertirFahrenheitACelsius(numeroParaConvertirAC)

Desafío de programación #10: Calcula la suma de todos los números en un array de números

let numeros= [33, 44, 1, 32, 75, 44, 89, 76,54]
let acumulador = 0

for (i=0; i<numeros.length; i++){                //OK
  acumulador= acumulador+numeros[i]
}
console.log (acumulador)

Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

let numeros= [23, 27, 25, 30, 20]
let acumulador = 0

let calcularPromedio = function (numeros){
  for (i=0; i<numeros.length; i++){
    acumulador = acumulador + numeros [i]
  }
  return acumulador/numeros.length
}
console.log (calcularPromedio(numeros))

Desafío de programación #12: Crea una función que reciba un array de números y devuelva un 
array conteniendo solo los números positivos

let numeros = [-2, 3, -7, 9, -6, 0, -1, 2, -5]
let numerosPositivos = []

let crearArrayPositivo = function (numeros) {
    for (i = 0; i < numeros.length; i++) {          //OK
        if (numeros[i] >= 0) {
            numerosPositivos.push(numeros[i])
        } else { }
    }
}
crearArrayPositivo(numeros)
console.log(numerosPositivos)


Desafío de programación #13: Find the maximum number in an array of numbers

let numeros = [-2, 3, -7, 9, -6, 0, -1, 2, -5]
let n = 0
for (i = 0; i < numeros.length; i++) {
    if (n < numeros [i]) {
        n = numeros [i]
    }
}
console.log(n)


Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

let primerValor = 0
let segundoValor = 1
let fibonacci = 0

for (primerValor = 0; primerValor < 34;) {
    if (fibonacci === 0) {
        console.log(fibonacci)
    }
    fibonacci = primerValor + segundoValor                 //OK
    console.log(fibonacci)
    if (fibonacci === 1) {
        console.log(fibonacci)
    }if (primerValor < segundoValor == fibonacci || primerValor == segundoValor < fibonacci || primerValor < segundoValor < fibonacci) {
        primerValor = segundoValor
        segundoValor = fibonacci
        fibonacci = ''

    }
}

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/
/*
let insertarCantidadDeVecesSucesión = Number(prompt('Hola! Ingresá las veces que queres que la sucesión de fibonacci se realice.'))
let numeroDeFibonacci = 0
let numeroUno = 0
let numeroDos = 1
let i = 0
let encontrarnNumeroEnFibonacci = function (insertarCantidadDeVecesSucesión) {

    if (insertarCantidadDeVecesSucesión === 0) {
        console.log(numeroDeFibonacci)
    } else if (insertarCantidadDeVecesSucesión === 1 || insertarCantidadDeVecesSucesión === 2) {
        console.log(numeroUno + numeroDos)
    } else {
        insertarCantidadDeVecesSucesión = insertarCantidadDeVecesSucesión - 2
        for (i = 0; i <= insertarCantidadDeVecesSucesión; i++) {
            numeroDeFibonacci = numeroUno + numeroDos
            if (i === insertarCantidadDeVecesSucesión) {
                insertarCantidadDeVecesSucesión = insertarCantidadDeVecesSucesión
                console.log('Si repetimos la sucesión ', (insertarCantidadDeVecesSucesión + 2), ' veces, el número que obtenemos es:', numeroDeFibonacci)
            } if (i < insertarCantidadDeVecesSucesión) {
                numeroUno = numeroDos
                numeroDos = numeroDeFibonacci
                numeroDeFibonacci = ''
            }
        }
    }
}
encontrarnNumeroEnFibonacci(insertarCantidadDeVecesSucesión)



function findFibonacci(n)
{
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}
let n= findFibonacci(Number(prompt('inserta la ubicación del numero que queres conocer')))

console.log(n);*/

/*

Desafío de programación #16: Create una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
Aclaración: Los números primos son aquellos que tienen exactamente 4 divisores enteros.
Ejemplo:
   1 NO es primo porque tiene 2 divisores enteros (1, -1)
   2 es primo porque sólo puede dividirse por (1,-1,2,-2)
   3 es primo porque sólo puede dividirse por (1,-1,3,-3)
   4 NO es primo porque se puede dividir por (1,-1,2,-2,4,-4)
   5 es primo porque sólo puede dividirse por (1,-1,5,-5)
   6 NO es primo porque se puede dividir por (1,-1,2,-2,3,-3,6,-6)
   ... y así


let n = Number(prompt('Hola! Averigüemos si el número que tenés en mente es primo:'))
let numerosPrimos = function (n) {
    if (n === 1 || n === 2 || n === 0) { return true }

    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(numerosPrimos(n))


let n= number(prompt('Hola! Averigüemos si el número que tenés en mente es primo:'))
   let numerosPrimos = function (n)
   if lo puedo dividir por si mismo y por 1, return true
   if lo puedo dividir por si mismo, por 1 y por otros números, return false



function conocerNumeroPrimo(n) {
    if (n === 0 || n === 1 || n === 2) {
        return ('es primo')
    } for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return ('no es primo')
        }
    }
    return ('si es primo')
}

let n = conocerNumeroPrimo(Number(prompt('inserta el numero que queres saber si es primo')))

console.log(n)



Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10


const numeroUsuario = prompt('Ingresá los números que gustarías de sumar').toString();
let contador = 0

for (const cadaNumero of numeroUsuario) {
    let guardadorDeNumeros = Number(cadaNumero)
    contador = guardadorDeNumeros + contador
}
console.log (contador)




Desafío de programación #18: Imprimir los primeros 100 números primos
 


function conocerSiEsPrimo(numeroIngresado) {
    if (numeroIngresado == 1 || numeroIngresado == 2 || numeroIngresado == 0) {
        return true
    } if (numeroIngresado > 2) {
        for (i = 2; i < numeroIngresado; i++) {
            if (numeroIngresado % i == 0) {
                return false
            }
        }
    } return true
}


let nNumeros = 100

function calcularPrimerosNumerosPrimos(nNumeros) {
    let i = 2
    let n = 0
    while (n<nNumeros) {
        if (conocerSiEsPrimo(i)) {
            console.log('el numero primo que ocupa la posicion', n, 'es: ', i)
            n++
        }
        i++
    }
}

calcularPrimerosNumerosPrimos(nNumeros)

Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" 
mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]



function conocerSiEsPrimo(numeroIngresado) {
    if (numeroIngresado == 1 || numeroIngresado == 2 || numeroIngresado == 0) {
        return true
    } if (numeroIngresado > 2) {
        for (i = 2; i < numeroIngresado; i++) {
            if (numeroIngresado % i == 0) {
                return false
            }
        }
    } return true
}


let cantidadDeNumerosElectos = prompt ('ingresá la cantidad de números primos que querés conocer')
let aPartirDe= prompt('ingresá el número mínimo que queres conocer de números primos')
let numerosPrimosEncontrados = []


function calcularPrimerosNumerosPrimos(cantidadDeNumerosElectos,aPartirDe,numerosPrimosEncontrados) {
    let i = 2
    let n = 0
        while (n<cantidadDeNumerosElectos) {
        if (conocerSiEsPrimo(i)||i>=aPartirDe) {
          numerosPrimosEncontrados.push(i)
                        n++
        }
        i++
    }
}

calcularPrimerosNumerosPrimos(nNumeros)




Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]

Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]

Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]

Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"

Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]


Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como 
argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un 
nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)




let nUno=0
let nDos=1
let fibonacci
let sumando

if (nUno==0){

}else if (nDos ==1){
  sumando+=nDos
}else{
  for (i=0; i<=1000;i++){
    fibonacci=nUno+nDos
    sumando+=fibonacci


    nUno=nDos
    nDos=fibonacci
    fibonacci=

  }
}

*/

