let calculadora= prompt('que operacion deseas hacer: 1:sumar 2:restar 3:multiplicar 4:dividir');
let numero1=Number(prompt('ingrese el primer numero:'))
let numero2=Number(prompt('ingrese el segundo numero:'))
let total;

if(calculadora==1){
    total= numero1+numero2
    alert('el resultado de la suma es de:' +total)
}

else if(calculadora==2 ){
    total= numero1-numero2
    alert('el resultado de la resta es de: ' +total)
}

else if(calculadora==3){
    total=numero1*numero2
    alert('el resultado de la multiplicacion es:' +total)
}

else{
    alert('opcion de operacion incorrecta')
}

