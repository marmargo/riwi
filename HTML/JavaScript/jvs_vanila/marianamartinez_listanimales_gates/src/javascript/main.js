// Lista de mascotas previamente registradas
let mascotas = [
    {
        nombre: "Luna",
        especie: "Perro",
        raza: "Labrador",
        fechaNacimiento: new Date(2019, 4, 15),
        peso: 20,
        estado: "estable",
        propietario: {
            nombre: "Sebastian",
            documento: "1036670040",
            telefono: "3662290",
            correo: "juan@gmail.com"
        }
    },
    {
        nombre: "Tobias",
        especie: "Perro",
        raza: "criollo",
        fechaNacimiento: new Date(2020, 2, 29),
        peso: 16,
        estado: "estable",
        propietario: {
            nombre: "Mariana",
            documento: "1036670042",
            telefono: "3662294",
            correo: "marimarhola16@gmail.com"
        }
    },
    {
        nombre: "coca colo",
        especie: "gato",
        raza: "egipcio",
        fechaNacimiento: new Date(2020, 7, 19),
        peso: 11,
        estado: "estable",
        propietario: {
            nombre: "Santiago",
            documento: "1036670041",
            telefono: "3662291",
            correo: "santiago@gmail.com"
        }
    },
    {
        nombre: "queso",
        especie: "gato",
        raza: "angora",
        fechaNacimiento: new Date(2022, 8, 27),
        peso: 18,
        estado: "estable",
        propietario: {
            nombre: "Santiago",
            documento: "1036670041",
            telefono: "3662292",
            correo: "santiago@gmail.com"
        }
    },
    {
        nombre: "manguito",
        especie: "Perro",
        raza: "collie",
        fechaNacimiento: new Date(2019, 10, 1),
        peso: 25,
        estado: "estable",
        propietario: {
            nombre: "Jose luis",
            documento: "1036670045",
            telefono: "3662299",
            correo: "jluismunevar@gmail.com"
        }
    },
    {
        nombre: "perro",
        especie: "gato",
        raza: "birmano",
        fechaNacimiento: new Date(2019, 4, 15),
        peso: 7,
        estado: "critico",
        propietario: {
            nombre: "Sara",
            documento: "1036670046",
            telefono: "3662298",
            correo: "sara@gmail.com"
        }
    },
    {
        nombre: "papita frita",
        especie: "Perro",
        raza: "pincher",
        fechaNacimiento: new Date(2018, 12, 10),
        peso: 19,
        estado: "critico",
        propietario: {
            nombre: "Saray",
            documento: "1036670043",
            telefono: "3662296",
            correo: "sary@gmail.com"
        }
    },
    {
        nombre: "lola",
        especie: "iguana",
        raza: "reptil",
        fechaNacimiento: new Date(2023, 5, 26),
        peso: 5,
        estado: "estable",
        propietario: {
            nombre: "brian",
            documento: "1036670695",
            telefono: "3662297",
            correo: "br89a@gmail.com"
        }
    },
    {
        nombre: "polo",
        especie: "Perro",
        raza: "bull dog",
        fechaNacimiento: new Date(2019, 11, 5),
        peso: 32,
        estado: "estable",
        propietario: {
            nombre: "daniel",
            documento: "1036670070",
            telefono: "3662289",
            correo: "dani@gmail.com"
        }
    },
    {
        nombre: "Lulu",
        especie: "gato",
        raza: "siames",
        fechaNacimiento: new Date(2017, 7, 9),
        peso: 13,
        estado: "critico",
        propietario: {
            nombre: "luisa",
            documento: "1036670040",
            telefono: "3662288",
            correo: "lululu@gmail.com"
        }
    },

];



// Función para registrar una nueva mascota
function registrarMascota() {
    const nombre = prompt("Nombre de la mascota:");
    const especie = prompt("Especie:");
    const raza = prompt("Raza:");
    const fechaNacimiento = prompt("Fecha de nacimiento (YYYY-MM-DD):");
    const peso = parseFloat(prompt("Peso (kg):"));
    const estado = prompt("Estado (estable/crítico):");
    const propietarioNombre = prompt("Nombre del propietario:");
    const propietarioDocumento = prompt("Documento del propietario:");
    const propietarioTelefono = prompt("Teléfono del propietario:");
    const propietarioCorreo = prompt("Correo del propietario:");

    registerPet(nombre,
        especie,
        raza,
        fechaNacimiento,
        peso,
        estado,
        propietarioNombre,
        propietarioDocumento,
        propietarioTelefono,
        propietarioCorreo)

    console.log("Mascota registrada exitosamente.");
}

function registerPet(
    nombre,
    especie,
    raza,
    fechaNacimiento,
    peso,
    estado,
    propietarioNombre,
    propietarioDocumento,
    propietarioTelefono,
    propietarioCorreo
) {

    let age= calcularAños(fechaNacimiento)
    const mascota = {
        nombre,
        especie,
        raza,
        fechaNacimiento:age,
        peso,
        estado,
        propietario: {
            nombre: propietarioNombre,
            documento: propietarioDocumento,
            telefono: propietarioTelefono,
            correo: propietarioCorreo
        }
    };

    mascotas.push(mascota);
    return mascota
}

function calcularAños(age) {
    let corrientDay = new Date() 
    let nacimiento= new Date(age)
    let ffinal= corrientDay.getFullYear - nacimiento.getFullYear
    return ffinal
    
}

// Función para ver la lista de todas las mascotas registradas
function verTodasMascotas() {
    console.log("Lista de todas las mascotas registradas:");
    mascotas.forEach(mascota => console.log(mascota));
}

// Función para ver una lista de todos los dueños
function verTodosDueños() {
    const dueño = new Set();
    mascotas.forEach(mascota => dueño.add(mascota.propietario.nombre));
    console.log("Lista de todos los dueños:");
    dueño.forEach(dueño => console.log(dueño));
}

// Función para buscar una mascota por nombre
function buscarPorNombre(nombre) {
    const mascotaEncontrada = mascotas.find(mascota => mascota.nombre.toLowerCase() === nombre.toLowerCase());
    if (mascotaEncontrada) {
        console.log(mascotaEncontrada);
    } else {
        console.log("Mascota no encontrada.");
    }
}

// Función para filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño
function filtrarPorDueno(nombreDueno) {
    const mascotasDueno = mascotas.filter(mascota => mascota.propietario.nombre.toLowerCase() === nombreDueno.toLowerCase());
    console.log(`Mascotas de ${nombreDueno}:`);
    mascotasDueno.forEach(mascota => console.log(mascota));
}

// Función para actualizar la información de una mascota existente
function actualizarMascota(nombre) {
    const mascota = mascotas.find(mascota => mascota.nombre.toLowerCase() === nombre.toLowerCase());
    if (mascota) {
        const nuevoEstado = prompt("Nuevo estado (estable/crítico):");
        mascota.estado = nuevoEstado;
        console.log("Información actualizada exitosamente.");
    } else {
        console.log("Mascota no encontrada.");
    }
}


// Función para eliminar una mascota del array
function eliminarMascota(nombre) {
    const index = mascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombre.toLowerCase());
    if (index !== -1) {
        mascotas.splice(index, 1);
        console.log("Mascota eliminada exitosamente.");
    } else {
        console.log("Mascota no encontrada.");
    }
}

// Función para mostrar el menú de acciones
function mostrarMenu() {
    document.write("\n--- Menú ---");
    document.write("1. Registrar una nueva mascota");
    document.write("2. Ver la lista de todas las mascotas registradas");
    document.write("3. Ver una lista de todos los dueños");
    document.write("4. Buscar una mascota por nombre");
    document.write("5. Filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño");
    document.write("7. Eliminar una mascota del array");
    document.write("6. Actualizar la información de una mascota existente");
    document.write("8. Salir");
}

// Función principal para ejecutar el programa
function main() {

    /*mostrarMenu();*/
    while (true) {
        const opcion = prompt("Seleccione una opción:" +
            "\n--- Menú ---" +
            "\n1. Registrar una nueva mascota" +
            "\n2. Ver la lista de todas las mascotas registradas" +
            "\n3. Ver una lista de todos los dueños" +
            "\n4. Buscar una mascota por nombre" +
            "\n5. Filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño" +
            "\n6. Actualizar la información de una mascota existente" +
            "\n7. Eliminar una mascota del array" +
            "\n8. Salir");
        switch (opcion) {
            case "1":
                registrarMascota();
                break;
            case "2":
                verTodasMascotas();
                break;
            case "3":
                verTodosDueños();
                break;
            case "4":
                const nombre = prompt("Ingrese el nombre de la mascota a buscar:");
                buscarPorNombre(nombre);
                break;
            case "5":
                const nombreDueno = prompt("Ingrese el nombre del dueño para filtrar:");
                filtrarPorDueno(nombreDueno);
                break;
            case "6":
                const nombreMascota = prompt("Ingrese el nombre de la mascota a actualizar:");
                actualizarMascota(nombreMascota);
                break;
            case "7":
                const nombreMascotaEliminar = prompt("Ingrese el nombre de la mascota a eliminar:");
                eliminarMascota(nombreMascotaEliminar);
                break;
            case "8":
                console.log("Saliendo del programa...");
                return;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }
    }
}

// Ejecutar el programa
main();