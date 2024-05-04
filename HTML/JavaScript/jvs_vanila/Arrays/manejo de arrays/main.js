let array=[1,2,3,4,5,6,7,8,9,10]
let array2=array.reverse(function(item){
    return item*2
})// te pone los numeros del 10 al 1
console.log(array2)

let array3= array.toReversed()
console.log(array3)
console.log(array)
//reverse altera el array original, el toReversed altera la lista pero no el primer elemento, en este caso el 1

let frutas=["manzana","fresas","cereza","mora","banano"]
let frutaas=frutas.toReversed(function(frutas){
    return frutas.toUpperCase()
    
})
console.log(frutaas)
console.log(frutas)


