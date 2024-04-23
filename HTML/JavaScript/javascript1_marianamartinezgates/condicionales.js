//1
let positivo=6
console.log(6>0)
//2
let negativo=-6
console.log(-6>0)
//3
console.log(positivo % 2===0)
//4
console.log(negativo % 2!==0)
//5
let cinco=5
console.log(cinco% 5===0)
//6
let tres=3
console.log(tres%3 ===0)
//7
console.log(120>100)
//8
console.log(-50<0)
//9 rangp entre 20 a 50
function estaEnRango(numero) {
    return numero >= 20 && numero <= 50;
  }
  console.log(estaEnRango(15))
  console.log(estaEnRango(25))
  console.log(estaEnRango(55))

//10
console.log( positivo>0)
//11
function estaEnRango(numero) {
    return numero >= -10 && numero <= 10;
  }
  console.log(estaEnRango(15))
//12
let año=Math.trunc(Math.random()*100)
if (((año%4==0) && (año%100 !==0)) || (año%400===0))
{
  console.log(`el año ${año} es bisiesto`)
}else { 
  console.log(`el año ${año} no es bisiesto`)
}

//13

const aleatorio=Math.trunc(Math.random()* (100-100+1)+100)
console.log(aleatorio>=18)

//15
console.log(Math.sqrt(48))
//16

//17
console.log(Math.pow(48,2))

//18

//19
let cadenaa="estamos aprendiendo escribir en codigo javascript"
console.log(cadenaa.includes("javascript"))
//20
console.log(cadenaa.length>10)
//21
console.log(cadenaa===cadenaa.toLowerCase())
//22

//40
console.log((positivo/cinco)<10)








