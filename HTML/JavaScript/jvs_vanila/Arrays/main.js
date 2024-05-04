//array simple
const arraysimple=[1, "alfa", true,[2,3,4,5], {"name":"javier"}]
const arraysimple2=[]
const arraysimple3=["uno","dos","tres"]
const arraysimple4= new Array(3)

arraysimple4.push("hola mundo")// push agrega al final
arraysimple4.pop()//elimina el ultimo
arraysimple4.unshift("hola mundo")//agrega al inicio
arraysimple4.shift()//elimina el primer elemento
arraysimple4.splice(1,1)//elimina el array con la posicion

console.info(arraysimple)
console.info(arraysimple2)
console.info(arraysimple3)
console.info(arraysimple4)
//para cambiar el javier por hola mundo
const opcion1= Array.from(arraysimple[4].name)
console.info(arraysimple[4].name)//coge el javier
const opcion2= arraysimple[4].name.split("")
console.info(opcion2)
const option1=Array.from("hola mundo")//divine la palabra en letras
const option2="hola mundo".split("")//hace lo mismo qe option1

const alfabeto=["a","b","c","d","e",[1,2,3,4]]
console.log (alfabeto[3])// coge la d
console.log(alfabeto[5])
console.log(alfabeto[0])
console.log(alfabeto[0])//coge la a
console.log(alfabeto.at(-1))//de atras para delante el at solo sirve para extraer un elemento
console.log(alfabeto.at(4))//llama la e pr ej
alfabeto[0]="alpha" //cambia la a por alpha por ej. para actualizar son los corchetes
console.log(alfabeto)
eliminar=alfabeto.pop()
eliminarr=alfabeto.shift()
delete alfabeto[0]// para resaltar el espacio vacio
console.log(alfabeto)
alfabeto[15]="tango" //no hay posicion 15 pero crea espacios para poner en la posicion 15 tango osea x11
console.log(alfabeto)
console.log(alfabeto.indexOf("zulu"))//nose investigar indexof
console.log(alfabeto.includes("e4"))//nose investigar includes
 

//union de arrays
let clangates=["david","luisa","simon"]
let clangosling=["mariana","kevin","pablo"]
clangates.push(clangosling)//une gates y gosling pero se ve con la flecha 
console.log(clangates)
let clanGates=clangates.concat(clangosling)//los une pero los muestra sin laflechita// es mejor usarlo
console.log(clanGates)
//join une, el split rompe
console.log(clanGates.join("-"))

//recorrer un array
let numeros=[1,2,3,4,5]
let numeros2=[6,7,8,9,10]
let numeros3=numeros.concat(numeros2)
console.log(numeros3.join("-"))
console.log(numeros3)
console.log(Array.from(numeros3))

//opcion 2
let numeros9=[1,2,3,4,5,6,7,8,9,10]
console.log(numeros9)
let numeros8=numeros9.join("-")
console.log(numeros8)
console.log(numeros8.split("-"))


//from pasa de strings a arrays
//con map puedo utilizar un return recorre y de devuelve un array de string a array

  





