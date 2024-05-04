alert("hola mundo")//es una funcion porque no necesita una clase para funcionar math.pow cuenta como metodo. porque math es una clase
//[ listas] (objetos) 
//para nombrar las funciones es importante ser detallado, para que es la funcion.. en este caso para saludar a los coders
function saludarcoders(){alert("hola coders, es un gusto saludarlos")
console.info("hola coders, es un gusto saludarlos")
}
//para llamar la funcion:
saludarcoders() //la funcion puede ponerse antes de crear la funcion.. osea.. si esta casilla 8 pasara a la casilla 1 pero solo en JAVASCRIPT

//para pasar parametros (parametros viven y mueres cuando cumplen la funcion)
function saludarempleados(empleados){
    console.info("hola " +empleados+ ", es un gusto saludarlos")
    //para agregar otro mensaje agrego un nuevo console
    console.log("hoy es un nuevo dia")
    
}
// ej remplaza el valor de empleados por enfermeros, medicos etc. ej
saludarempleados ("enfermeros")
saludarempleados ("medicos")
saludarempleados ("policias")
saludarempleados ("coders")

//crea una funcion que salude a los coders, esta funcion debe recibir nombre y clan, despues crea otra funcion que despida al coder y llama las funciones
function diascoders(coders){
    console.info("hola "+coders+ ", Buenos dias, hoy es viernes y google lo sabe")
}
diascoders("clan gates")
diascoders()

function adioscoders(coders){
    console.info("adios "+coders+ ", feliz tarde, disfruta el finde")
}
adioscoders("clan gates")
adioscoders()

//hay funcion clasica y funcion flecha flecha para investigar

//funcion declarativa
function holamun(){
    console.log("hola mundo")
}
holamun()

//funcion expresiva usa el const en vez de la funcion, y esa es mas estricta, no te permite llamar la funcion antes de crearla
const holamunex=(){
    console.log("hola mundo")
}
holamunex()

//sumar 2 numeros
function sumar(numero1, numero2){
    let respueta=numero1+numero2
    return respueta

}
let suma1=sumar(10,20)
console.log(suma1)


// buscar en lenguajejs.com/javascript/fechas/date-fechas-nativas/ leer eso. 






