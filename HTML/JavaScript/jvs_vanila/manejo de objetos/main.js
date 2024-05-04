//this. nombre por ej. es la manera de llamar al elemento del objeto 
// let persona={
//     nombre:'juan',
//     edad:25,
//     ocupacion: Coder
//     saludar: function() //si la funcion esta vacio toma el valor de saludar
//     console.log (hola, soy ${this.nombre});
// }
// para agregar la propiedad 
// persona.email='hola@gmail.com'

//defineproperty
//assign
//camelcase
//pascalcase
//snakecase

const coderiwi={
    name:"mariana",
    lastname:"martinez",
    cumpleaños:new Date("1996-04-2023"),
    rh:"0+",
    address:
    {pais:"colombia",
    ciudad: "antioquia",
    barrio: "laureles",
    direccion: "calle43",
    },
    phone:"3147303557",
    skills:["html, python, javascript, css"],
    saludar: function(){
        console.log(`hola mundo soy mariana y soy coder de ${this.name} y estudie ${udea} en la UdeA`)
    }
}
const coder="riwi"
const udea="politica"

function saludar(){
    console.log(`hola mundo soy mariana y soy coder de ${coder} y estudie ${udea} en la UdeA`)
}
console.log(coder)
console.log(udea)
saludar()
console.log(coderiwi.name)
console.log(coderiwi['name'])
coderiwi.saludar()
console.log(coderiwi.address.direccion)//llama el objeto dentro de un objeto
console.log(coderiwi.skills[2])//lama al elemento de la lista dentro del objeto

//para adicionar informacion

console.log("adding")
coderiwi.identificacion="1036670042"
coderiwi.name="mar"//actualiza// modifica o coderiwi["name"]="mari"
console.log(" ")
console.log(coderiwi)
coderiwi.clan="linux"
coderiwi.clan="Gates"
Object.defineProperty(coderiwi,"clan",{
    value:"linux",
    writable: true,// si se pone en false no puede modificar
    enumerable: true,// permite que la propiedad aparezca
    configurable: true,//permite que la propiedad sea eliminada
})

// coderiwi.contactoemergencia={
//     nombrec:"berta c",
//     numero:"3192489517",
//     casa:"604- 4873210"
// }
Object.assign(coderiwi,{
    nombrec:"berta c",
    numero:"3192489517",
    casa:"604- 4873210"
})//adiciona pero no como otro objeto dentro del objeto pero para que si de se hace=
Object.defineProperty(coderiwi,"contactoemergencia",{
    value:{
        nombrec:"bertac",
        numero:"3192489517",
        casa:"4873210"
    }
})

delete coderiwi.clan// elimina
coderiwi.clan=undefined

/////sumar objetos

const objt1={
    a:"uno"
}
const objt2={
    b:"dos"
}
const objt3={
    a:"tres"
}
const objt4={
    a:"cuatro"
}

const sumaobjetos= Object.assign(objt1,objt2)
console.log|("suma",sumaobjetos)

const sumaobjetos2={...objt3,...objt4}
console.log("objt3",objt3)
console.log("objt4", objt4)
console.log("suma",sumaobjetos2)

/// destructuracion saca uno uno y lo mete en variables
const example={
    username:"jhon",
    usermail:"holita@gmail.com",
    contraseña: "holita"
}
//forma manual
const username= example.username
const usermail=example.usermail
const contraseña=example.contraseña

console.log(username)
console.log(usermail)
console.log(contraseña)

/// oooo let{ username,usermail,contraseña}=example

//o alterar informacion (sacar informacion con el nombre de las variables)
let { username:user,
     usermail:Email, 
     contraseña:contraseñaa}=example
console.log(user)
console.log(Email)
console.log(contraseñaa)
