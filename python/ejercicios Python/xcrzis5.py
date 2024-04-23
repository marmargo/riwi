"""persona= {
        "nombre":"mariana",
         "edad": "27 años",
        "ciudad": "Medellin"
        
    }


persona["ocupacion"]="estudiante"
print(persona)

persona={
    "nombre":"mariana",
         "edad": "27 años",
        "ciudad": "Medellin"
        
    }

edad=persona["edad"]
print(edad)

libro={
    "titulo":"it",
    "autor":"king",
    "año":"1987"

}

informacion={
    **persona, **libro

}
print(informacion)

#cambiar una propiedad en el diccionario persona
print("cambiar una propiedad, en este caso medellin por itagui",persona)
persona["ciudad"]="itagui"
print("cambio realizado ", persona)"""

"""print("eliminaremos el autor de",libro)
del libro["autor"]
print("asi queda la biblioteca despues de eliminar el autor",libro)"""

"""coche={
    "modelo":"cav4",
    "marca":"toyota",
    "año":"2020"
}
print(coche)"""

"""circulo={"radio":15,
         "color":"azul"
         }
pi=3.1416
area=pi*circulo["radio"]**2
print(area)

rectangulo={
    "ancho":20,
    "alto":40
}
perimetro=2*rectangulo["ancho"]+rectangulo["alto"]
print(perimetro)

formas={**circulo, **rectangulo}
print(formas)"""

"""computadora={
    "marca":"asus",
    "modelo":"vivobook15",
    "precio":3000000
}

computadora["precio"]
print(computadora["precio"])

computadora["tarjeta"]="si"
print(computadora)"""

"""mascota={
    "nombre":"tobias",
    "especie":"perro",
    "edad":"6 años"
}
print (mascota["especie"].upper())"""

# fruta={
#     "nombre":"manzana",
#     "color":"roja",
#     }

# estudiante={
#     "nombre":"ana",
#     "edad":15,
#     "matematica":5.0,
#     "español":5.0,
#     "ciencias":3.5
#     }

# calificaciones=estudiante["matematica"]+estudiante["ciencias"]+estudiante["español"]/3
# print(calificaciones)

# bolsa={
#     "tamaño":"5cm x 10cm",
#     "color":"blanco"
# }
# print(bolsa["tamaño"])


# telefono={
#     "marca":"xiaomi",
#     "modelo":"note11",
#     "sistema operativo":"android"
# }
# print(telefono["sistema operativo"])

# telefono["Ram"]="16gb"
# print(telefono)

# animal={
#     "tipo":"gato",
#     "sonido":"miau"
# }
# print(animal["sonido"])

# vuelo={
#      "aerolinea":"avianca",
#      "numero de vuelo":"MH589",
#      "hora de salida":"9.55 pm"
#  }
# print(vuelo["aerolinea"], vuelo["hora de salida"])

# vuelo["destino"]="bahamas"
# print(vuelo)

# jugador={
#     "nombre":"higuita",
#     "equipo":"colombia",
#     "posicion":"delantero"
# }
# print(jugador["nombre"],jugador["equipo"])