

let variable1=12
let variable2="4"//se pueden dejar vacias las let las const no
let variable3="hola mundo"
let variable4=true
let variable5=null
let variable6=undefined
let variable7=[1,2,3,4,5]
//let variable8={"nombre" , "apellido" ,"age":27}
//let variable9= function ( ){}


console.log("variable1", typeof variable1)
console.log("variable1", typeof variable2)
console.log("variable1", typeof variable3)
console.log("variable1", typeof variable4)
console.log("variable1", typeof variable5)
console.log("variable1", typeof variable6)
console.log("variable7", typeof variable7)
console.log("variable8", typeof variable8)
//console.log("variable9", typeof variable9)

//OPERADORES ARITMETICOS
let numero1=6
let numero2=8

let suma=numero1 + numero2
let resta=numero1 - numero2
let multiplicacion=numero1 * numero2
let division=numero1 / numero2
let potencia=numero1**numero2
let modulo=numero1% numero2 //el residuo de la division

console.info(suma)
console.info(resta)
console.info(multiplicacion)
console.info(division)
console.info(potencia)
console.info(modulo)

//groupcollapsed crea grupos en la consonla

//OPERADORES DE INCREMENTO Y DECREMENTO----- se utilizan mucho en ciclos
let numeroincremento=0
console.info(numeroincremento)

numeroincremento++ //suma de a uno y si le incrementas mas lineas suma de a uno. con esta 1 con otra igual 2 y asi
numeroincremento++// este aumenta 2, esta funcion solo sirve pa las suma de a una unidad
numeroincremento+=4 //este aumenta el numero que yo quiero que aumente en este caso me suma 4 mas osea.. 6 porque ya teniamos 2
console.info(numeroincremento)

let numerodecremento=100
console.info(numerodecremento)

numerodecremento-- //disminuye de a uno lo mismo qe en la suma
numerodecremento--
numerodecremento-=4
console.info(numerodecremento)

let numero3=2 //de multiplicacion
let numero4=20
let numero5=30
console.info(numero3, numero4, numero5)

numero2*=10
console.info(numero2)

//OPERADORES DE COMPARACION

let respuesta= true
//operadores de igualdad
console.log(4==4)//true 
console.log(4=="4")//true
console.log(4==="4")//false

//operador de diferencia
console.log(4 !=4)//false el elemento no es diferente 
console.log(4 !="4")//false
console.log(4 !=="4")//true el elemento si es diferente
console.log(4 !=4)//false

//un operador menos que "<"

console.log(2<5)//true
console.log(60<35)//false
console.log(5<5)//false
console.log(15<=15)//true

//operador mayor que ">"

console.log(2>5)//false
console.log(60>35)//true
console.log(5>5)//false
console.log(15>=15)//true

//OPERADORES LOGICOS
//la && anuda  AND
console.log(2<5 && 2>1) //true mas true es igual a true, para que sea true las 2 deben ser verdaderas
console.log(2>1 && 10>6 && 100>89 && 5<1) //false todas deben ser verdaderas para tener true

//operador or ||
console.log(5<10 || 2<8)//true todas las operaciones son verdaderas
console.log(50>100 || 6>3) //si una sola es verdadera la operacion se cumple
console.log(5>20 || 11>35 || "javier"=="Javier")// todas son falsas. osea false

//OPERADORES LOGICOS ANIDADOS
console.log((4<10 && 2<60) || ("operador"=="Operador") )


//operador de negacion NOT (!), ES DE LOS BOOLEANOS, SI ESTA TRUE Y LE PONGO EL NOT LO CONVIERTE A FALSE O SI ESTA FALSE Y PONGO NOT LO CONVIERTO EN TRUE

let variable= false
console.log(!variable)//truex

























