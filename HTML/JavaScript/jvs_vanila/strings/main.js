    //declaracion de strings.
let ComillaSimple='hola mundo'
console.info(ComillaSimple)

let ComillasDobles="hola mundo"
console.info(ComillasDobles)

let StringTemporal=1565165
console.info(StringTemporal)

//las comillas dobles son los padres de las comillas simples, las contienen
//new string o string solo son strings normales, solo que se llaman diferente

//para saber cuantos caracteres tiene un escrito
const fullName="ijfivjgijiojrijri"
const cantidadecaracteres= fullName.length
console.info ("la cantidad de caracteres es", cantidadecaracteres)
//lenght es para contar los caracteres incluso los espacios en blanco

//extraccion de caracteres la primera letra la cuenta como 0
//primera forma
let extraer= fullName[7]
console.info(extraer)
//segunda forma
let extraer2= fullName.charAt(7)
console.info(extraer2)

console.info(fullName[0])
console.info(fullName[14])

console.info(fullName.charAt(0))
console.info(fullName.charAt(14))


//backtick INVESTIGAR

let nombre="mariana"
let apellido="martinez"
let age="27 años"

console.info("hola mundo, mi nombre es" +nombre+" "+apellido+" tengo "+age)
console.info("hola mundo, mi nombre es", nombre, apellido, "y tengo", age)

//TRANSFORMACIONES 
//tolocaleuppercase pone las letras en mayusculas
//tolowercase cambia las letras a minusculas

const mensaje="hola mundo"

console.info(mensaje.toLocaleUpperCase())
document.write(mensaje)

const mensaje2="HOLA MUNDO"

console.info(mensaje2.toLocaleLowerCase())
document.write(mensaje2)

//concatenacion concat

const mensaje3= "hoy es un nuevo dia"
console.info(mensaje.concat(mensaje3))
console.info(mensaje+mensaje3)// esta es otra manera


//buscar informacion //los espacios tambien cuentan
//starswhit investigar
//includes
//endswith

const mensaje4= "hola mundo"
console.log(mensaje4.startsWith("familia"))
console.log(mensaje4.startsWith("hola"))
console.log(mensaje4.includes("mundo"))
console.log(mensaje4.includes("soy"))
console.log(mensaje4.endsWith("lo que sea"))
console.log(mensaje4.endsWith("undo"))

//limpieza de string 
//trimStart borra los espacios del comienzo
//trimend borra los espacios del final
//trim borra los espacios del comienzo y el final

const mensaje5= "     hola mundo   "
console.info(mensaje5)
console.info(mensaje5.trimStart())
console.info(mensaje5.trimEnd())
console.info(mensaje5.trim())

//remplazo de caracteres
//replace o replaceAll que modifica todas las palabras qe encuentre , la letra g te vuelve todo global
//repeat repite el numero qe quieras


const coder="soy un coder de riwi y me parece que riwi tiene mucho que aprender"
console.info(coder)
console.info(coder.replace("coder", "programador"))
console.info(coder.replaceAll("riwi","centro de entrenamiento"))
console.info(coder.replace(/[aeou]/g,"i")) //remplaza todas las letras por i, la g es para qe sea en todo 
console.info(coder.repeat(2))

//relleno de strings

const relleno="3000"
document.write(relleno)
console.info(relleno.padStart(4,"--"))
console.info(relleno.padEnd(4,"--"))


//fragmentar un string slice o substring es lo mismo puedes llamar cualquiera
const fragmentar="ser un coder de riwi destruye tu vida"
document.write(fragmentar)
console.info(fragmentar.substring (0,12))

//split convierte las cosas en listas letra por letra

console.info(fragmentar.split("."))

//buscar la posicion de las letras indexoff //busca slice  //search busca la posicion de una palabra clave) 
 
console.info(fragmentar.search("riwi"))
console.info(fragmentar.indexOf("i")) //la letra i esta en la posicion 17
















 


