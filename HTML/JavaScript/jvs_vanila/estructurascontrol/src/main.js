//CONDICIONALES SIMPLES
const nombre="juan"
if (nombre=="juan")
 {
    console.log ("hola"+ nombre)
}

const edad=18
if (edad>=18){
    console.log("eres mayor de edad y puedes botar")
}

//si la condicion se cumple o no se cumple IF ELSE

const poderbeber=18
const miedad=19
if (miedad<18){
    console.error("estas cometiendo una infraccion")
}

if ((miedad<18) && (miedad>0)){
    console.error("estas cometiendo una infraccion ")
}else {
    console.error("puedes beber, no manejes ebrio")
}

if (true){
    console.log("opcion verdadera")
}else{
    console.log("opcion falso")

}

const username="cualquiera"
const contraseña="contraseña"

if((username=="cualquiera") && (contraseña=="contraseña")){
    console.info("puedes ingresar")
}else{ console.log("opcion invalida")}



//condicion if else -if
//numero positivo(aleatorio)
let numero=Math.floor(Math.random()*100) // numero aleatorio de 0 a 100 positivos
if(numero===0){
    console.log("es un numero neutro")
}else if (numero<0){
    console.log("el numero", numero, "es un numero negativo")
}else{ 
    console.log("el numero", numero, "es un numero positivo")
}
//numero negativo(aleatorio)
let numero2=Math.floor(Math.random() *(5- (-5))+(-5)) // para un numero negativo
if(numero===0){
    console.log("es un numero neutro")
}else if (numero<0){
    console.log("el numero", numero, "es un numero negativo")
}else{ 
    console.log("el numero", numero, "es un numero positivo")
}



let transporte=prompt("como viajas a riwi?")
if (transporte=="pie"){
    console.log("tu viajas a pie")
}else if(transporte=="bicicleta"){
    console.log("tu viajas en bicicleta")
}
else if(transporte=="metro"){
    console.log("tu viajas en metro")
}
else if(transporte=="bus"){
    console.log("tu viajas en bus")
}else{
    console.log("tu viajas genial")
}



es como if o else 
switch(transporte){
    case "carro":
        console.log("tu viajas en carro")
        break;
    case "moto":
        console.log("tu viajas en moto")
        break;
    default: 
    console.log("tu viajas diferente")
    break;
}

//la diferencia entre if else y switch  es que con if else puedo anidar con mas condicionales por ej. && || switch solo pregunta una sola vez

let cena=prompt("que quieres comer?")
if (cena=="carne"){
    console.log("en el menu hay varias opciones de carne")
}else if(cena=="ensalada"){
    console.log("en el menu hay varias opciones de ensalada")
}
else if(cena=="pastas"){
    console.log("solo los jueves tenemos opciones pastas y pizzas")
}
else if(cena=="sopa"){
    console.log("en el menu tenemos varios tipos de sopas")
}else{
    console.log("no tenemos tu opcion, pero podemos ofrecerte una deliciosa costilla bbq")
}

switch (viajes) {
    case "san andres":
        console.log("el tour para san andres esta programado para mayo")
        break;
    case "amazonas":
        console.log("el tour para san andres esta programado para junio")
         break;
    case "cartagena":
        console.log("el tour para san andres esta programado para julio")
        break;
    case "bogota":
        console.log("no hay opciones de viaje a bogota")
        break;

    default:
    console.log("no tenemos esa opcion, pero programaremos tu viaje")

        break;
}

let menu=prompt('
menu
[1] carne 80;
[2] pollo 60;
[3] pescado 90;
')

if( menu==1 && saldo>= 80){
    console.log("puedes comer carne")
}
else if( menu ==2 && saldo>=60){
    console.log("puedes comer pescado")
}else{ 
    console.log("no tienes saldo suficiente")
}










