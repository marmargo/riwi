
// 1. Crea un lista que almacene 10 nombres completos y ordenados alfabéticamente
const nombres= ["jairo","ines","harold","gabriel","fabian","elena","dario","carlos","bryan","ana"]
console.log(nombres.sort())

// 3. Utilizar un bucle for para sumar todos los elementos de un array de números
let numeros=[5,4,6,9,7,8,3,1,5]
let suma=0
for (let i =0; i< numeros.length; i++){
    suma+=numeros[i]   
}  
console.log(suma)


// 4. Iterar sobre las propiedades de un objeto utilizando un bucle for...in e imprimir sus valores
let abc=["a","b","c","d","e","f"]
abc.forEach(function(element){
    console.log(abc)
});
// 6. Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de strings
nombres.forEach(function(element){
    console.log(nombres)
});

// 7. Utilizar el método map() para obtener un nuevo array con cada elemento de un array de números multiplicado por 2

let numerosDuplicados = numeros.map(numero => {
    return numero * 2
})

console.groupCollapsed('Ejercicio 7: ')

console.log('Números:', numeros)
console.log('Números duplicados:', numerosDuplicados)

console.groupEnd()

// 8. Utilizar el método filter() para obtener un nuevo array con solo los números pares de un array dado

let numerosPares = numeros.filter(numero => (numero % 2 == 0))

console.groupCollapsed('Ejercicio 8: ')

console.log('Números:', numeros)
console.log('Números pares:', numerosPares)

console.groupEnd()

// 9. Utilizar el método some() para comprobar si al menos uno de los elementos de un array de números es mayor que 10

let checkNumero = numeros.some(numero => (numero > 10))

console.groupCollapsed('Ejercicio 9: ')

console.log('Números:', numeros)
console.log('¿Hay mayores que 10?', checkNumero)

console.groupEnd()

// 10. Utilizar el método every() para comprobar si todos los elementos de un array de números son positivos

let checkPositivos = numeros.every(numero => (numero >= 0))

console.groupCollapsed('Ejercicio 10: ')

console.log('Números:', numeros)
console.log('¿Son todos positivos?', checkPositivos)

console.groupEnd()

// 11. Utilizar el método sort() para ordenar un array de números de menor a mayor

console.groupCollapsed('Ejercicio 11: ')

console.log('Números:', numeros)
numeros.sort((a, b) => a - b)
console.log('Números ordenados:', numeros)

console.groupEnd()

// 12. Utilizar el método reverse() para invertir el orden de un array dado

console.groupCollapsed('Ejercicio 12: ')

console.log('Nombres:', nombres)
nombres.reverse()
console.log('Nombres reverso:', nombres)

console.groupEnd()

// 13. Crear una función toReversed() que tome un array y devuelva un nuevo array con los elementos en orden inverso

let arrayReverso = nombres.toReversed()

console.groupCollapsed('Ejercicio 13: ')

console.log('Nombres:', nombres)
nombres.reverse()
console.log('Nombres reverso:', nombres)

console.groupEnd()

// 14. Utilizar el método forEach() para calcular la suma de todos los elementos de un array de números







// 15. Iterar sobre las propiedades de un objeto y contar cuántas son de tipo string utilizando un
// bucle for...in.
// 16. Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de
// objetos.
// 17. Utilizar el método map() para obtener un nuevo array con la longitud de cada string en un
// array dado.
// 18. Utilizar el método filter() para obtener un nuevo array con solo las strings que contengan la
// letra 'a' en un array dado.
// 19. Utilizar el método some() para comprobar si alguna string en un array dado tiene una
// longitud mayor que 10 caracteres.
// 20. Utilizar el método every() para comprobar si todas las strings en un array dado contienen
// al menos una vocal.
// 21. Dado un array de objetos que representan libros con propiedades titulo y paginas, utilizar
// filter() para obtener un nuevo array con solo los libros que tengan más de 300 páginas.
// 22. Dado un array de números, utilizar filter() para obtener un nuevo array con solo los
// números que sean divisibles por 3.
// 23. Dado un array de strings, utilizar filter() para obtener un nuevo array con solo las strings
// que tengan una longitud mayor que 5.
// 24. Dado un array de objetos que representan personas con propiedades nombre y edad,
// utilizar filter() para obtener un nuevo array con solo las personas mayores de 18 años.
// 25. Dado un array de booleanos, utilizar filter() para obtener un nuevo array con solo los
// valores true.
// 26. Dado un array de números, utilizar map() para obtener un nuevo array con el cuadrado de
// cada número.
// 27. Dado un array de strings, utilizar map() para obtener un nuevo array con cada string en
// mayúsculas.
// 28. Dado un array de objetos que representan productos con propiedades nombre y precio,
// utilizar map() para obtener un nuevo array con solo los precios de los productos.
// 29. Dado un array de objetos que representan personas con propiedades nombre y edad,
// utilizar map() para obtener un nuevo array con solo los nombres de las personas.
// 30. Dado un array de números, utilizar map() para obtener un nuevo array con la raíz cuadrada
// de cada número