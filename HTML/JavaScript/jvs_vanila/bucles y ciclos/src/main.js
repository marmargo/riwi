// CICLO FOR SIMPLE let cuenta las vueltas i contador
for (let i=1; i<=10; i++){
    console.log("hola mundo")
}


let tabladel=2;
let resultado;
for (let i=1; i<11; i++){
    resultado=tabladel*i;
    console.log(tabladel,"x", i, "=", resultado );
}


//CICLO WHILe ejecuta una accion mientras algo se mantenga como tener una pagina iniciada
// let i=1
// while(i<=10){
//     conslotchange.log("hola mundo")
// }

//for simple dime de donde hasta donde
const listfruits=["apple", "orange", "banana", "grapes", "strawberry", "kiwi", "pineaple", "watermelon", "mango", "pear", "peach", "plum", "cherry","blueberry", "raspberry","blackberry", "lime","coconut", "pomegranate"]
console.table(listfruits)
for (let i=0; i<listfruits.length; i++)// siempre se empieza en la posicion 0 por que el array cuenta desde 0
{console.info(listfruits[i])}

//foreach- more simple  paseme la lista yo la recorro toda 
listfruits.forEach(element => {
    console.info(element)
    
})

listfruits.forEach(function (element,index) { //element es cada elemento de la lista, si fuera un numero lo llamamos number para acceder a la posicion es index
    console.info(index, "=" ,element)
    
})

//ejemplo forsimple
const nombres=["Ana García","Juan Martínez","María López","Carlos Rodríguez","Laura González","Pedro Fernández","Sofia Pérez","Alejandro Sánchez","Julia Ramírez","Miguel Torres"]
console.table(nombres)
for (let i=0; i<nombres.length; i++)
{console.info(nombres[i])}

//ejemplo for each con flecha
nombres.forEach(element => {
    console.info(element)
    })

//for each sin flecha
nombres.forEach(function (nombres) {

//     //para llamar el nombre no mas
    let name = nombres.split(" ")
//     //para llamar solo la primera letra
    let letra1= name[0].charAt(0).toUpperCase()
//     //para llamar apellido con letra
    let apellido = letra1.concat("_",name[1])
    console.info(nombres, "=>", apellido)
   //para llamar un nombre
   for (let i=0; i<nombres.length; i++)
   {console.info(nombres[2])
}})

//foreach para objetos
const coder={
    name: "mariana",
    lastname: "martinez",
    height: 160,
    age: new Date("16-12-1996 10:00:00"),
    id: "1036670042",
    country: "colombia",
    weight: 60,
    mail: "marimarhola16@gmail.com",
    gener: "femenino"
}
// //imprime los datos
// console.table(coder)
// //para imprimir solo el apellido
// console.info(coder.lastname)


 //object.keys imprime todos los items 
 //object.value imprime la respuesta d elos items
 console.info(Object.keys(coder))
 console.info(Object.values(coder))
 //recorrer todo un objeto de forma manual
 Object.keys(coder).forEach(key =>{
    console.info(coder[key])
 })

 //for in recorre todo el objeto de forma automatica y me da los indices 
 for (const key in coder) {
    console.info(coder[key])
}
//for of para listas
for (const iterator of nombres) {
    console.info(iterator)
    
}

//object entries investigar

//llamar.. foto slack

//map retorna un nuevo array investigar .push
const listanumer=[2,5,75,4,9]
const multiplica=[]
listanumer.forEach(number=>{
    console.info(`${number} x2 = ${number*2}`)
    multiplica.push(number*2)
    })
const multiplica2=listanumer.map(number=>{
    console.info(`${number}x2 = ${number*2}`)
})

//numeros del 0 al 100 y devolver pares
const variable=[]
console.log(variable)
for (let i=0; i<=100; i++){
    console.log(i);
    variable.push(i)
}


for (let i=0; i<=100; i+=2) {
    console.log(i)
}
//otra forma
const pares1=[]
const pares=variable.map(number=>{
    if (number%2 ===0){
        return number
    }
})






 








 









