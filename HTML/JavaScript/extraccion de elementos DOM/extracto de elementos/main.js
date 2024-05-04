//DOM el dom es el mismo documento html, todo el docuemnto pagina. 
//los element son una trilogia que hace qe todo html y css se junten 

//clase de extracto de elementos son una trilogia qe funcioanan juntos
//normalize.css es un archivo que nos ayuda a estar en todos los navegadores

//document llama a index
let one= document.getElementById("btn-one")//llama un elemento con id
let two= document.getElementsByClassName("btn-two")//llama un elemento con clase
let three=document.getElementsByClassName("btn-three")//llama un elemento con name
let four=document.getElementsByTagName("btn-four")//este llama a todos los btn four que existan

console.log(one)
console.log(two[0])
console.log(three)
console.log(four)

let uno=document.querySelector("#btn-uno")// con query selector si es clase con punto y si es id gatico
let dos=document.querySelector("#btn-dos")
let tres=document.querySelectorAll("#btn-tres")//el queryselector all busca todos los similares, el selector solo, busca el primer elemento igual
let cuatro=document.querySelector("#btn-cuatro")

console.log(uno)
console.log(dos)
console.log(tres)
console.log(cuatro)

