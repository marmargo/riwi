numropa=int(input("Buenas tardes, Bienvenido a la tienda virtual, me podria indicar cuantas prendas desea llevar?"))
print("estamos calculando su descuento")


if numropa>=5 and numropa<=10:
    print("tiene un descuento del 5%")
elif numropa>=11 and numropa<=20:
    print("tiene un descuento del 10%")
elif numropa>=20:
    print("tiene un descuento del 15%")
else: 
    print("no tiene descuento")

cuatroomin=17000
cincoadiez=15000
onceveinte=12000
masveinte=10000

porcen5=5
porcen11=10
porcen15=15

cinco=numropa*cincoadiez/100
once=numropa*onceveinte/100
veinte=numropa*masveinte/100


print("el precio por prenda varia segun la cantidad de productos que lleva")
print("el valor total de su factura es")

var1=numropa*(cincoadiez-(cincoadiez*porcen5))
var2=numropa*onceveinte+once
var3=numropa*masveinte+veinte
var4=numropa*cuatroomin

if numropa>=5 and numropa<10:
    print(var1,"pesos")
elif numropa>=11 and numropa<20:
    print(var2,"pesos")
elif numropa>=20:
    print(var3,"pesos")
else:
    print(var4,"pesos")

print("gracias por su compra") 

