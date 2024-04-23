let myfirstN=2
let mysecondN="2"


console.info(myfirstN*mysecondN)
console.info(myfirstN-mysecondN)
console.info(myfirstN + Number(mysecondN) )//funcion para sumas
console.info(myfirstN/mysecondN)

console.info(typeof(myfirstN))//dice si es un numero o un string
console.info(Number.isInteger(myfirstN))//dice si es un numero entero o decimal, dice true o false

const numer1=50000000000000000
const numer2=50000000000000000 //el guion bajo separa los numeros grandes cada 3 digitos
console.info(numer1*numer2)
console.info(numer1+ Number(numer2))
console.info(numer1-numer2)
console.info(numer1/numer2)
console.info(Number.isFinite(numer2))//dice si es finito o infinito con true o false
console.info(Number.MAX_VALUE)//el numero mas grande que puede tener js
console.info(Number.MIN_VALUE)//el numero mas pequeño de js
console.info(Math.PI)//llama a pi


const ejNumber=84
console.info((ejNumber).toExponential)//para poner exponencial
console.info((ejNumber).toExponential(5))//para saber si es exponencial al Nmro. 
console.info(ejNumber.toString)//para ponerlo en string
console.info(ejNumber.toString(2)) //convierte a numero binario
console.info(ejNumber.toString(8))//convierte a numero en octal
console.info(ejNumber.toString(16))//convierte a numero en exadecimal

const ejNumer2=5.12
document.write(ejNumer2)
console.info(ejNumer2.toFixed()) //saca los decimales
console.info(ejNumer2.toFixed(2))// le agrega los decimales dependiendo del numero qe pongas en los parentecis
console.info(Math.round(ejNumer2))// para redondear
console.info(Math.floor(ejNumer2))//redondea hacia abajo
console.info(Math.ceil(ejNumer2))//redondea hacia arriba
console.info(Math.trunc(ejNumer2))//omite los decimales
console.info(Number.parseInt(ejNumer2))
console.info(Number.parseFloat(ejNumer2))//decimales

//const aleatorio=Math.random()
//document.write(aleatorio)// genera aleatorio decimal

//const aleatorio=Math.trunc(Math.random()*100)// buscar en chat gpt
//document.write(aleatorio)

const aleatorio=Math.trunc(Math.random()* (100-50+1)+50)// de 50 a 100  formula de cualquier rango de numero
document.write(aleatorio)




// LA CLASE MATH Y LOS METODOS MAS USADOS

console.log(Math.abs(-50))//VALOR ABSOLUTO toma el numero y lo transforma en positivo
console.log(2*2*2*2*2)// eleva 2 a la 5 de manera normal
console.log(Math.pow(2,80)) //eleva 2 a la 80 pero es con cualquier numero
console.log(Math.sqrt(25))//saca la raiz cuadrada de un numero en este caso de 25
console.log(Math.cbrt(156))//saca el cubo de un numero

let numero3=45
if (numero3>0){
    console.log("positivo")
}
else{
    console.log("negativo")
}//para determinar si un numero es positivo o un numero negativo pero de forma larga

console.log(Math.sign(456)) //esto lo determina de manera mas corta si es positivo o negativo con un -1 o un 1

listanumeros=[1,5,3,9]
console.log(listanumeros.sort())//determinar el numero mayor metodo de listas
console.log(Math.max(1,5,3,9))// toma el mas grande
console.log(Math.min(1,5,3,9))//toma el mas pequeño 



