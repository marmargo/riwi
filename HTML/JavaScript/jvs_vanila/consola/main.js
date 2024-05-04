let fullname=prompt("Enter your fullname")

let userName="mariana"
console.log(userName)

let lastName="martinez"
console.log(lastName)

const age="27 años"
console.log(age)

// var ya no se utiliza se utiliza let o const


const mail="mariana.martinezg@udea.edu.co"
let adress="calle 43 #50-25"
let phone="3147303557"

console.group()
console.info("Data basic information")
console.debug(mail)
console.info(adress)
console.log(phone)
console.groupEnd()


console.log("userName:"+ userName + " " + lastName)
console.log("age:", age , mail , )

listCodersGates=["pedro perez","pepito pito"," reynaldo rey"]
console.table(listCodersGates)

//las alertas son para que el anuncio salga directamente al usuario. 
//ej. alert()