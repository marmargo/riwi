totalc=float(input("por favor ingrese el total neto de la cuenta:"))
porcen=float(input("por favor ingrese el porcetaje que desea dejar de propina "))
porcien=porcen*totalc/100
totalcompl=porcien+totalc
print("el total de su cuenta con propina incluida es", totalcompl)
