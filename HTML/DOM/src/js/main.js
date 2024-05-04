let seccion1 = document.getElementById("todosLosAnimales")



//                      10
for (let i = 0; i <= mascotas.length; i++) {
    seccion1.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="https://picsum.photos/200" class="card-img-top" alt="...">
    <div class="card-body">
    <center>
      <h5 class="card-title">perrito</h5>
      <p class="card-text">raza.</p>
      <p class="card-text">dueño.</p>
      <a href="#" class="btn btn-primary">ver detalles</a>
      </center>
    </div>
  </div>
    `
}




// Lista de mascotas previamente registradas




// // Función para registrar una nueva mascota
// function registrarMascota() {
//     const nombre = prompt("Nombre de la mascota:");
//     const especie = prompt("Especie:");
//     const raza = prompt("Raza:");
//     const fechaNacimiento = prompt("Fecha de nacimiento (YYYY-MM-DD):");
//     const peso = parseFloat(prompt("Peso (kg):"));
//     const estado = prompt("Estado (estable/crítico):");
//     const propietarioNombre = prompt("Nombre del propietario:");
//     const propietarioDocumento = prompt("Documento del propietario:");
//     const propietarioTelefono = prompt("Teléfono del propietario:");
//     const propietarioCorreo = prompt("Correo del propietario:");

//     registerPet(nombre,
//         especie,
//         raza,
//         fechaNacimiento,
//         peso,
//         estado,
//         propietarioNombre,
//         propietarioDocumento,
//         propietarioTelefono,
//         propietarioCorreo)

//     console.log("Mascota registrada exitosamente.");
// }

// function registerPet(
//     nombre,
//     especie,
//     raza,
//     fechaNacimiento,
//     peso,
//     estado,
//     propietarioNombre,
//     propietarioDocumento,
//     propietarioTelefono,
//     propietarioCorreo
// ) {

//     let age= calcularAños(fechaNacimiento)
//     const mascota = {
//         nombre,
//         especie,
//         raza,
//         fechaNacimiento:age,
//         peso,
//         estado,
//         propietario: {
//             nombre: propietarioNombre,
//             documento: propietarioDocumento,
//             telefono: propietarioTelefono,
//             correo: propietarioCorreo
//         }
//     };

//     mascotas.push(mascota);
//     return mascota
// }

// function calcularAños(age) {
//     let corrientDay = new Date() 
//     let nacimiento= new Date(age)
//     let ffinal= corrientDay.getFullYear - nacimiento.getFullYear
//     return ffinal
    
// }

// // Función para ver la lista de todas las mascotas registradas
// function verTodasMascotas() {
//     console.log("Lista de todas las mascotas registradas:");
//     mascotas.forEach(mascota => console.log(mascota));
// }

// // Función para ver una lista de todos los dueños
// function verTodosDueños() {
//     const dueño = new Set();
//     mascotas.forEach(mascota => dueño.add(mascota.propietario.nombre));
//     console.log("Lista de todos los dueños:");
//     dueño.forEach(dueño => console.log(dueño));
// }

// // Función para buscar una mascota por nombre
// function buscarPorNombre(nombre) {
//     const mascotaEncontrada = mascotas.find(mascota => mascota.nombre.toLowerCase() === nombre.toLowerCase());
//     if (mascotaEncontrada) {
//         console.log(mascotaEncontrada);
//     } else {
//         console.log("Mascota no encontrada.");
//     }
// }

// // Función para filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño
// function filtrarPorDueno(nombreDueno) {
//     const mascotasDueno = mascotas.filter(mascota => mascota.propietario.nombre.toLowerCase() === nombreDueno.toLowerCase());
//     console.log(`Mascotas de ${nombreDueno}:`);
//     mascotasDueno.forEach(mascota => console.log(mascota));
// }

// // Función para actualizar la información de una mascota existente
// function actualizarMascota(nombre) {
//     const mascota = mascotas.find(mascota => mascota.nombre.toLowerCase() === nombre.toLowerCase());
//     if (mascota) {
//         const nuevoEstado = prompt("Nuevo estado (estable/crítico):");
//         mascota.estado = nuevoEstado;
//         console.log("Información actualizada exitosamente.");
//     } else {
//         console.log("Mascota no encontrada.");
//     }
// }


// // Función para eliminar una mascota del array
// function eliminarMascota(nombre) {
//     const index = mascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombre.toLowerCase());
//     if (index !== -1) {
//         mascotas.splice(index, 1);
//         console.log("Mascota eliminada exitosamente.");
//     } else {
//         console.log("Mascota no encontrada.");
//     }
// }

// // Función para mostrar el menú de acciones
// function mostrarMenu() {
//     document.write("\n--- Menú ---");
//     document.write("1. Registrar una nueva mascota");
//     document.write("2. Ver la lista de todas las mascotas registradas");
//     document.write("3. Ver una lista de todos los dueños");
//     document.write("4. Buscar una mascota por nombre");
//     document.write("5. Filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño");
//     document.write("7. Eliminar una mascota del array");
//     document.write("6. Actualizar la información de una mascota existente");
//     document.write("8. Salir");
// }

// // Función principal para ejecutar el programa
// function main() {

//     /*mostrarMenu();*/
//     while (true) {
//         const opcion = prompt("Seleccione una opción:" +
//             "\n--- Menú ---" +
//             "\n1. Registrar una nueva mascota" +
//             "\n2. Ver la lista de todas las mascotas registradas" +
//             "\n3. Ver una lista de todos los dueños" +
//             "\n4. Buscar una mascota por nombre" +
//             "\n5. Filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño" +
//             "\n6. Actualizar la información de una mascota existente" +
//             "\n7. Eliminar una mascota del array" +
//             "\n8. Salir");
//         switch (opcion) {
//             case "1":
//                 registrarMascota();
//                 break;
//             case "2":
//                 verTodasMascotas();
//                 break;
//             case "3":
//                 verTodosDueños();
//                 break;
//             case "4":
//                 const nombre = prompt("Ingrese el nombre de la mascota a buscar:");
//                 buscarPorNombre(nombre);
//                 break;
//             case "5":
//                 const nombreDueno = prompt("Ingrese el nombre del dueño para filtrar:");
//                 filtrarPorDueno(nombreDueno);
//                 break;
//             case "6":
//                 const nombreMascota = prompt("Ingrese el nombre de la mascota a actualizar:");
//                 actualizarMascota(nombreMascota);
//                 break;
//             case "7":
//                 const nombreMascotaEliminar = prompt("Ingrese el nombre de la mascota a eliminar:");
//                 eliminarMascota(nombreMascotaEliminar);
//                 break;
//             case "8":
//                 console.log("Saliendo del programa...");
//                 return;
//             default:
//                 console.log("Opción inválida. Por favor, seleccione una opción válida.");
//         }
//     }
// }

// Ejecutar el programa
// main();